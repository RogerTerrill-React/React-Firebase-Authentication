import React, { Component } from 'react';
import Notifications from './Notifications';
import HomeList from '../homes/HomeList';
import { connect } from 'react-redux';

class Dashboard extends Component {
  render() {
    const { homes } = this.props;
    return (    
      <div className="dashboard container">
        <div className="row">
          <div className="col s12 m6">
            <HomeList homes = {homes}/>
          </div>
          <div className="col s12 m5 offset-m1">
            <Notifications />
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    homes: state.home.homes
  }
}

export default connect(mapStateToProps)(Dashboard);
