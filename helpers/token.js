const jwt = require('jsonwebtoken');

let verifyToken = (req, res, next) => {
  jwt.verify(req.headers.token, "secret", (err, decoded) => {
    if (decoded) {
      req.decoded = decoded
      next();
    }else {
      res.send("You are not authorize!")
    }
  })
}

module.exports = verifyToken
