import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Router, Route, browserHistory, IndexRoute } from 'react-router';
import injectTapEventPlugin from 'react-tap-event-plugin';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import store from './store.js';
import App from './app.js';
import EmailSplash from './components/EmailSplash/';
import Dashboard from './containers/Dashboard/';
import DashboardHome from './components/DashboardHome';
import UserBar from './components/UserBar.jsx';

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
(<MuiThemeProvider muiTheme={muiTheme}>
  <Provider store={store} >
    <Router history={browserHistory}>
      <Route path="/" component={App} >
        <IndexRoute component={EmailSplash} />
        <Route path="dashboard" component={Dashboard} >
          <IndexRoute component={DashboardHome} />
        </Route>
      </Route>
    </Router>
  </Provider>
</MuiThemeProvider>),
  document.getElementById('app'));
