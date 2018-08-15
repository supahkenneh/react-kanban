const router = require('express').Router();
const User = require('../db/models/User');

router.route('/')
  .get((req, res) => {
    res.send('users here');
  });

module.exports = router;