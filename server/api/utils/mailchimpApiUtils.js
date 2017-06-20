const axios = require('axios');

// axios.get('https://us15.api.mailchimp.com/3.0/', {
//   auth: {
//     username: 'crizzo',
//     password: process.env.MAILCHIMP_CLIENT_ID
//   }
// })
// .then( (apiRes) => {
//   console.log('received from mailchimp: ', apiRes.data);
//   res.status(200).send(apiRes.data);
// })
// .catch(next);


function subscribingUserToMailChimp(email, gamerName){
  return axios.post('https://us15.api.mailchimp.com/3.0/lists/c29285afce/members',
      {
      email_address: email,
      status: 'subscribed',
      merge_fields: {
          GAMERNAME: gamerName
        }
      },
      { auth: {
          username: 'crizzo',
          password: process.env.MAILCHIMP_CLIENT_ID
        }
      });
}

module.exports = {
  subscribingUserToMailChimp
};
