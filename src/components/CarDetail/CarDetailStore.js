import Reflux from "reflux";
import update from "immutability-helper";
import ListCar from "../../scripts/ListCar/ListCar";
import CarDetailActions from "./CarDetailActions";
import ApiRoutes from "../../scripts/ApiRoutes";
import Request from "../../scripts/Request";

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

    onGetDetailsCar(carID) {
        setTimeout(() => {
            this._setLoading(true);
            this.listCar = new ListCar(carID, this._getDetailsCarSuccess, this._getDetailsCarFail);

            this.listCar.GetListCar();
        }, 100);
    }

    _getDetailsCarSuccess(data) {
        this._setLoading(false);
        this.setState(update(this.state, {
            data: {

                car: { $set: data.cars[0] }
            }
        }));
    }

    _getDetailsCarFail(err) {
        this._setLoading(false);
        console.log(err)
    }

    onChangeViewFullDataCar(event) {
        this.setState(update(this.state, {
            data: {
                [event.target.name]: { $set: event.target.value }
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
        const { title, model, price, year, color, brand, km } = this.state.data;

        const payload = {
            title,
            model,
            price,
            year,
            color,
            brand,
            km
        };

        this.request.SendRequestPost(
            ApiRoutes.SaveCar,
            payload,
            this._saveSuccess,
            this._saveFail
        );
    }

    _saveSuccess() {
        //mostra o toastr de sucesso
        this.onSetInitialState();
    }

    _saveFail() {
        //mostra o toastr de falha
    }

    onDelete() {
        // const { id } = this.state.data;

        //faz o post de exclusão
    }

    _deleteSuccess() {
        //mostra o toastr de sucesso

        this.onSetInitialState();
    }

    _deleteFail() {
        //mostra o toastr de falha
    }

    onUpdate() {
        const { id } = this.state.data.car;

        console.log(this.state.data);

        const route = `${ApiRoutes.UpdateCar}${id}`;
        console.log(route);
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
        this.setState(update(this.state, {
            controls: {
                isLoading: { $set: status }
            }
        }))
    }

    onSetInitialState() {
        this.setState({ ..._getInitialState() });
    }
}

export default CarDetailStore;