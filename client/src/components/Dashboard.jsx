import React, { Component } from 'react';
import { connect } from 'react-redux';

import UserBar from './UserBar.jsx';
import Navbar from './Navbar.jsx';

import './DashboardStyle.scss';

class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    // this.handleChange = this.handleChange.bind(this);
  }

  handleChange(evt) {
    console.log('changiing..');
    console.log(evt.target.value);
  }

  render() {
    console.log('in dashboard');
    return (
      <div style={{"height": "100%", "width":"100%"}}>
        <div style={{"height": "100%", "width":"100%"}}>
          <Navbar />
          <div className="dashboardContainer">
            <div className="dashboard">
              { this.props.children }
            </div>
          </div>
          <UserBar />
        </div>
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

export default connect(mapState, null)(Dashboard);
