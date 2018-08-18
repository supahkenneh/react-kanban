const router = require('express').Router();
const Card = require('../db/models/Card');
const User = require('../db/models/User');

router.get('/', (req, res) => {
  return Card
    .fetchAll({ withRelated: ['priority', 'status', 'createdBy', 'assignedTo'] })
    .then(cards => {
      // console.log(cards);
      res.json(cards);
    })
    .catch(err => console.log(err));
})

router.get('/user', (req, res) => {
  return User
    .fetchAll()
    .then(users => {
      // console.log(users)
      res.json(users);
    })
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
    .then(response => {
      return response.refresh({ withRelated: ['priority', 'status', 'createdBy', 'assignedTo'] })
    })
    .then(newCard => {
      return res.json(newCard)
    })
    .catch(err => console.log(err));
});

router.put('/:id', (req, res) => {
  const id = req.params.id;
  console.log('req.body', req.body);
  let {
    title,
    body,
    priority_id,
    created_by,
    assigned_to,
    status_id
  } = req.body
  return new Card({ id })
    .save({ title, body, priority_id, created_by, assigned_to, status_id })
    .then(response => {
      return res.json(response)
    })
    .catch(err => console.log(err))
})

router.delete('/:id', (req, res) => {
  const id = req.params.id;
  return new Card({ id })
    .destroy()
    .then(cards => {
      return Card
        .fetchAll({ withRelated: ['priority', 'status', 'createdBy', 'assignedTo'] })
        .then(cards => {
          res.json(cards);
        })
    })
    .catch(err => console.log(err));
})

module.exports = router;