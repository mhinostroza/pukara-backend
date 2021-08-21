/* eslint-disable no-underscore-dangle */
import jwt from 'jsonwebtoken';
import vision from '@google-cloud/vision';
import User from '../../models/user';

function register(req, res, next) {
  const { name, document, password, verify, email, cellPhone } = req.body;

  const UserController = new User({
    name,
    document,
    password,
    verify,
    email,
    cellPhone,
  });

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
      { id: user._id, document: user.document, role: user.role },
      'SECRET'
    );

    res.json({
      success: true,
      token,
    });
  });
}

function me(req, res, next) {
  const { id } = req;

  User.findById(id, (err, user) => {
    res.json({ user });
  });
}

async function hello(req, res, next) {
  const client = new vision.ImageAnnotatorClient();

  // Performs label detection on the image file
  const [result] = await client.labelDetection(
    'https://diariocorreo.pe/resizer/kp7KOhO_q7W8w-Y-dUvjidKZL7s=/580x330/smart/filters:format(jpeg):quality(75)/arc-anglerfish-arc2-prod-elcomercio.s3.amazonaws.com/public/QCWY5E6RMNHB7B5DMJY6NTK3XQ.jpg'
  );
  const labels = result.labelAnnotations;
  console.log('Labels:');
  labels.forEach((label) => console.log(label.description));

  res.json({
    success: 'Faith',
  });
}

export default { register, me, hello };
