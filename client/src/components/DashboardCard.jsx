import React, { Component } from 'react';
import { connect } from 'react-redux';

class DashboardCard extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    // this.handleChange = this.handleChange.bind(this);
  }

  render() {
    return (
      <div className="col-xs-12 col-sm-6 dashboardHolder">
        <div className="dashboardCard">
          <p>i am a card</p>
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

export default connect(mapState, null)(DashboardCard);
