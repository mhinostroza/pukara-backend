import User from '../../models/user';

function register(req, res, next) {
  const { document, password } = req.body;

  const UserController = new User({ document, password });

  UserController.save().then((user, err) => {
    if (err) {
      return res.json({ error: 'something unexpected happened' });
    }
    return res.json({ user });
  });
}

export default { register };
