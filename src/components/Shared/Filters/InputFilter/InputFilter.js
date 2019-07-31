import React from "react";
import PropTypes from "prop-types";

/** Componente stateless de filtro */
const InputFilter = ({
  idInput,
  idButton,
  value,
  onChange,
  buttonAction
}) => (
    <div className="input-filter">
      <input
        name="valueInput"
        className="input-filter-class"
        id={idInput}
        placeholder={"Busque por um veículo"}
        value={value}
        onChange={onChange}
      />
      <button
        className="button-filter-class"
        id={idButton}
        onClick={() => buttonAction()}
      >
        Pesquisar
      </button>
    </div>
  );

/** Propriedades necessarias para utilizar o componente de filtro */
InputFilter.propTypes = {
  idInput: PropTypes.string.isRequired,
  idButton: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  buttonAction: PropTypes.func.isRequired,
};

export default InputFilter;
