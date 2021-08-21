/* eslint-disable no-underscore-dangle */

import VaccinationCentres from '../../models/vaccination_centres';

function index(req, res) {
  VaccinationCentres.find({}, (err, vaccinationCentres) => {
    res.json({ vaccinationCentres });
  });
}

export default { index };
