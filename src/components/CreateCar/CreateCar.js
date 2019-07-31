import React from "react";
import Reflux from "reflux";
import ViewFullDataCar from "../CarDetail/ViewFullDataCar/ViewFullDataCar";
import CreateCarStore from "./CreateCarStore";
import CreateCarActions from "./CreateCarActions";

class CreateCar extends Reflux.Component {
  constructor(props) {
    super(props);

    this.store = CreateCarStore;

    this._setInputFilter = this._setInputFilter.bind(this);
  }

  _setInputFilter(event) {
    console.log(event.target.value);

    CreateCarActions.SetInputValue(event);
  }

  saveCar() {
    CreateCarActions.SaveCar();
  }

  render() {
    const { title, brand, model, year, color, price, km } = this.state.data;

    return (
      <React.Fragment>
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
      </React.Fragment>
    );
  }
}

export default CreateCar;
