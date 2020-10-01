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
    </div>
  );
};

export default BikeSummary;
