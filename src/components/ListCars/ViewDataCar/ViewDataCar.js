import React from "react";
import PropTypes from "prop-types";
import { Link } from 'react-router-dom';

/** Componente stateless de apresentação simplificada dos dados de um carro */
const ViewDataCar = ({ title, price, model, year, km, brand }) => (
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
      <div className="model">
        <span className="description-car">{`${model} - ${brand} - ${km} Km`}</span>
      </div>
      <span className="year-car">{year}</span>
    </div>

    {/* <span className="details-link"> detalhes </span> */}
    <Link className="details-link" to={`/home`}>{'detalhes'}</Link>
  </div>
);


/** Propriedades necessarias para usar o componente */
ViewDataCar.propTypes = {
  km: PropTypes.number.isRequired,
  price: PropTypes.number.isRequired,
  year: PropTypes.number.isRequired,
  model: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired
};

export default ViewDataCar;
