import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import BikeSummary from './BikeSummary';

const BikeList = ({ bikes }) => (
  <div className="dashboard container">
    {bikes && bikes.map(bike => <BikeSummary bike={bike} key={bike.id} />)}
  </div>
);

const mapStateToProps = state => ({
  bikes: state.bikes.bikes,
});

BikeList.propTypes = {
  bikes: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default connect(mapStateToProps, null)(BikeList);
