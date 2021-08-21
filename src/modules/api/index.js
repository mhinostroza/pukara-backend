import express from 'express';
import jwt from 'jsonwebtoken';
import users from './users';

const router = express.Router();

const authorization = (req, res, next) => {
  console.log('Eqw', req);
  const token = req.access_token;
  if (!token) {
    return res.sendStatus(403);
  }
  try {
    const data = jwt.verify(token, 'SECRET');
    req.userId = data.id;
    req.userRole = data.role;
    return next();
  } catch (err) {
    return res.sendStatus(403);
  }
};

router.route('/me').get(users.me);
// router.route('/login').post(users.login);
router.route('/register').post(users.register);

router.route('/hello').get(users.hello);

export default router;
