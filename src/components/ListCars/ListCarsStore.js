import toastr from "toastr";
import Reflux from "reflux";
import update from "immutability-helper";
import ListCarsActions from "./ListCarsActions";
import ApiRoutes from "../../scripts/ApiRoutes";
import Request from './../../scripts/Request';

/** Método retorna todo o state inicial */
const _getInitialState = () => ({
  data: {
    valueInput: "",
    cars: []
  },
  controls: {
    isLoading: false
  }
});

class ListCarsStore extends Reflux.Store {
  constructor() {
    super();

    this.listenables = ListCarsActions;
    this.state = { ..._getInitialState() };

    this.request = new Request();

    this._findCarSuccess = this._findCarSuccess.bind(this);
    this._findCarFail = this._findCarFail.bind(this);
  }

  /** Método responsavel por controlar o state do input de filtro */
  onUpdateValueInput(event) {
    const { name, value } = event.target;

    this.setState(
      update(this.state, {
        data: {
          [name]: { $set: [value] }
        }
      })
    );
  }
  /** Metodo responsavel por fazer a chamada da request de obter a lista de carros */
  onFindCar() {
    this._clearListCars();
    this._setLoading(true);

    const { valueInput } = this.state.data;
    const route = `${ApiRoutes.ListCars}${valueInput}`;

    this.request.SendRequestGet(route, this._findCarSuccess, this._findCarFail);
  }

  /** método executado em caso de sucesso da request.
   * Responsavel por setar a lista de carros no state da da tela de ListCars */
  _findCarSuccess(data) {
    this._setLoading(false);

    this.setState(
      update(this.state, {
        data: {
          cars: { $set: data.cars }
        }
      })
    );
  }

  /** Método executado em caso de erro na request. Exibe o toastr de erro */
  _findCarFail(err) {
    console.log(err);
    
    this._setLoading(false);
    toastr.error("Erro ao buscar veículo");
  }

  /** Método responsavel por limpar a lista de carros, para quando for feito um
   * segundo filtro, não exibir lixos enquanto faz a request */
  _clearListCars() {
    this.setState(
      update(this.state, {
        data: {
          cars: { $set: [] }
        }
      })
    );
  }

  /** Método responsavel por setar o state do isLoading de acordo com o parametro passado  */
  _setLoading(status) {
    this.setState(
      update(this.state, {
        controls: {
          isLoading: { $set: status }
        }
      })
    );
  }

  /** Método responsavel por restaurar o state inicial */
  onResetState() {
    this.setState({ ..._getInitialState() });
  }
}

export default ListCarsStore;
