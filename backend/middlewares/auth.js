// const jwt = require('jsonwebtoken');
import jwt from 'jsonwebtoken'

export const authenticateToken = (req, res, next) => {
  const token = req.header('Authorization').split(' ')[1];
  if (!token) return res.status(401).send('Access Denied');

  jwt.verify(token, 'your_jwt_secret', (err, user) => {
    if (err) return res.status(403).send('Invalid Token');
    req.user = user;
    next();
  });
};

export const authorizeRole = (role) => {
  return (req, res, next) => {
    if (req.user.role !== role) {
      return res.status(403).send('Permission Denied');
    }
    next();
  };
};

module.exports = { authenticateToken, authorizeRole };
