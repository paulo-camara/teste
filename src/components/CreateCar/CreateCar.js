import React from "react";
import Reflux from "reflux";
import ViewFullDataCar from "../Shared/ViewFullDataCar/ViewFullDataCar";
import Loading from "../Shared/Loading/Loading";
import CreateCarStore from "./CreateCarStore";
import CreateCarActions from "./CreateCarActions";
import { SAVE_CAR } from "../../contants";

class CreateCar extends Reflux.Component {
  constructor(props) {
    super(props);

    this.store = CreateCarStore;

    /** Função bindada no constructor para que não bind a cada
     * vez que pasar no render ao dar setState*/ 
    this._setInputFilter = this._setInputFilter.bind(this);
  }

  /** Ao desmontar o componente é resetado o state */
  componentWillUnmount() {
    CreateCarActions.SetInitialState();
  }

  /** Função passada para o componente ViewFullDataCar 
   * para fazer o controle do valor do state do input */
  _setInputFilter(event) {
    CreateCarActions.SetInputValue(event);
  }

  /** Função passada para o click do botão, chama a 
   * action de salvar o veículo */
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
