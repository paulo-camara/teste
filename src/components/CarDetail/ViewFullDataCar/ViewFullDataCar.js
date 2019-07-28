import React from "react";
import PropTypes from "prop-types";

const ViewFullDataCar = (props) => {
    const {
        title,
        brand,
        model,
        year,
        color,
        price,
        km,
        onChange,
        onUpdate,
        onCancel,
        onRemove,
        onSave
    } = props;

    return (
        <div className="view-full-data-car col-sm-12">
            <div className="col-sm-12">
                <input
                    className="col-sm-6 title"
                    onChange={onChange}
                    value={title} />
            </div>
            <div className="col-sm-12">
                <input 
                    className="space-between model col-sm-3" 
                    onChange={onChange} 
                    value={model} />
                <input
                    className="space-between year col-sm-3"
                    onChange={onChange}
                    value={year} />
            </div>
            <div className="col-sm-12">
                <input 
                    className={"col-sm-6"} 
                    onChange={onChange} 
                    value={brand}/>
            </div>
            <div className="col-sm-12">
                <input
                    className="space-between color col-sm-3"
                    onChange={onChange}
                    value={color} />
                <input
                    className="space-between price col-sm-3"
                    onChange={onChange}
                    value={price} />
            </div>
            <div className="col-sm-12">
                <input
                    className="col-sm-3 km"
                    onChange={onChange}
                    value={km} />
            </div>
            <div className="buttons">
                <div className="actions-button">
                    <button
                        className="remove-button"
                        onClick={onRemove}>
                        Remover
                    </button>
                    <button
                        className="cancel-button"
                        onClick={onCancel}>Cancelar
                    </button>
                    <button
                        className="update-button"
                        onClick={onUpdate}>
                        Atualizar
                    </button>
                    <button
                        className="save-button"
                        onClick={onSave}>
                        Salvar
                    </button>
                </div>
            </div>
        </div>
    );
}

export default ViewFullDataCar;