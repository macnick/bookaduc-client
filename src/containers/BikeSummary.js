import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const BikeSummary = ({ bike }) => (
  <div className="card horizontal z-depth-2">
    <div className="card-image">
      <img src={bike.image} alt={bike.name} style={{ width: '100%' }} />
    </div>
    <div className="card-content grey-text text-darken-4">
      <span className="card-title">{bike.name}</span>
      <p className="grey-text">
        Displacement:
        {` ${bike.displacement}`}
      </p>
      <p className="grey-text">
        Power:
        {` ${bike.power}`}
      </p>
      <p className="grey-text">
        Torque:
        {` ${bike.torque}`}
      </p>
      <p className="grey-text">
        Weight:
        {` ${bike.weight}`}
      </p>
      <div className="input-field">
        <Link to={`/bikes/${bike.id}`}>
          <button className="btn red darken-3 z-depth-1" type="submit">Book a ride</button>
        </Link>
      </div>
    </div>
  </div>
);

BikeSummary.propTypes = {
  bike: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    displacement: PropTypes.string.isRequired,
    power: PropTypes.string.isRequired,
    torque: PropTypes.string.isRequired,
    weight: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
  }).isRequired,
};

export default BikeSummary;
