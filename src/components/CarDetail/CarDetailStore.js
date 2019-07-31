import Reflux from "reflux";
import update from "immutability-helper";
import CarDetailActions from "./CarDetailActions";
import ApiRoutes from "../../scripts/ApiRoutes";
import Request from "../../scripts/Request";
import toastr from "toastr";

const _getInitialState = () => ({
  data: {
    valueInput: "",
    car: {
      id: "",
      title: "",
      model: "",
      color: "",
      brand: "",
      year: "",
      price: "",
      km: ""
    }
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

    this._updateSuccess = this._updateSuccess.bind(this);
    this._updateFail = this._updateFail.bind(this);

    this._removeSuccess = this._removeSuccess.bind(this);
    this._removeFail = this._removeFail.bind(this);
  }

  /**Método executado quando é requisitado o detalhamento pela
   * tela de listagem de veiculos */
  onGetDetailsCar(carID) {
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

  /** Faz a request de update */
  onUpdate() {
    const { id } = this.state.data.car;

    if (id) {
      this._setLoading(true)
      const route = `${ApiRoutes.UpdateCar}${id}`;
      const payload = {
        car: {
          ...this.state.data.car
        }
      };

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
    this._setLoading(false)
    toastr.error("Erro ao atualizar veiculo");
  }

  /** Faz a request de exclusão do veiculo */
  onRemove() {
    const { id } = this.state.data.car;
    const route = `${ApiRoutes.RemoveCar}${id}`

    if(id) {
      this._setLoading(true)
      this.request.SendRequestDelete(route, this._removeSuccess, this._removeFail);
      return;
    }

    toastr.error('Preencha corretamente os campos');
  }

  _removeSuccess() {
    this._setLoading(false) 
    toastr.success("Veiculo deletado");
  }

  _removeFail() {
    this._setLoading(false);
    toastr.error("Erro ao deletar veiculo")
  }

  /** Limpa os campos do detalhamento do veiculo */
  _clearListCar() {
    this.setState(
      update(this.state, {
        data: {
          car: { $set: _getInitialState().data.car }
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
