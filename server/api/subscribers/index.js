const router = require('express').Router();

const Subscribers = require('../../db/models/Subscribers');


router.get('/', (req, res, next) => {
  Subscribers.findAll()
  .then( (subscribers) => {
    console.log('received subscribers from db: ', subscribers);
    res.json(subscribers);
  })
  .catch(next);
});


module.exports = router;
