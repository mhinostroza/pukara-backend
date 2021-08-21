import jwt from 'jsonwebtoken';
import User from '../../models/user';

function register(req, res, next) {
  const { document, password } = req.body;
  const UserController = new User({ document, password });

  UserController.save((err, user) => {
    if (err) {
      if (err.name === 'MongoError' && err.code === 11000) {
        return res
          .status(422)
          .send({ succes: false, message: 'This document already exists' });
      }
      return res.status(422).send(err);
    }

    const token = jwt.sign(
      { id: user.document, role: document.role },
      'SECRET'
    );

    res.json({
      success: true,
      token,
    });
  });
}

function me(req, res, next) {
  res.json({
    success: true,
  });
}

function hello(req, res, next) {
  res.json({
    success: 'Faith',
  });
}

export default { register, me, hello };
