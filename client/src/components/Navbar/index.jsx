import React, { Component } from 'react';
import { connect } from 'react-redux';

import { AppBar } from 'material-ui';

import Styles from '../../public/stylesheets/colors.js';
import './NavbarStyle.css';

class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    // this.handleChange = this.handleChange.bind(this);
  }

  render() {
    return (
      <div>
          <AppBar
            title={(<span className="navLogoContainer"><img  src="/assets/cashgroundsTakeFour.png" className="navLogo"></img></span>)}
            titleStyle={{"text-align":"center", "margin-left":"-40px", "color":`${Styles.main_accent}`}}
            style={{"background-color":`rgba(0, 0, 0, 0.2)`,"padding-top":"10px","padding-bottom":"10px"}}
            />
      </div>
    );
  }
}

const mapState = state => {
  // The reducers are combined in reducers/index.js and that is where their name is set
  // The format is state.REDUCERNAME.propertyOfREDUCERNAME
  return {};
};

// Unused example mapDispatch function
// const mapDispatch = state => {
//   return {};
// }

export default connect(mapState, null)(Navbar);
