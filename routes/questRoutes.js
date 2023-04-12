 const mongoose = require('mongoose');
const requireLogin = require('../middlewares/requireLogin');
const requireCredits = require('../middlewares/requireCredits');
const Quests = mongoose.model('quests');
const Contestant = mongoose.model('contestants');

module.exports = app => {

  app.get("/api/allquests", requireLogin, async (req, res) => {
    try {
      const quests = await Quests.find().sort({ body: 'asc' });
      res.send(quests);
    } catch (error) {
      console.error(error);
      res.status(500).send('Internal Server Error');
    }
  });

  app.get("/api/quests", requireLogin, async (req, res) => {
    const quests = await Quests.find({ _user: req.user.id });
    res.send(quests);
  });

  app.post('/api/quests', requireLogin, requireCredits, async (req, res) => {
    const { title, subject, body } = req.body;
    const quest = new Quests({
      title,
      subject,
      body,
      _user: req.user.id
    });

    try{
    await quest.save();
    
    req.user.credits -= 1;
    const user = await req.user.save();

    res.send(user);
  } catch (err){
    res.status(422).send(err);
  }
  });

  app.post('/api/allquests', requireLogin, async (req, res) => {
    const { image } = req.body;
    const contestant = new Contestant({
      image,
      _user: req.user.id
    });

    const quest = new Quests({
      contestant
    });

    try{
    await quest.save();
    
  } catch (err){
    res.status(422).send(err);
  }
  });

};
//