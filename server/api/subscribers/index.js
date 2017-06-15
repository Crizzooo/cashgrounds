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


router.post('/', (req, res, next) => {
  console.log('post subscribers received: ', req.body);
  if (!req.body.email || !req.body.gamerName){
    let err = new Error('Email && GamerName are required to subscribe');
    res.send(err);
    next(err);
  }
  Subscribers.create(req.body)
  .then( (newSubscriber) => {
    console.log('created new subscriber: ', newSubscriber);
    res.status(201).json(newSubscriber);
  })
  .catch(next);
});

module.exports = router;
