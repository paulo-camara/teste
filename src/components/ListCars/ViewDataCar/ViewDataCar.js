import React from "react";
import PropTypes from "prop-types";

const ViewDataCar = ({ title, price, model, year, km }) => (
  <div className="view-car">
    <div className="row-one">
      <b>
        <span className="model-car">{title}</span>
      </b>
      <b>
        <span className="value-car">{`R$ ${price}`}</span>
      </b>
    </div>
    <div className="row-two">
      <span className="description-car">{model}</span>
      <span className="year-car">{year}</span>
    </div>
  </div>
);

ViewDataCar.propTypes = {
  km: PropTypes.number.isRequired,
  price: PropTypes.number.isRequired,
  year: PropTypes.number.isRequired,
  model: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired
};

export default ViewDataCar;
