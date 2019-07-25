import React from 'react';

import InputFilter from '../Shared/Filters/InputFilter/InputFilter';

export class Home extends React.Component {
    constructor(props) {
        super(props);

        this._findCar = this._findCar.bind(this);
    }

    _findCar() {
        console.log('Filtrou');
    }

    render() {
        return (
            <div className="page-home">
                <InputFilter
                    idInput={"filter-car-input"}
                    idButton={"filter-car-button"}
                    placeHolder={"Search a car"}
                    titleButton={"Search"}
                    value={'123'}
                    buttonAction={this._findCar} />
            </div>
        )
    }
}