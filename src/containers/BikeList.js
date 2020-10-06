import React from 'react';
import { connect } from 'react-redux';
import BikeSummary from './BikeSummary';

const BikeList = ({ bikes }) => {
  console.log(bikes);
  return (
    <div className="dashboard container">
      {bikes && bikes.map((bike) => <BikeSummary bike={bike} key={bike.id} />)}
    </div>
  );
};

const mapStateToProps = (state) => ({
  bikes: state.bikes.bikes,
});

export default connect(mapStateToProps, null)(BikeList);
