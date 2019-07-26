import React from "react";
import Reflux from 'reflux';
import InputFilter from "../Shared/Filters/InputFilter/InputFilter";
import ListCarsActions from './ListCarsActions';
import ListCarsStore from './ListCarsStore';

class ListCars extends Reflux.Component {
  constructor(props) {
    super(props);

    this.store = ListCarsStore; 

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
    const { value } = this.state;

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
      </div>
    );
  }
}

export default ListCars;