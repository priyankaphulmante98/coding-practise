const jwt = require("jsonwebtoken");

const auth = (req, res, next) => {
  const token = req.headers.authorization;
  jwt.verify(token, "fullstack123", function (err, decoded) {
    if (err) {
      return res.send("login failed");
    }

    req.body.userId = decoded.id;
    console.log(decoded,"decoded")
    next();
  });
};

module.exports = auth;
