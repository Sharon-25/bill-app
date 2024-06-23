const express = require('express');
const passport = require('passport');
const jwt = require('jsonwebtoken');
const keys = require('../config/keys.cjs');

const router = express.Router();

router.get(
  '/auth/google',
  passport.authenticate('google', {
    scope: ['profile', 'email'],
  })
);

router.get(
  '/auth/google/callback',
  passport.authenticate('google'),
  (req, res) => {
    const token = jwt.sign({ id: req.user.id }, keys.jwtSecret, { expiresIn: '1h' });
    res.redirect(`/dashboard?token=${token}`);
  }
);

module.exports = router;
