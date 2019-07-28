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

        this.buttonSaveAction = this.buttonSaveAction.bind(this);
        this.buttonRemoveAction = this.buttonRemoveAction.bind(this);
        this.buttonUpdateAction = this.buttonUpdateAction.bind(this);
        this.buttonCancelAction = this.buttonCancelAction.bind(this);
    }

    componentDidMount() {
        CarDetailActions.SetInitialState();
    }

    componentWillUnmount() {
        CarDetailActions.SetInitialState();
    }

    componentDidUpdate() {
        CarDetailActions.InstanceListCar();
    }

    buttonSaveAction() {
        CarDetailActions.Save()
    }

    buttonRemoveAction() {
        CarDetailActions.Remove()
    }

    buttonUpdateAction() {
        CarDetailActions.Update()
    }

    buttonCancelAction() {
        CarDetailActions.SetInitialState();
    }

    _findCar() {
        CarDetailActions.Find();
    }

    onChangeInput(event) {
        CarDetailActions.ChangeInput(event)
    }

    render() {
        const { isLoading } = this.state.controls;
        const { valueInput, car } = this.state.data;

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
                <ViewFullDataCar
                    title={car.title}
                    brand={car.brand}
                    model={car.model}
                    year={car.year}
                    color={car.color}
                    price={car.price}
                    km={car.km}
                    onChange={this.onChangeViewFullDataCar}
                    onSave={this.buttonSaveAction}
                    onUpdate={this.buttonUpdateAction}
                    onRemove={this.buttonRemoveAction}
                    onCancel={this.buttonCancelAction} />
                <Loading isLoading={isLoading} />
            </div>
        );
    }
}

export default CarDetail;