import React from 'react';
import { Link } from 'react-router-dom';

const BikeSummary = ({ bike }) => (
  <div className="card z-depth-2" id="">
    <div className="card-content grey-text text-darken-4">
      <span className="card-title">{bike.name}</span>
      <p>Details {bike.id}</p>
      <p className="grey-text">
        Displacement:
        {bike.displacement}
      </p>
      <p className="grey-text">
        Power:
        {bike.power}
      </p>
      <p className="grey-text">
        Torque:
        {bike.torque}
      </p>
      <p className="grey-text">
        Weight:
        {bike.weight}
      </p>
    </div>
    <div className="input-field">
      <Link to={`/bikes/${bike.id}`}>
        <button className="btn pink lighten-1 z-depth-1">Book a ride</button>
      </Link>
    </div>
  </div>
);

export default BikeSummary;
