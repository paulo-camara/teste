import Reflux from "reflux";
import update from "immutability-helper";
import CarDetailActions from "./CarDetailActions";
import ApiRoutes from "../../scripts/ApiRoutes";
import Request from "../../scripts/Request";
import toastr from "toastr";

const _getInitialState = () => ({
  data: {
    valueInput: "",
    car: [
      {
        id: "",
        title: "",
        model: "",
        color: "",
        brand: "",
        year: "",
        price: "",
        km: ""
      }
    ]
  },
  controls: {
    isLoading: false
  }
});

class CarDetailStore extends Reflux.Store {
  constructor() {
    super();

    this.listenables = CarDetailActions;
    this.state = { ..._getInitialState() };

    this.request = new Request();

    /**binds feito no constructor para não ser bindado
     * novamente a cada setState */
    this._getDetailsCarSuccess = this._getDetailsCarSuccess.bind(this);
    this._getDetailsCarFail = this._getDetailsCarFail.bind(this);

    this._findSuccess = this._findSuccess.bind(this);
    this._findFail = this._findFail.bind(this);

    this._saveSuccess = this._saveSuccess.bind(this);
    this._saveFail = this._saveFail.bind(this);

    this._updateSuccess = this._updateSuccess.bind(this);
    this._updateFail = this._updateFail.bind(this);

    this._removeSuccess = this._removeSuccess.bind(this);
    this._removeFail = this._removeFail.bind(this);
  }

  /**Método executado quando é requisitado o detalhamento pela
   * tela de listagem de veiculos */
  onGetDetailsCar(carID) {
    this._setLoading(true);
    this.route = `${ApiRoutes.ListCars}${carID}`;

    this.request.SendRequestGet(
      this.route,
      this._getDetailsCarSuccess,
      this._getDetailsCarFail
    );
  }

  _getDetailsCarSuccess(data) {
    this._setLoading(false);
    this.setState(
      update(this.state, {
        data: {
          car: { $set: data.cars[0] }
        }
      })
    );
  }

  _getDetailsCarFail(err) {
    this._setLoading(false);
    toastr.error("Erro ao buscar detalhamento do veiculo");
  }

  /** Grava o state de cada input do detalhemento pelo nome do input passado
   * como variavel de acesso do objeto de state */
  onChangeInputDetail(event) {
    this.setState(
      update(this.state, {
        data: {
          car: {
            [event.target.name]: { $set: event.target.value }
          }
        }
      })
    );
  }

  /** Grava o valor do input do filtro pelo name do input */
  onChangeInputFilter(event) {
    this.setState(
      update(this.state, {
        data: {
          [event.target.name]: { $set: event.target.value }
        }
      })
    );
  }

  /** Executa a request do list pela classe compartilhada de request
   * da lista de veiculos */
  onFind() {
    this._clearListCar();
    this._setLoading(true);

    const { valueInput } = this.state.data;
    const route = `${ApiRoutes.ListCars}${valueInput}`;

    this.request.SendRequestGet(route, this._findSuccess, this._findFail);
  }

  _findSuccess(data) {
    this._setLoading(false);
    this.setState(
      update(this.state, {
        data: {
          car: { $set: data.cars[0] }
        }
      })
    );
  }

  _findFail() {
    this._setLoading(false);

    toastr.error("Erro ao buscar veiculo");
  }

  /** Executa a request de salvar o veiculo */
  onSave() {
    const { title, model, price, year, color, brand, km } = this.state.data.car;

    const payload = {
      title,
      model,
      price,
      year,
      color,
      brand,
      km
    };

    //validar o payload antes de salvar

    this.request.SendRequestPost(
      ApiRoutes.SaveCar,
      payload,
      this._saveSuccess,
      this._saveFail
    );
  }

  _saveSuccess() {
    toastr.success("Veiculo salvo com sucesso");
    this.onSetInitialState();
  }

  _saveFail() {
    toastr.error("Erro ao salvar o veiculo");
  }

  /** Faz a request de update */
  onUpdate() {
    const { id } = this.state.data.car;

    if (id) {
      const route = `${ApiRoutes.UpdateCar}${id}`;
      const payload = this.state.data.car[0];

      this.request.SendRequestPut(
        route,
        payload,
        this._updateSuccess,
        this._updateFail
      );
      return;
    }

    this._updateFail();
  }

  _updateSuccess() {
    toastr.success("Atualizado com sucesso");
    this.onSetInitialState();
  }

  _updateFail() {
    toastr.error("Erro ao atualizar veiculo");
  }

  /** Faz a request de exclusão do veiculo */
  onRemove() {
    console.log("Removeu Store");
  }

  _removeSuccess() {}

  _removeFail() {}

  /** Limpa os campos do detalhamento do veiculo */
  _clearListCar() {
    this.setState(
      update(this.state, {
        data: {
          car: { $set: _getInitialState().data.car[0] }
        }
      })
    );
  }

  /** Seta o isLoading de acordo com o status passado
   * por parametro */
  _setLoading(status) {
    this.setState(
      update(this.state, {
        controls: {
          isLoading: { $set: status }
        }
      })
    );
  }

  /** Seta o state inicial da tela */
  onSetInitialState() {
    this.setState({ ..._getInitialState() });
  }
}

export default CarDetailStore;
