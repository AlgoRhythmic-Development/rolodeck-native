require("dotenv").config();

const jwt = require("jsonwebtoken");

const secret = process.env.JWT_SECRET;

module.exports = {
  signToken: function ({ username, email, _id }) {
    const payload = { username, email, _id };

    return jwt.sign({ data: payload }, secret);
  },

  authMiddleware: function ({ req }) {
    // allows token to be sent via req.body, .query, or headers
    let token = req.body.token || req.query.token || req.headers.authorization;

    // seperate " Bearer" from "<tokenvalue>"
    if (req.headers.authorization) {
      token = token.split(" ").pop().trim();
    }

    // if no token, return request object as is
    if (!token) {
      return req;
    }

    try {
      // decode and attach user data to request object
      const { data } = jwt.verify(token, secret);
      req.user = data;
    } catch {
      console.log("Invalid token");
    }

    // return updated request object
    return req;
  },
};
