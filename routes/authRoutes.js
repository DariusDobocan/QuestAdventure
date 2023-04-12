const mongoose = require('mongoose');
const passport = require('passport');
const requireLogin = require('../middlewares/requireLogin');
const User = mongoose.model('users');

module.exports = (app) => {
  app.get(
    '/auth/google',
    passport.authenticate('google',{
    scope: ['profile','email']
  })
  );

  app.get(
    '/auth/google/callback',
     passport.authenticate('google'),
     (req, res) => {
       res.redirect('/quests');
     }
   );

  app.get('/api/logout', (req, res) =>{
    req.logout(req.user, err => {
   if(err) return next(err);
   res.redirect('/');
 });
  });

  app.get('/api/current_user', (req, res) => {
    res.send(req.user);
  });

  app.get('/auth/login', passport.authenticate('local',{
    successRedirect: '/quests',
    failureRedirect: '/auth/login'
  }));

  app.get('/api/users', async (req, res) => {
    try {
      const users = await User.find().sort({ credits: 'desc' });
      res.send(users);
    } catch (error) {
      console.error(error);
      res.status(500).send('Internal Server Error');
    }
  });
};
