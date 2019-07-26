import React from "react";
import Reflux from 'reflux';
import InputFilter from "../Shared/Filters/InputFilter/InputFilter";
import HomeActions from './HomeActions';
import HomeStore from './HomeStore';

export class Home extends Reflux.Component {
  constructor(props) {
    super(props);

    this.store = HomeStore; 

    this._findCar = this._findCar.bind(this);
    this.onChangeInput = this.onChangeInput.bind(this);
  }

  componentDidMount() {
    HomeActions.ResetState();
  }

  onChangeInput(event) {
    const { value } = event.target;

    HomeActions.UpdateValueInput(value);
  }

  _findCar() {
    HomeActions.FindCar();    
  }

  render() {
    const { value } = this.state;

    return (
      <div className="home-page">
        <InputFilter
          idInput={"filter-car-input"}
          idButton={"filter-car-button"}
          placeHolder={"Search a car"}
          titleButton={"Search"}
          value={value}
          onChange={this.onChangeInput}
          buttonAction={this._findCar}
        />
        <div className="home-message">
          <h1 className="message"> Pesquisa de veiculo do AqueleClub </h1>
        </div>
      </div>
    );
  }
}
