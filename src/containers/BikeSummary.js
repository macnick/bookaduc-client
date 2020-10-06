import React from 'react';
import { Link } from 'react-router-dom';
import BikeDetails from '../components/layout/BikeDetails';

const showBike = (id, bike) => {
  console.log('bike:', bike);
  // return (
  //   <Link key={id} to={`/bikes/${id}`}>
  //     <BikeDetails bike={bike} />
  //   </Link>
  // );
};

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
      <button className="btn pink lighten-1 z-depth-1">Book a ride</button>
    </div>
  </div>
);

export default BikeSummary;
