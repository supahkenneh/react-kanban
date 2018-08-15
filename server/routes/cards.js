const router = require('express').Router();
const Card = require('../db/models/Card');

router.route('/')
  .get((req, res) => {
    res.send('cards here');
  });

module.exports = router;