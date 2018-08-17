const router = require('express').Router();
const Card = require('../db/models/Card');
// const db = require('../db/knex');

router.get('/', (req, res) => {
  return Card
    .fetchAll()
    .then(cards => {
      res.json(cards);
    })
    .catch(err => console.log(err));
})

router.post('/', (req, res) => {
  let {
    title,
    body,
    priority_id,
    status_id,
    created_by,
    assigned_to
  } = req.body;

  return new Card(req.body)
    .save()
    .then(newCard => {
      return res.json(newCard)
    })
    .catch(err => console.log(err));
});

module.exports = router;