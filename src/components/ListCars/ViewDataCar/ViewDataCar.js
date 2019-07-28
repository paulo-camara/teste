import React from "react";
import Reflux from "reflux";
import PropTypes from "prop-types";
import { Link } from 'react-router-dom';
import CarDetailStore from "../../CarDetail/CarDetailStore";
import CarDetailActions from "../../CarDetail/CarDetailActions";


class ViewDataCar extends Reflux.Component {
  constructor(props) {
    super(props);

    this.store = CarDetailStore;

    this.GetCar = this.GetCar.bind(this);
  }

  GetCar() {
    const { id } = this.props;
        
    CarDetailActions.GetDetailsCar(id);
  }

  render() {
    const { title, price, model, year, km, brand } = this.props;

    return (
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

        <Link
          className="details-link"
          to={`/detail-car`}
          onClick={this.GetCar}>
          {'detalhes'}
        </Link>
      </div>
    );
  }


}

/** Propriedades necessarias para usar o componente */
ViewDataCar.propTypes = {
  km: PropTypes.number.isRequired,
  price: PropTypes.number.isRequired,
  year: PropTypes.number.isRequired,
  model: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired
};

export default ViewDataCar;
