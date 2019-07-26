import Reflux from 'reflux';
import HomeActions from './HomeActions';
import Request from '../../scripts/Request';
import ApiRoutes from '../../scripts/ApiRoutes';

const _getInitialState = () => (
    {
        data: {
            value: ''
        },
        controls: {}
    }
)

class HomeStore extends Reflux.Store {
    constructor() {
        super();

        this.listenables = HomeActions;
        this.state = { ..._getInitialState() };

        this.request = new Request();

        this._findCarSucess = this._findCarSuccess.bind(this);
        this._findCarFail = this._findCarFail.bind(this);
    }

    onUpdateValueInput(value) {
        this.setState({
            data: {
                value
            }
        });

        console.log(this.state.data);
    }

    onFindCar() {
        const payload = {}

        this.request.SendRequestPost(
            ApiRoutes.SaveCar,
            payload,
            this._findCarSuccess,
            this._findCarFail
        );
    }

    _findCarSuccess(data) {
        console.log(data);
    }

    _findCarFail(err) {
        console.log(err);
    }

    onResetState() {
        this.setState({ ..._getInitialState() });
    }
}

export default HomeStore;