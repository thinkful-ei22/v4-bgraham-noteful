'use strict';

const express = require('express');
const  User  = require('../models/user');
const router = express.Router();



router.post('/', (req, res, next) => {

  let {username, password} = req.body;

  const newUser = { username, password};

  User.create(newUser)
    .then(result => {
      res.location(`${req.originalUrl}/${result.id}`).status(201).json(result);
    })
    .catch(err => next(err));
});


module.exports = router;
