const User = require('../models/User');

module.exports = {
  registerForm(req, res) {
    return res.render('users/register');
  },
  async show(req, res) {
    return res.send('OK, cadastrado');
  },
  async post(req, res) {
    const userId = await User.create(req.body);

    req.session.userId = userId;

    return res.redirect('/users');
  }
};