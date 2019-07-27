import React from "react";
import PropTypes from "prop-types";

/** Componente stateless de filtro */
const InputFilter = ({
  idInput,
  idButton,
  placeHolder,
  titleButton,
  value,
  onChange,
  buttonAction
}) => (
  <div className="input-filter">
    <input
      className="input-filter-class"
      id={idInput}
      placeholder={placeHolder}
      value={value}
      onChange={onChange}
    />
    <button
      className="button-filter-class"
      id={idButton}
      onClick={() => buttonAction()}
    >
      {titleButton}
    </button>
  </div>
);

/** Propriedades necessarias para utilizar o componente de filtro */
InputFilter.propTypes = {
  idInput: PropTypes.string.isRequired,
  idButton: PropTypes.string.isRequired,
  placeHolder: PropTypes.string.isRequired,
  titleButton: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  buttonAction: PropTypes.func.isRequired,
};

export default InputFilter;
