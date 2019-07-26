import React from "react";

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

export default InputFilter;
