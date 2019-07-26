import Reflux from "reflux";
import update from "immutability-helper";
import ListCarsActions from "./ListCarsActions";
import Request from "../../scripts/Request";
import ApiRoutes from "../../scripts/ApiRoutes";

const _getInitialState = () => ({
  data: {
    value: "",
    cars: []
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

  onUpdateValueInput(value) {
    this.setState(
      update(this.state, {
        data: {
          value: { $set: value }
        }
      })
    );
  }

  onFindCar() {
    const { value } = this.state.data;
    const route = `${ApiRoutes.ListCars}${value}`;

    this.request.SendRequestGet(route, this._findCarSuccess, this._findCarFail);
  }

  _findCarSuccess(data) {
    this.setState(
      update(this.state, {
        data: {
          cars: { $set: data.cars }
        }
      })
    );
  }

  _findCarFail(err) {
    console.log(err);
  }

  onResetState() {
    this.setState({ ..._getInitialState() });
  }
}

export default ListCarsStore;
