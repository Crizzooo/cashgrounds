const router = require('express').Router();
const axios = require('axios');

const Subscribers = require('../../db/models/Subscribers');
const {subscribingUserToMailChimp} = require('../utils/mailchimpApiUtils');


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
  let newSubscriber;
  if (!req.body.email || !req.body.gamerName){
    let err = new Error('Email && GamerName are required to subscribe');
    res.status(400).send(err);
  }
  Subscribers.create(req.body)
  .then( (newSubscriberInstance) => {
    console.log('created new subscriber: ', newSubscriberInstance);
    newSubscriber = newSubscriberInstance;
    return  (process.env.NODE_ENV === 'development') ? null :  subscribingUserToMailChimp(newSubscriberInstance.email, newSubscriberInstance.gamerName);
  })
  .then( (mailchimpResponse) => {
    res.status(201).json(newSubscriber);
  })
  .catch(next);
});

module.exports = router;
