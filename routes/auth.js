'use strict';

const express = require('express');
const options = {session: false, failWithError: true};
const passport = require('passport');

const router = express.Router();
const localAuth = passport.authenticate('local', options);

router.post('/login', localAuth, function (req, res) {
  return res.json(req.user);
});

module.exports = router;