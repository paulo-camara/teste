import React from "react";
import PropTypes from "prop-types";

const ViewFullDataCar = props => {
  const {
    title,
    brand,
    model,
    year,
    color,
    price,
    km,
    onChange
  } = props;

  return (
    <div className="view-full-data-car col-sm-12">
      <div className="col-sm-12">
        <input
          placeholder="Titulo do veículo"
          name="title"
          className="col-sm-6 title"
          onChange={onChange}
          value={title}
        />
      </div>
      <div className="col-sm-12">
        <input
          placeholder="Modelo"
          name="model"
          className="space-between model col-sm-3"
          onChange={onChange}
          value={model}
        />
        <input
          placeholder="Ano"
          name="year"
          className="space-between year col-sm-3"
          onChange={onChange}
          value={year}
        />
      </div>
      <div className="col-sm-12">
        <input
          placeholder="Marca"
          name="brand"
          className={"col-sm-6"}
          onChange={onChange}
          value={brand}
        />
      </div>
      <div className="col-sm-12">
        <input
          placeholder="Cor"
          name="color"
          className="space-between color col-sm-3"
          onChange={onChange}
          value={color}
        />
        <input
          placeholder="Preço"
          name="price"
          className="space-between price col-sm-3"
          onChange={onChange}
          value={price}
        />
      </div>
      <div className="col-sm-12">
        <input
          placeholder="Quilometragem"
          name="km"
          className="col-sm-3 km"
          onChange={onChange}
          value={km}
        />
      </div>
    </div>
  );
};

ViewFullDataCar.propTypes = {
  title: PropTypes.string.isRequired,
  model: PropTypes.string.isRequired,
  brand: PropTypes.string.isRequired,
  year: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  km: PropTypes.string.isRequired
};

export default ViewFullDataCar;
