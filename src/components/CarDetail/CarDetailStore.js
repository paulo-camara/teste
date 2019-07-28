import Reflux from "reflux";
import update from "immutability-helper";
import ListCar from "../../scripts/ListCar/ListCar";
import CarDetailActions from "./CarDetailActions";

const _getInitialState = () => ({
    data: {
        valueInput: '',
        car: [{
            id: '',
            title: '',
            model: '',
            color: '',
            brand: '',
            year: '',
            price: '',
            km: ''
        }]
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


        /**binds feito no constructor para não ser bindado 
         * novamente a cada setState */
        this._findSuccess = this._findSuccess.bind(this);
        this._findFail = this._findFail.bind(this);

        this._saveSuccess = this._saveSuccess.bind(this);
        this._saveFail = this._saveFail.bind(this);

        this._updateSuccess = this._updateSuccess.bind(this);
        this._updateFail = this._updateFail.bind(this);

        this._removeSuccess = this._removeSuccess.bind(this);
        this._removeFail = this._removeFail.bind(this);
    }

    onSetData(car) {
        console.log('chegou');
        
        this.setState(update(this.state, {
            data: {
                car: { $set: car }
            }
        }));
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
        this._clearListCar();
        this._setLoading(true);
        this.listCar.GetListCar();
    }

    _findSuccess(data) {
        this._setLoading(false);
        this.setState(update(this.state, {
            data: {
                car: { $set: data.cars[0] }
            }
        }));
    }

    _findFail() {
        this._setLoading(false);
        console.log('fail');
    }

    onSave() {
        console.log('Salvou Store');
    }

    _saveSuccess() { }

    _saveFail() { }

    onDelete() {
        console.log('Deletou Store');
    }

    _deleteSuccess() { }

    _deleteFail() { }

    onUpdate() {
        console.log('Atualizou Store');
    }

    _updateSuccess() { }

    _updateFail() { }

    onRemove() {
        console.log('Removeu Store');
    }

    _removeSuccess() { }

    _removeFail() { }

    _clearListCar() {
        this.setState(update(this.state, {
            data: {
                car: { $set: _getInitialState().data.car[0] }
            }
        }));
    }

    _setLoading(status) {
        this.setState(update(this.state,
            {
                controls: {
                    isLoading: { $set: status }
                }
            }));
    }

    onSetInitialState() {
        this.setState({ ..._getInitialState() });
    }
}

export default CarDetailStore;