import React, { Component } from 'react';


import { Card, CardTitle, CardText, CardMedia } from 'material-ui/Card';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

// TODO: Change where this style comes from
import '../components/EmailSplash/EmailSplashStyle.scss';

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
let marginStyle = marginGenerator('0px', '0px', '2.5em', '0px');
const copy = {
  subtitle: {
    main: "Cash Matches, Tournaments, and Leagues for competitive PUBG players",
    alternate:  "increase the adrenaline rush of the world's most intense video game by competing for cash"
  }
}

export default  function ({ subtitle, topSection, topSubtitle, midSection, botSection}) {
  let marginStyle = marginGenerator('-66px', 'auto', null, 'auto');
  console.log("received subtitle: ", topSubtitle);
  if (!topSection) {
    topSection = (<CardMedia
      overlay={
        <CardTitle title={
        (<div>
            <img style={
                {"height": "20%", "maxHeight": "100px", "display": "block", ...marginStyle}
            } src="/assets/cashgroundsTakeFour.png">
            </img>
            <span className="signupBrandName yellowText">CASHGROUNDS</span>
            </div>)}
        subtitle={topSubtitle !== 'null' ? (
          <div className="row">
            <span
            className="col-sm-offset-1 col-sm-10 ">{topSubtitle || copy.subtitle.alternate}</span>
        </div>) : null}
        subtitleStyle={{"fontFamily": "myriadPro", "fontSize": ".7em"}}/>}
        style={{"height":"33%", "overflow":"hidden", "contain": "content"}}
        mediaStyle={{"height":"100%", "width":"100%"}}
        className="emailCardMedia">
        <div className="signupHeaderImg"></div>
    </CardMedia>);
  }
  return (
    <div className="" style={flexStyle}>
      <div className="row" style={{"height":"100%", "width":"100%"}}>
        <Card className="col-xs-12 col-sm-offset-1 col-sm-10 emailCard" style={{...cardStyle}}
          containerStyle={{"height":"100%", "padding":"0px", "width":"100%", "overflow":"scroll"}}
          >
          {topSection}
          {midSection}
          {botSection}
        </Card>
    </div>
  </div>
  )
}
