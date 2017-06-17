import React, { Component } from 'react';
import { connect } from 'react-redux';

import UserBar from '../../components/UserBar';
import Navbar from '../../components/Navbar/';

import './DashboardStyle.scss';

export default (props) => {

  return (
      <div style={{"height": "100%", "width":"100%"}}>
        <div style={{"height": "100%", "width":"100%"}}>
          <Navbar />
          <div className="dashboardContainer">
            <div className="dashboard">
              { props.children }
            </div>
          </div>
          <UserBar />
        </div>
      </div>
  );
}
