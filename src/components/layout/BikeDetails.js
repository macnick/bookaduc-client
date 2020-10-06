import React from 'react';
import { connect } from 'react-redux';
import { useParams } from 'react-router-dom';

const BikeDetails = ({ bikes }) => {
  const { id } = useParams();
  const bike = bikes.find((b) => b.id == id) || 1;
  console.log(bike);

  return (
    <div className="container section bike-details">
      <div className="card z-depth-1">
        <div className="card-content grey-text text-darken-4">
          <span className="card-title">Ducati {bike.name}</span>
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
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  bikes: state.bikes.bikes,
});

export default connect(mapStateToProps, null)(BikeDetails);
