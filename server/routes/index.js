const router = require('express').Router();
const Card = require('../db/models/Card');
const db = require('../db/knex');

router.get('/', (req, res) => {
  return db.raw(
    `SELECT
        cards.title,
        cards.body,
        priorities.name AS priority,
        statuses.name AS status,
        uc.first_name AS created_by,
        ua.first_name AS assigned_to
      FROM cards
      INNER JOIN priorities ON cards.priority_id = priorities.id
      INNER JOIN statuses ON cards.status_id = statuses.id
      INNER JOIN users uc ON cards.created_by = uc.id
      INNER JOIN users ua ON cards.assigned_to = ua.id`
  )
    .then(cards => {
      res.json(cards.rows);
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