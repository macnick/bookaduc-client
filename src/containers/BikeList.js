import React, { Component } from 'react';
import BikeSummary from './BikeSummary';

class BikeList extends Component {
  render() {
    return (
      <div className="dashboard container">
        <BikeSummary />
        <BikeSummary />
        <BikeSummary />
      </div>
    );
  }
}

export default BikeList;
