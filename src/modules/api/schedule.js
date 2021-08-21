/* eslint-disable no-underscore-dangle */

import Schedule from '../../models/schedule';

function register(req, res) {
  const { id } = req;
  const { name, date } = req.body;

  const ScheduleController = new Schedule({
    userID: id,
    name,
    date,
  });

  ScheduleController.save((err) => {
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

function index(req, res) {
  const { id } = req;

  Schedule.findOne({ userID: id }, (err, schedule) => {
    res.json({ schedule });
  });
}

export default { register, index };
