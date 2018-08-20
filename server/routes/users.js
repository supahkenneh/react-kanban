const router = require('express').Router();
const User = require('../db/models/User');

router.route('/')
  .get((req, res) => {
    return User
      .fetchAll()
      .then(users => {
        res.json(users);
      })
      .catch(err => console.log(err));
  });

module.exports = router;