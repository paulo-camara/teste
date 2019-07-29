import React from "react";
import Reflux from "reflux";
import Loading from "../Shared/Loading/Loading";
import InputFilter from "../Shared/Filters/InputFilter/InputFilter";
import ListCarsActions from "./ListCarsActions";
import ListCarsStore from "./ListCarsStore";
import ViewDataCar from "./ViewDataCar/ViewDataCar";

/** Componente da tela de Lista de carros */
class ListCars extends Reflux.Component {
  constructor(props) {
    super(props);

    this.store = ListCarsStore;
    this.state = {};

    this._findCar = this._findCar.bind(this);
    this.onChangeInput = this.onChangeInput.bind(this);
  }

  /** Ao montar o componente é setado os states iniciais */
  componentDidMount() {
    ListCarsActions.ResetState();
  }


  /** A cada change no input o metodo onChangeInput é disparado, 
   * passando o valor para a store */
  onChangeInput(event) {
    const { value } = event.target;

    ListCarsActions.UpdateValueInput(value);
  }

  /** Método responsavel por disparar o filtro de carros ao clicar 
   * no botão de pesquisa */
  _findCar() {
    ListCarsActions.FindCar();
  }

  render() {
    const { value, cars } = this.state.data;
    const { isLoading } = this.state.controls;

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
        <Loading isLoading={isLoading} />

        {/* Ao receber a lista `cars` é feito o map para cada item 
            da lista, e retornado o componente com seus respectivos dados */}
        {cars.map((item, index) => (
          <ViewDataCar
            key={index}
            id={item.id}
            color={item.color}
            brand={item.brand}
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
