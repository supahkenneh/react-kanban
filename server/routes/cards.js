const router = require('express').Router();
const Card = require('../db/models/Card');

router.route('/')
  .get((req, res) => {
    return Card
    .fetchAll()
    .then(cards => {
      res.json(cards);
    })
    .catch(err => console.log(err));
  });

module.exports = router;