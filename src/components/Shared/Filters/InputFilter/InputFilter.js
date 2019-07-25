import React from 'react';

const InputFilter = ({ idInput, idButton, placeHolder, titleButton, value, buttonAction }) => (
    <div className="input-filter">
        <input
            id={idInput}
            placeholder={placeHolder}
            value={value} />
        <button
            id={idButton}
            onClick={() => buttonAction()}
        >
            {titleButton}
        </button>
    </div>
);

export default InputFilter;