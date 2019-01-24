const debug = require('debug')('app:authController');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const config = require('../../config');

function AuthController(db) {
  const authService = require('../services/AuthService')(db);
  function register(req, res) {
    const hashedPassword = bcrypt.hashSync(req.body.password);

    const user = {
      name: req.body.name,
      email: req.body.email,
      password: hashedPassword,
    };

    (async function query() {
      try {
        const userData = await authService.save(user);
        const token = jwt.sign({ id: userData.id }, config.secret, { expiresIn: 64000 });
        res.status(200).send({ auth: true, token });
      } catch (error) {
        res.status(500).send('There was a problem registering the user.');
      }
    }());
  }

  function authenticate(req, res, next) {
    (async function () {
      try {
        const userData = await authService.getById(req.userId);
        if (!userData) {
          return res.status(401).send('no user found');
        }
        res.status(200).send(userData);
        //next(userData);
      } catch (usererr) {
        return res.status(500).send(`there was a problem ${usererr}`);
      }
    }());
  }

  function login(req, res) {
    (async function () {
      try {
        const userData = await authService.getByName(req.body.name);
        if (!userData) {
          res.status(401).send('no user found');
        }
        const user = userData.dataValues;
        let passwordIsValid = bcrypt.compareSync(req.body.password, user.password);
        if (!passwordIsValid) {
          res.status(401).send({ auth: false, token: null });
        }
        const userResponse = { id: user.id, name: user.name };
        var token = jwt.sign(userResponse, config.secret, {
          expiresIn: "10h"
        });
        res.status(200).send({ auth: true, token: token, user: userResponse  });
      } catch (usererr) {
        res.status(500).send(`error on the server ${usererr}`);
      }
    }());
  }

  return {
    register, authenticate, login
  };
}

module.exports = AuthController;
