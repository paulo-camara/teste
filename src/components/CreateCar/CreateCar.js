import React from "react";
import Reflux from "reflux";
import ViewFullDataCar from "../CarDetail/ViewFullDataCar/ViewFullDataCar";
import Loading from "../Shared/Loading/Loading";
import CreateCarStore from "./CreateCarStore";
import CreateCarActions from "./CreateCarActions";
import { SAVE_CAR } from "../../contants";

class CreateCar extends Reflux.Component {
  constructor(props) {
    super(props);

    this.store = CreateCarStore;

    this._setInputFilter = this._setInputFilter.bind(this);
  }

  componentWillUnmount() {
    CreateCarActions.SetInitialState();
  }

  _setInputFilter(event) {
    CreateCarActions.SetInputValue(event);
  }

  saveCar() {
    CreateCarActions.SaveCar();
  }

  render() {
    const { isLoading } = this.state.controls;
    const { title, brand, model, year, color, price, km } = this.state.data;

    return (
      <React.Fragment>
        <h3 className="page-title">{SAVE_CAR.text}</h3>
        <ViewFullDataCar
          title={title}
          brand={brand}
          model={model}
          year={year}
          color={color}
          price={price}
          km={km}
          onChange={this._setInputFilter}
        />
        <button className="button-save" onClick={this.saveCar}>
          Salvar
        </button>
        <Loading isLoading={isLoading}/>
      </React.Fragment>
    );
  }
}

export default CreateCar;
