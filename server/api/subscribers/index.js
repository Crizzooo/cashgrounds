const router = require('express').Router();
const axios = require('axios');

// const Subscribers = require('../../db/models/Subscribers');
const {subscribingUserToMailChimp} = require('../utils/mailchimpApiUtils');


// router.get('/', (req, res, next) => {
//   Subscribers.findAll()
//   .then( (subscribers) => {
//     console.log('received subscribers from db: ', subscribers);
//     res.json(subscribers);
//   })
//   .catch(next);
// });


router.post('/', (req, res, next) => {
  console.log('post subscribers received: ', req.body);
  
  if (!req.body.email || !req.body.gamerName){
    let err = new Error('Email && GamerName are required to subscribe');
    res.status(400).send(err);
  }

  if (process.env.NODE_ENV === 'development') {
    res.status(201).json({ email: req.body.email, gamerName: req.body.gamerName});
    return;
  }

  subscribingUserToMailChimp(req.body.email, req.body.gamerName)
  .then( (mailchimpResponse) => {
    res.status(201).json(newSubscriber);
  })
  .catch(next);
});

module.exports = router;
