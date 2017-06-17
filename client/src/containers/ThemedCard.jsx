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

export default  function (props) {


  return (
    <div className="" style={flexStyle}>
      <div className="row" style={{"height":"100%", "width":"100%"}}>
        <Card className="col-xs-12 col-sm-offset-1 col-sm-10 emailCard" style={{...cardStyle}}
          containerStyle={{"height":"100%", "padding":"0px", "width":"100%", "overflow":"scroll"}}
          >
          {props.topSection}
          {props.midSection}
          {props.botSection}
        </Card>
    </div>
  </div>
  )
}
