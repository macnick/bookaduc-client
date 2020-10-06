import React from 'react';

const BikeDetails = (props) => {
  // console.log(props);
  const { bike } = props;
  return (
    <div className="container section bike-details">
      <div className="card z-depth-1">
        {/* <div className="card-content">
          <span className="card-title">Bike Name -{bike.name}</span>
          <div className="card-action grey lighten-4 grey-text">
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
        </div> */}
      </div>
    </div>
  );
};

export default BikeDetails;
