import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const BikeSummary = ({ bike }) => (
  <Link to={`/bikes/${bike.id}`}>
    <div className="card z-depth-2 bike-card">
      <div className="card-image">
        <img src={bike.image} alt={bike.name} style={{ width: '100%' }} />
      </div>
      <div className="card-content grey-text text-darken-4">
        <span className="card-title center-align">{bike.name}</span>
        <div className="divider"></div>
        <div className="input-field">
          <p>A contemporary icon always featuring the core values of the original {bike.name}. Essential and technological, the {bike.name} stands out for design and sporty soul.</p>
          {/* <button className="btn red darken-3 z-depth-1" type="submit">Book a ride</button> */}
        </div>
      </div>
    </div>
  </Link>
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
