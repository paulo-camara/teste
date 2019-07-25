import React from "react";

import InputFilter from "../Shared/Filters/InputFilter/InputFilter";

export class Home extends React.Component {
  constructor(props) {
    super(props);

    this._findCar = this._findCar.bind(this);
  }

  _findCar() {
    console.log("Filtrou");
  }

  render() {
    return (
      <div className="home-page">
        <InputFilter
          idInput={"filter-car-input"}
          idButton={"filter-car-button"}
          placeHolder={"Search a car"}
          titleButton={"Search"}
          value={"123"}
          buttonAction={this._findCar}
        />

        <div className="home-message">
          <h1 className="message"> Pesquisa de veiculo do AqueleClub </h1>
        </div>
      </div>
    );
  }
}
