import React from 'react';
import BikeSummary from './BikeSummary';
import { connect } from 'react-redux';

const BikeList = ({ bikes }) => {
  // const { bikes } = this.props;
  console.log(bikes);
  return (
    <div className="dashboard container">
      {bikes &&
        bikes.map((bike) => {
          return <BikeSummary bike={bike} key={bike.id} />;
        })}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    bikes: state.bikes.bikes,
  };
};

export default connect(mapStateToProps, null)(BikeList);
