import React, { Component } from 'react';
import { browserHistory } from 'react-router';
import { connect } from 'react-redux';
import axios from 'axios';

import Anime from 'react-anime';
import { Card, CardTitle, CardText, CardMedia } from 'material-ui/Card';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import emailValidator from 'email-validator';

import './EmailSplashStyle.css';
import ThemedCard from '../../containers/ThemedCard.jsx';
import {marginGenerator, paddingGenerator} from '../../utils/styleObjGenerators.js';


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

export default class EmailSplash extends Component {
  constructor(props) {
    super(props);
    this.state = {
      EMAIL: '',
      GAMERNAME: '',
      errors: {
        email: '',
        gamerName: ''
      },
      signedUp: false
    };
    this.shouldAnimate = true;
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.validateData = this.validateData.bind(this);
    this.renderForm = this.renderForm.bind(this);
    this.renderThankYou = this.renderThankYou.bind(this);
  }

  componentDidMount() {
    this.shouldAnimate = false;
  }

  handleChange(evt, newValue) {
    this.setState({[evt.target.name]: newValue});
  }

  handleSubmit(evt) {
    evt.preventDefault();
    if(this.validateData()){
      axios.post('/api/subscribers', {
        email: this.state.EMAIL,
        gamerName: this.state.GAMERNAME
      })
      .then( (res) => {
        console.log('received: ', res);

        // NOTE: If the member exists already and we get an error from mailchimp, we push the user forward anyway
        this.setState({signedUp: true})
      })
      //TODO: Render an error message if it does not successfully post
      //TODO: Handle various Mail Chimp errors
      .catch(console.err)
    }
  }

  validateData(){
    let errorCount = 0;
    let errors = {
      email: '',
      gamerName: ''
    }
    console.log('validating data: ', this.state);
    if (!emailValidator.validate(this.state.EMAIL)) {
      errorCount++;
      errors.email = 'Please enter a valid email address!';
    }
    if (!this.state.GAMERNAME || this.state.GAMERNAME.length < 1) {
      errorCount++;
      errors.gamerName = 'Gamer Name is a required field!';
    }
    this.setState({errors});
    return errorCount === 0;
  }

  render() {
    let marginStyle = marginGenerator('-66px', 'auto', null, 'auto');
    return (
      <div className="" style={flexStyle}>
        <div className="row" style={{"height":"100%", "width":"100%"}}>
          { this.state.signedUp ? this.renderThankYou() : this.renderForm() }
        </div>
      </div>
    );
 }

renderForm() {
  console.log('rednering form: ', this.shouldAnimate);
  return (<ThemedCard className="col-xs-12 col-sm-offset-1 col-sm-10 emailCard" style={{...cardStyle}}
      containerStyle={{"height":"100%", "padding":"0px", "width":"100%", "overflow":"scroll"}}
      shouldAnimate={this.shouldAnimate}
      midSection={(
        <CardText style={{"backgroundColor":"#111111", "textAlign":"center", "paddingBottom":"0px", "height":"39%", "overflow":"hidden"}}>
      <div className="col-xs-12 col-lg-offset-2 col-lg-8 signUpMarketingTab">
        <p> Cashgrounds is a platform that enables you to up the stakes, and heighten that intensity by playing for cash. <br></br> <br></br>Users who sign up for Email Updates below will receive deposit bonuses, promotions, and the ability to give input during our development process! </p>
        <div className="row">
          <ul className="col-xs-offset-1 col-xs-11 col-lg-10" style={{"textAlign":"left", }}>
            <br></br>
            <li>
              Quick, safe, fast transactions using Paypal, Skrill, or Dwolla
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
              Different payout scehemes support all risk tolerances - Higher Risk games can pay out up to 33x your bet but only cover the top 20 players, while Lower Risk games can allow players to be paid out as deep as the top 66 places for lesser multiples.
            </li>
          </ul>
        </div>
      </div>
    </CardText>)}
  botSection={(
    <CardText style={{...paddingGenerator('0px', '0px', '0px', '0px'), "height":"27%"}}>
      <form id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" className="validate" target="_blank" onSubmit={this.handleSubmit}noValidate>

        <div className="row" style={{...marginGenerator(null, null, '3em', null)}}>

          <div className="col-xs-12 col-sm-offset-1 col-sm-5 col-md-offset-2 col-md-3 ">
            <TextField
              hintText="email"
              floatingLabelText="email address"
              type="email"
              autoCapitalize="off" autoCorrect="off" name="EMAIL" className="validate"
              style={{"maxWidth": "256px", "width":"100%"}}
              onChange={this.handleChange}
              required
              errorText={this.state.errors.email}
              /><br />
          </div>

          <div className="col-xs-12 col-sm-offset-0 col-sm-5 col-md-offset-2 col-md-3 ">
            <TextField
              hintText="what do you go by?"
              floatingLabelText="gamer name"
              name="GAMERNAME"
              type="text"
              style={{"maxWidth": "256px", "width":"100%"}}
              onChange={this.handleChange}
              errorText={this.state.errors.gamerName}
              /><br />
          </div>

        </div>

        <input type="hidden" name="u" value="d806631c2c2b68285d31de691"></input>
        <input type="hidden" name="id" value="c29285afce"></input>

        <RaisedButton type="submit" name="submit" value="Subscribe to list" label="Subscribe for Launch Updates" primary={true} style={marginGenerator(null, null, '1em', null)}/>

        <input type="hidden" name="ht" value="b22f7a9abaa70e0da9ad920a44daea817c852b2f:MTQ5NTA0MDUzMC4yNTM3"></input>
        <input type="hidden" name="mc_signupsource" value="hosted"></input>

      </form>
    </CardText>)}
    />)
}

renderThankYou(){
    return (<ThemedCard className="col-xs-12 col-sm-offset-1 col-sm-10 emailCard" style={{...cardStyle}}
        containerStyle={{"height":"100%", "padding":"0px", "width":"100%", "overflow":"scroll"}}
        midSection={(
            <div className="whereAmI" style={{"width":"100%"}}>
                  <Anime
                       style={{"width":"100%"}}
                       easing="linear"
                       duration={1500}
                       translateY={100}
                       opacity={[0, 1]}>
                        <h3>Thank You</h3>
                    </Anime>
                    <Anime
                        easing="linear"
                        delay={1500}
                        duration={1500}
                        color='rgb(137, 183, 238)'
                        translateY={100}
                        opacity={[0, 1]}>
                        <h6>We will be in touch shortly</h6>
                    </Anime>
            </div>)} ></ThemedCard>);
}

}
