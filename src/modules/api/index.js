import express from 'express';
import jwt from 'jsonwebtoken';
import users from './users';
import schedule from './schedule';
import patient from './patient';
import vaccinationCentres from './vaccinationCentres';

const router = express.Router();

const middlewares = {
  isLoggedIn(req, res, next) {
    const token = req.headers.access_token;

    if (!token) {
      return res.sendStatus(403);
    }
    try {
      const data = jwt.verify(token, 'SECRET');
      req.id = data.id;
      req.role = data.role;

      return next();
    } catch (err) {
      return res.sendStatus(403);
    }
  },
};

router.route('/me').get(middlewares.isLoggedIn, users.me);
// router.route('/login').post(users.login);
router.route('/register').post(users.register);

router.route('/schedule').get(middlewares.isLoggedIn, schedule.index);

router.route('/schedule').post(middlewares.isLoggedIn, schedule.register);

router.route('/patient').post(middlewares.isLoggedIn, patient.register);

router
  .route('/vaccination-centres')
  .post(middlewares.isLoggedIn, vaccinationCentres.register);

router.route('/hello').get(users.hello);

export default router;
