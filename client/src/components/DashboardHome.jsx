import React, { Component } from 'react';
import { connect } from 'react-redux';

import DashboardCard from './DashboardCard.jsx'

class DashboardHome extends Component {
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
        <div className="row center-xs around-xs">
          { [1, 2, 3, 4, 5, 6].map( elem => <DashboardCard />) }
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

export default connect(mapState, null)(DashboardHome);
