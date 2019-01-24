const express = require('express');

const authRouter = express.Router();
const bodyParser = require('body-parser');
const authController = require('../controllers/AuthController');

const VerifyToken = require('../auth/VerifyToken');

authRouter.use(bodyParser.urlencoded({ extended: false }));
authRouter.use(bodyParser.json());

function router(db) {
  const {
    register, login, authenticate
  } = authController(db);
  authRouter.route('')
    .get(VerifyToken, authenticate)
    .post(register);
  authRouter.route('/login')
    .post(login);
  return authRouter;
}

module.exports = router;
