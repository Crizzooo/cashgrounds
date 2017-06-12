import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import injectTapEventPlugin from 'react-tap-event-plugin';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import store from './store.js';
import App from './app.js';
import EmailSplash from './components/EmailSplash';
import Dashboard from './components/Dashboard';

//load main css
import './public/stylesheets/index.scss';
import 'flexboxgrid';

injectTapEventPlugin();

const muiTheme = getMuiTheme({
  'palette': {
    'primary1Color': '#F7F459',
    //primary2, primary3, accent1,2,3, borderColor
    'textColor': '#AAA',
    'alternateTextColor': '#FFF',
    'disabledColor': '#676666',
    'borderColor': '#F7F459'
  },
  'raisedButton': {
    'primaryTextColor': '#111'
  }
});

//more on custom themes: https://github.com/callemall/material-ui/blob/master/src/styles/getMuiTheme.js
/* raisedButton: {
      color: palette.alternateTextColor,
      textColor: palette.textColor,
      primaryColor: palette.primary1Color,
      primaryTextColor: palette.alternateTextColor,
      secondaryColor: palette.accent1Color,
      secondaryTextColor: palette.alternateTextColor,
      disabledColor: darken(palette.alternateTextColor, 0.1),
      disabledTextColor: fade(palette.textColor, 0.3),
      fontSize: typography.fontStyleButtonFontSize,
      fontWeight: typography.fontWeightMedium,
    },
*/
ReactDOM.render(
  (<BrowserRouter>
  <Provider store={store} >
    <MuiThemeProvider muiTheme={muiTheme}>
      <div className="splashBackground">
        <Route path="/" >
          <Switch>
            <Route exact path="/" component={EmailSplash} />
            <Route path="/dashboard" component={Dashboard}/>
           </Switch>
        </Route>
      </div>
    </MuiThemeProvider>
  </Provider>
</BrowserRouter>),
  document.getElementById('app'));
