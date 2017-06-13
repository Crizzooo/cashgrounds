import React, { Component } from 'react';
import { connect } from 'react-redux';

class UserBar extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    // this.handleChange = this.handleChange.bind(this);
  }

  render() {
    return (
        <div className="userBarContainer">
          <div className="userBar">

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

export default connect(mapState, null)(UserBar);
