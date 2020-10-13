import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import BikeSummary from './BikeSummary';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css'

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 3
  },
  tabletV: {
    breakpoint: { max: 768, min: 0 },
    items: 2
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1
  }
};

const BikeList = ({ bikes }) => (
  <div className="dashboard " id="bikelist">
    <Carousel responsive={responsive} infinite={true} itemClass="carousel-item-padding-40-px">
      {bikes && bikes.map(bike => <BikeSummary bike={bike} key={bike.id} />)}
    </Carousel>
  </div>
);

const mapStateToProps = state => ({
  bikes: state.bikes.bikes,
});

BikeList.propTypes = {
  bikes: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default connect(mapStateToProps, null)(BikeList);
