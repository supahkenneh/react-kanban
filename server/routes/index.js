const router = require('express').Router();
// const Card = require('../db/models/Card');
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
  console.log(req.body);
  // const title = req.body.title.trim();
  // const body = req.body.body.trim();
  // const priority = req.body.priority;
  // const createdBy = req.body.created.trim();
  // const assign = req.body.assign.trim()
  // const status = req.body.status

  // const card = {
  //   title,
  //   body,
  //   priority,
  //   status,
  //   createdBy,
  //   assign,
  // }

  // return new Card(card)
  //   .save()
  //   .then(newCard => {
  //     return res.json(newCard)
  //   })
  //   .catch(err => console.log(err));
});

module.exports = router;