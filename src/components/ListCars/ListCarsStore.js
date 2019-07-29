import toastr from "toastr";
import Reflux from "reflux";
import update from "immutability-helper";
import ListCarsActions from "./ListCarsActions";
import ListCar from "../../scripts/ListCar/ListCar";

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

    this._findCarSuccess = this._findCarSuccess.bind(this);
    this._findCarFail = this._findCarFail.bind(this);
  }

  onInstanceListCar() {
    const { valueInput } = this.state.data;

    this.listCar = new ListCar(
      valueInput,
      this._findCarSuccess,
      this._findCarFail
    );
  }

  /** Método responsavel por controlar o state do input de filtro */
  onUpdateValueInput(value) {
    this.setState(
      update(this.state, {
        data: {
          valueInput: { $set: value }
        }
      })
    );
  }
  /** Metodo responsavel por fazer a chamada da request de obter a lista de carros */
  onFindCar() {
    toastr.success("sucesso");

    this._clearListCars();
    this._setLoading(true);

    this.listCar.GetListCar();
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
    this._setLoading(false);

    console.log(err);
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
