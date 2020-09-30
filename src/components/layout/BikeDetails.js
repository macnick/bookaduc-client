import React from 'react';

const BikeDetails = (props) => {
  const id = props.match.params.id;
  return (
    <div className="container section bike-details">
      <div className="card z-depth-1">
        <div className="card-content">
          <span className="card-title">Bike Name - {id}</span>
          <div className="card-action grey lighten-4 grey-text">
            <p>Bike displacement</p>
            <p>Bike power</p>
            <p>Bike torque</p>
            <p>Bike weight</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BikeDetails;
