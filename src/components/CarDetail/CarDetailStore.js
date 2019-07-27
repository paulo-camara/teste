import Reflux from "reflux";
import update from "immutability-helper";
import ListCar from "../Shared/ListCar/ListCar";
import CarDetailActions from "./CarDetailActions";

const _getInitialState = () => ({
    data: {
        valueInput: ''
    },
    controls: {
        isLoading: false
    }
});

class CarDetailStore extends Reflux.Store {
    constructor() {
        super();

        this.listenables = CarDetailActions;
        this.state = { ..._getInitialState() };;

        this._findSuccess = this._findSuccess.bind(this);
        this._findFail = this._findFail.bind(this);
    }

    ChangeInput(event) {
        this.setState(update(this.state, {
            data: {
                valueInput: { $set: event.target.value }
            }
        }));
    }

    onInstanceListCar() {
        const { valueInput } = this.state.data;

        this.listCar = new ListCar(valueInput, this._findSuccess, this._findFail);
    }

    onFind() {
        this.listCar.GetListCar();
    }

    _findSuccess() {
        console.log('success');
    }

    _findFail() {
        console.log('fail');
    }

    onSetInitialState() {

        this.setState({ ..._getInitialState() })
        console.log(this.state);
    }
}

export default CarDetailStore;