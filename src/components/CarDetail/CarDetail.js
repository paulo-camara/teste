import React from "react";
import Reflux from "reflux";
import Loading from "../Shared/Loading/Loading";
import InputFilter from "../Shared/Filters/InputFilter/InputFilter";
import CarDetailActions from "./CarDetailActions";
import CarDetailStore from "./CarDetailStore";
import ViewFullDataCar from "../Shared/ViewFullDataCar/ViewFullDataCar";
import { DETAIL_CAR } from "../../contants";

class CarDetail extends Reflux.Component {
  constructor(props) {
    super(props);

    this.store = CarDetailStore;
    this.state = {};

    /** binds feito no constructor para não ser bindado novamente
     *  a cada atualização de estado */
    this.onChangeInput = this.onChangeInput.bind(this);
    this._findCar = this._findCar.bind(this);

    this.buttonRemoveAction = this.buttonRemoveAction.bind(this);
    this.buttonUpdateAction = this.buttonUpdateAction.bind(this);
    this.buttonCancelAction = this.buttonCancelAction.bind(this);
  }

  /** Ao montar o componente seta o state inicial pela store */
  componentDidMount() {
    CarDetailActions.SetInitialState();
  }

  /** Quando o componente é desmontado é necessario que limpe o state
   * para que não fique lixo ao voltar na tela */
  componentWillUnmount() {
    CarDetailActions.SetInitialState();
  }

  buttonRemoveAction() {
    CarDetailActions.Remove();
  }

  buttonUpdateAction() {
    CarDetailActions.Update();
  }

  buttonCancelAction() {
    CarDetailActions.SetInitialState();
  }

  _findCar() {
    CarDetailActions.Find();
  }

  /** Controla o state do input de filtro */
  onChangeInput(event) {
    CarDetailActions.ChangeInputFilter(event);
  }

  /** Controla os states dos inputs de detalhamento do
   * veículo */
  onChangeViewFullDataCar(event) {
    CarDetailActions.ChangeInputDetail(event);
  }

  render() {
    const { isLoading } = this.state.controls;
    const { valueInput, car } = this.state.data;

    return (
      <React.Fragment>
        <InputFilter
          idInput={"filter-car-input"}
          idButton={"filter-car-button"}
          placeHolder={"Pesquise por um veículo"}
          titleButton={"Pesquisar"}
          value={valueInput}
          onChange={this.onChangeInput}
          buttonAction={this._findCar}
        />
        <h3 className="page-title">{DETAIL_CAR.text}</h3>
        <ViewFullDataCar
          title={car.title}
          brand={car.brand}
          model={car.model}
          year={car.year}
          color={car.color}
          price={car.price}
          km={car.km}
          onChange={this.onChangeViewFullDataCar}
        />
        <div className="buttons">
          <div className="actions-button">
            <button className="remove-button" onClick={this.buttonRemoveAction}>
              Excluir
          </button>
            <button className="cancel-button" onClick={this.buttonCancelAction}>
              Cancelar
          </button>
            <button className="update-button" onClick={this.buttonUpdateAction}>
              Atualizar
          </button>
          </div>
        </div>
        <Loading isLoading={isLoading} />
      </React.Fragment>
    );
  }
}

export default CarDetail;
