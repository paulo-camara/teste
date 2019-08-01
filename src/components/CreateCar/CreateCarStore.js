import Reflux from "reflux";
import update from "immutability-helper";
import CreateCarActions from "./CreateCarActions";
import Request from "../../scripts/Request";
import ApiRoutes from "../../scripts/ApiRoutes";
import toastr from "toastr";

const _getInitialState = () => {
  return {
    controls: {
      isLoading: false
    },
    data: {
      title: "",
      brand: "",
      model: "",
      year: "",
      color: "",
      price: "",
      km: ""
    }
  };
};

class CreateCarStore extends Reflux.Store {
  constructor() {
    super();

    this.listenables = CreateCarActions;
    this.state = { ..._getInitialState() };

    this.request = new Request();

    /** Funções bindads no constructor para que sejam 
     * bindadas apenas uma vez */
    this._saveCarSuccess = this._saveCarSuccess.bind(this);
    this._saveCarFail = this._saveCarFail.bind(this);
  }

  /** Função recebe o name do input e o value no parametro event,
   * o nome irá ser usado como variavel de acesso do state*/
  onSetInputValue(event) {
    const { name, value } = event.target;

    this.setState(
      update(this.state, {
        data: {
          [name]: { $set: value }
        }
      })
    );
  }

  /** Valida se o payload contem todas as propriedades do veiculo */
  _isSavePayload(payload) {
    const { title, model, price, color, km, brand, year } = payload.car

    if (title && model && price && color && km && brand && year) {
      return true;
    }

    return false;
  }

  /** Executa a request de salvar o veiculo */
  onSaveCar() {
    const payload = {
      car: {
        ...this.state.data
      }
    }

    const isValid = this._isSavePayload(payload);
    if (!isValid) {
      toastr.error("Preencha os campos corretamente");
      return;
    }

    this._setLoading(true)
    this.request.SendRequestPost(
      ApiRoutes.SaveCar,
      payload,
      this._saveCarSuccess,
      this._saveCarFail
    );
  }

  _saveCarSuccess() {
    this.onSetInitialState();
    toastr.success("Veiculo salvo com sucesso");
  }

  _saveCarFail() {
    this._setLoading(false);
    toastr.error("Erro ao salvar o veiculo");
  }

  /** Restaura o state para o inicial */
  onSetInitialState() {
    this.setState({ ..._getInitialState() });
  }

  /** Seta o state do isLoading de acordo com 
   * o status passado */
  _setLoading(status) {
    this.setState(update(this.state,
      {
        controls: {
          isLoading: { $set: status }
        }
      })
    );
  }
}

export default CreateCarStore;
