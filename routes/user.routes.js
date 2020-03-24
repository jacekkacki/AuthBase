const express = require('express');
const router = express.Router();

const logged = (req, res, next) => {
  if(!req.user) res.redirect('/user/no-permision');
  else next();
}

router.get('/logged', logged, (req, res) => {
  console.log(req.user);
  res.render('logged', { name: req.user._json.name, avatar: req.user._json.picture });
});

router.get('/no-permission', (req, res) => {
  res.render('noPermission');
});

router.get('/profile', logged, (req, res) => {
  res.render('profile');
  }
);

router.get('/profile/setting', logged, (req, res) => {
    res.render('setting');
  }
);

module.exports = router;