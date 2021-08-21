/* eslint-disable no-underscore-dangle */

import fs from 'fs';
import Patient from '../../models/patient';

function register(req, res) {
  const { id } = req;
  const { document } = req.body;

  const PatientController = new Patient({
    userID: id,
    document,
    sign: {
      data: fs.readFileSync(req.files.userPhoto.path),
      contentType: 'image/png',
    },
  });

  PatientController.save((err) => {
    if (err) {
      if (err.name === 'MongoError' && err.code === 11000) {
        return res
          .status(422)
          .send({ succes: false, message: 'This document already exists' });
      }
      return res.status(422).send(err);
    }

    res.json({ success: true });
  });
}

export default { register };
