import React, { Component } from 'react';
import { connect } from 'react-redux';

import { Card, CardTitle, CardText, CardMedia } from 'material-ui/Card';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

import './EmailSplashStyle.scss';

import {marginGenerator, paddingGenerator} from '../utils/styleObjGenerators.js';

  // let bgColor = '0, 31, 62, ';
const getBackgroundStyle = (opacity) => {
  let bgColor = '10, 31, 62, ';
  if (!opacity) {
    return 'rgba(' + bgColor + 1.0 + ')';
  } else {
    return 'rgba(' + bgColor + opacity + ')';
  }
}

let cardStyle = {
  // 'boxShadow': getBackgroundStyle('.2') + ' 100px 1px 6px',
  'boxShadow': '3px 3px 20px 1px rgba(0,0,0,.8)'
  // 'overflow': 'hidden'
}

let flexStyle = {
  'display': 'flex',
  'justifyContent': 'center',
  'alignItems': 'center',
  'width': '100vw',
  'height': '100vh'
}

let imageSources = {
  old: "http://www.hdwallpaper.nu/wp-content/uploads/2017/04/PLAYERUNKNOWNS-BATTLEGROUNDS-12937712.jpg",
  new: '/assets/pubgSplash.jpg'
}

const copy = {
  subtitle: {
    main: "Cash Matches, Tournaments, and Leagues for competitive PUBG players",
    alternate:  "increase the adrenaline rush of the world's most intense video game by competing for cash"
  }
}

let marginStyle = marginGenerator('0px', '0px', '2.5em', '0px');
let paddingStyle = paddingGenerator('24px',  null, '16px', null);

class EmailSplash extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(evt) {
    console.log('changiing..');
    console.log(evt.target.value);
  }

  render() {
    let marginStyle = marginGenerator('-66px', 'auto', null, 'auto')
    return (
      <div className="" style={flexStyle}>
        <div className="row" style={{"height":"100%", "width":"100%"}}>
          <Card className="col-xs-12 col-sm-offset-1 col-sm-10 emailCard" style={{...cardStyle}}
            containerStyle={{"height":"100%", "padding":"0px", "width":"100%", "overflow":"hidden"}}
            >
            <CardMedia
              overlay={
                <CardTitle title={
                (<div>
                    <img style={
                        {"height": "20%", "maxHeight": "100px", "display": "block", ...marginStyle}
                    } src="/assets/cashgroundsTakeFour.png">
                    </img>
                    <span className="signupBrandName yellowText">CASHGROUNDS</span>
                    </div>)}
                subtitle={(
                  <div className="row">
                    <span
                    className="col-sm-offset-1 col-sm-10 ">{copy.subtitle.alternate}</span>
                  </div>)}
                subtitleStyle={{"fontFamily": "myriadPro", "fontSize": ".7em"}}/>}
                style={{"height":"33%", "overflow":"hidden", "contain": "content"}}
                mediaStyle={{"height":"100%", "width":"100%"}}
                className="emailCardMedia">
                <div className="signupHeaderImg"></div>
            </CardMedia>
            <CardText style={{"backgroundColor":"#111111", "textAlign":"center", "paddingBottom":"0px", "height":"39%", "overflow":"hidden"}}>
              <div className="col-xs-12 col-lg-offset-2 col-lg-8 signUpMarketingTab">
                  <p>PLAYERUNKNOWN’s BATTLEGROUNDS is the epitome of competitive gaming. Being alone on a huge map, fighting to the death against 100 strangers from every corner of the continent? Every player is already pumping energy into getting a chicken dinner. What if the reward instead was real money?
                  If you think you got the nerves of steel necessary to fight the intense stress of competition, betting on yourself will only improve your experience of an already extreme game. The motivation? Real rewards. Create a real sensation of SURVIVAL, your victory depends on you.</p>
                <div className="row">
                  <ul className="col-xs-offset-1 col-xs-11 col-lg-10" style={{"textAlign":"left", }}>
                    <br></br>
                    <li>Quick, safe, fast transactions using Paypall, Skrilla, or Dwolla
                    </li>
                    <li>
                      Different game modes supporting various playstyles, solo matches, series tournaments, and seasonal leagues!
                    </li>
                    <li>
                    Achievements, awards, and bonuses available for the most competitive players!
                    </li>
                    <li>
                    Perks to early adopters, i.e free squad tournament entries
                    </li>
                    <li>
                    Solo, Duo, Team Play - the ultimate stop for competitive pubg players
                    </li>
                    <li>
                    Different payout scehemes supporting all risk tolerances - prizes rewarding 33x entry fee, some payout so players make their money back as early as the 66th percentile
                    </li>
                  </ul>
                </div>
              </div>
            </CardText>
            <CardText style={{...paddingGenerator('0px', '0px', '0px', '0px'), "height":"27%"}}>
              <form action="//play.us15.list-manage.com/subscribe/post?u=d806631c2c2b68285d31de691&amp;id=c29285afce" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" className="validate" target="_blank" noValidate>

                <div className="row" style={{...marginGenerator(null, null, '3em', null)}}>

                  <div className="col-xs-12 col-sm-offset-1 col-sm-5 col-md-offset-2 col-md-3 ">
                    <TextField
                    hintText="email"
                    floatingLabelText="email address"
                    type="email"
                    autoCapitalize="off" autoCorrect="off" name="EMAIL" className="validate"
                    style={{"maxWidth": "256px", "width":"100%"}}
                    /><br />
                  </div>

                  <div className="col-xs-12 col-sm-offset-0 col-sm-5 col-md-offset-2 col-md-3 ">
                    <TextField
                      hintText="what do you go by?"
                      floatingLabelText="gamer name"
                      name="GAMERNAME"
                      type="text"
                      style={{"maxWidth": "256px", "width":"100%"}}
                    /><br />
                  </div>

                </div>

                <input type="hidden" name="u" value="d806631c2c2b68285d31de691"></input>
                <input type="hidden" name="id" value="c29285afce"></input>

                <RaisedButton type="submit" name="submit" value="Subscribe to list" label="Subscribe for Launch Updates" primary={true} style={marginGenerator(null, null, '1em', null)}/>

                <input type="hidden" name="ht" value="b22f7a9abaa70e0da9ad920a44daea817c852b2f:MTQ5NTA0MDUzMC4yNTM3"></input>
                <input type="hidden" name="mc_signupsource" value="hosted"></input>

              </form>
            </CardText>
        </Card>
      </div>
    </div>
    );
 }
}
//Ripped out old html
/*
          <CardTitle title="cashgrounds" subtitle="outwit. outlast. win cash!" className="signupHeader" style={{...paddingStyle, 'backgroundColor': 'rgba(0, 0, 0, .3)', 'overflow': 'hidden'}} subtitleStyle={marginGenerator('0.75em')}/>
          */

//RIPPED OUT FROM MAILCHIMP TEMPLAET
// <div className="input-field">
//   <input type="email" autoCapitalize="off" autoCorrect="off" name="MERGE0" id="MERGE0" size="25" type="email" className="validate"></input>
//   <label htmlFor="MERGE0">Email Address <span className="req asterisk">*</span></label>
// </div>

// EXAMPLE
const mapState = state => {
  // The reducers are combined in reducers/index.js and that is where their name is set
  // The format is state.REDUCERNAME.propertyOfREDUCERNAME
  return {};
};

// Unused example mapDispatch function
// const mapDispatch = state => {
//   return {};
// }

export default connect(mapState, null)(EmailSplash);


// <!-- Begin MailChimp Signup Form -->
// <link href="//cdn-images.mailchimp.com/embedcode/horizontal-slim-10_7.css" rel="stylesheet" type="text/css">

//COMPONENT CODE
// <div id="mc_embed_signup">
//   <form action="//play.us15.list-manage.com/subscribe/post?u=d806631c2c2b68285d31de691&amp;id=c29285afce" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" className="validate" target="_blank" noValidate>
//     <div id="mc_embed_signup_scroll">
//     	<label for="mce-EMAIL">Subscribe to our mailing list</label>
//     	<input type="email" value="" name="EMAIL" className="email" id="mce-EMAIL" placeholder="email address" required>
//         <div style="position: absolute; left: -5000px;" aria-hidden="true">
//           <input type="text" name="b_d806631c2c2b68285d31de691_c29285afce" tabindex="-1" value="">
//         </div>
//         <div className="clear">
//           <input type="submit" value="Subscribe" name="subscribe" id="mc-embedded-subscribe" className="button">
//         </div>
//     </div>
//   </form>
// </div>
//
// <!--End mc_embed_signup-->



// <form action="//play.us15.list-manage.com/subscribe/post?u=d806631c2c2b68285d31de691&amp;id=c29285afce" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" className="validate" target="_blank" noValidate>
//     <div id="mc_embed_signup_scroll">
// 	<h2>Subscribe to our mailing list</h2>
// <div className="indicates-required"><span className="asterisk">*</span> indicates required</div>
// <div className="mc-field-group">
// 	<label for="mce-EMAIL">Email Address  <span className="asterisk">*</span>
// </label>
// 	<input type="email" value="" name="EMAIL" className="required email" id="mce-EMAIL"></input>
// </div>
// <div className="mc-field-group">
// 	<label htmlForm="mce-GNAME">Gamer Name </label>
// 	<input type="text" value="" name="GNAME" className="" id="mce-GNAME"></input>
// </div>
// 	<div id="mce-responses" className="clear">
// 		<div className="response" id="mce-error-response" ></div>
// 		<div className="response" id="mce-success-response" ></div>
// 	</div>
//     <div aria-hidden="true"><input type="text" name="b_d806631c2c2b68285d31de691_c29285afce" tabindex="-1" value=""></input></div>
//     <div className="clear"><input type="submit" value="Subscribe" name="subscribe" id="mc-embedded-subscribe" className="button"></input></div>
//     </div>
// </form>


//MDB Example
/* return (<div className="row">
    <form className="col-md-12">
      <div className="row">
        <div className="input-field col-md-6">
          <input placeholder="Placeholder" id="first_name" type="text" className="validate"></input>
          <label htmlFor="first_name">First Name</label>
        </div>
        <div className="input-field col-md-6">
          <input id="last_name" type="text" className="validate"></input>
          <label htmlFor="last_name">Last Name</label>
        </div>
      </div>
      <div className="row">
        <div className="input-field col-md-12">
          <input disabled value="I am not editable" id="disabled" type="text" className="validate"></input>
          <label htmlFor="disabled">Disabled</label>
        </div>
      </div>
      <div className="row">
        <div className="input-field col-md-12">
          <input id="password" type="password" className="validate"></input>
          <label htmlFor="password">Password</label>
        </div>
      </div>
      <div className="row">
        <div className="input-field col-md-12">
          <input id="email" type="email" className="validate"></input>
          <label htmlFor="email">Email</label>
        </div>
      </div>
    </form>
  </div>); */
