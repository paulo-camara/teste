import React from "react";
import Reflux from "reflux";

import Loading from "../Shared/Loading/Loading";
import InputFilter from "../Shared/Filters/InputFilter/InputFilter";

import CarDetailActions from "./CarDetailActions";
import CarDetailStore from "./CarDetailStore";
import ViewFullDataCar from "../CarDetail/ViewFullDataCar/ViewFullDataCar";

class CarDetail extends Reflux.Component {
    constructor(props) {
        super(props);

        this.store = CarDetailStore;
        this.state = {};

        this.onChangeInput = this.onChangeInput.bind(this);
        this._findCar = this._findCar.bind(this);
    }

    componentDidMount() {
        CarDetailActions.SetInitialState();
    }

    componentDidUpdate() {
        CarDetailActions.InstanceListCar();
    }

    _findCar() {
        CarDetailActions.Find();
    }

    onChangeInput(event) {
        CarDetailActions.ChangeInput(event)
    }

    render() {
        const { isLoading } = this.state.controls;
        const { valueInput } = this.state.data;

        return (
            <div>
                <InputFilter
                    idInput={"filter-car-input"}
                    idButton={"filter-car-button"}
                    placeHolder={"Search a car"}
                    titleButton={"Search"}
                    value={valueInput}
                    onChange={this.onChangeInput}
                    buttonAction={this._findCar}
                />
                <Loading isLoading={isLoading} />
                <ViewFullDataCar />
            </div>
        );
    }
}

export default CarDetail;