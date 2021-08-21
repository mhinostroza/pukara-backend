import express from 'express';
import users from './users';

const router = express.Router();

// router.route('/me').get(users.me);
// router.route('/login').post(users.login);
router.route('/register').post(users.register);

export default router;
