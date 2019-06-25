const express = require('express');
const router = express.Router();

const users = require('../models').users
const posts = require('../models').posts

/* GET all users. */
router.get('/', (req, res, next) => {
  users.findAll()
    .then(users => {
      res.json(users)
    })
    .catch(err => console.log(err))
});

router.get('/:id', (req, res, next) => {
  users.findOne({ 
    where: { "id": req.params.id}
  })
    .then(user => {
      res.json(user)
    })
    .catch(err => {
      res.sendStatus(400).json({
        message: `post with id ${req.params.id} not found`
      })
    })
})



module.exports = router;