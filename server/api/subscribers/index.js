const router = require('express').Router();
const axios = require('axios');

const {subscribingUserToMailChimp} = require('../utils/mailchimpApiUtils');

router.post('/', (req, res, next) => {
  console.log('post subscribers received: ', req.body);
  
  if (!req.body.email || !req.body.gamerName){
    let err = new Error('Email && GamerName are required to subscribe');
    res.status(400).send(err);
  }

  subscribingUserToMailChimp(req.body.email, req.body.gamerName)
  .then( (mailchimpResponse) => {
    res.status(201).json({email: req.body.email, gamerName: req.body.gamerName});
  })
  .catch((err)=> {
    console.log('error received from mail chimp: ', err.response.data);
    if (err.response.data.title == 'Member Exists') {
      res.status(201).json({email: req.body.email, gamerName: req.body.gamerName});
    } else {
      res.send(err);
    }
  });
});

module.exports = router;
