import React from 'react';

const BikeSummary = ({ bike }) => {
  return (
    <div className="card z-depth-2  ">
      <div className="card-content grey-text text-darken-4">
        <span className="card-title">{bike.name}</span>
        <p>Details</p>
        <p className="grey-text">Displacement: {bike.displacement}</p>
        <p className="grey-text">Power: {bike.power}</p>
        <p className="grey-text">Torque: {bike.torque}</p>
        <p className="grey-text">Weight: {bike.weight}</p>
      </div>
      <div className="input-field">
        <button className="btn pink lighten-1 z-depth-1">Book a ride</button>
      </div>
    </div>
  );
};

export default BikeSummary;
