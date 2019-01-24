const debug = require('debug')('app:verifyToken');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const config = require('../../config');

function verifyToken(req, res, next) {
  let token = req.headers['authorization'];
  if (!token) {
    return res.status(401).send({ auth: false, message: 'no token provided' });
  }
  token = token.replace('Bearer', '').trim();
  jwt.verify(token, config.secret, function (err, decoded) {
    if (err) {
      return res.status(500).send({ auth: false, message: 'Fail to authenticate token' });
    }
    req.userId = decoded.id;
    next();
  });
}

module.exports = verifyToken;