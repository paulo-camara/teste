import React from "react";
import Reflux from "reflux";
import InputFilter from "../Shared/Filters/InputFilter/InputFilter";
import ListCarsActions from "./ListCarsActions";
import ListCarsStore from "./ListCarsStore";
import ViewDataCar from "./ViewDataCar/ViewDataCar";

class ListCars extends Reflux.Component {
  constructor(props) {
    super(props);

    this.store = ListCarsStore;
    this.state = {};

    this._findCar = this._findCar.bind(this);
    this.onChangeInput = this.onChangeInput.bind(this);
  }

  componentDidMount() {
    ListCarsActions.ResetState();
  }

  onChangeInput(event) {
    const { value } = event.target;

    ListCarsActions.UpdateValueInput(value);
  }

  _findCar() {
    ListCarsActions.FindCar();
  }

  render() {
    const { value, cars } = this.state.data;

    return (
      <div className="list-cars-page">
        <InputFilter
          idInput={"filter-car-input"}
          idButton={"filter-car-button"}
          placeHolder={"Search a car"}
          titleButton={"Search"}
          value={value}
          onChange={this.onChangeInput}
          buttonAction={this._findCar}
        />

        {cars.map((item, index) => (
          <ViewDataCar
            key={index}
            title={item.title}
            price={item.price}
            year={item.year}
            model={item.model}
            km={item.km}
          />
        ))}
      </div>
    );
  }
}

export default ListCars;
