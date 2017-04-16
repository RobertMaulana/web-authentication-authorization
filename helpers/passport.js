const passport = require('passport');
const passportLocal = require('passport-local');
const hash = require('password-hash');
const jwt = require('jsonwebtoken');
const Strategy = passportLocal.Strategy;
const db = require('../models/user_model');

passport.use(new Strategy(
  (username, password, next) => {
    db.findOne({email: username}, (err, result) => {
      if (result == null) {
        next("Username does not exist!")
      }else {
        if (username == result.email && hash.verify(password, result.password)) {
          // var token = jwt.sign({ username: result.username, role: result.role }, 'secret', {expiresIn: 60 });
          var token = jwt.sign({ username: result.email }, 'secret');
          next(null, {token: token});
        }
      }
    })
  }
));

module.exports = passport.authenticate("local", {session: false});
