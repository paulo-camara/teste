import Reflux from "reflux";
import update from "immutability-helper";
import CreateCarActions from "./CreateCarActions";

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
  }

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

  onSaveCar() {
    console.log('salvou');
  }
}

export default CreateCarStore;
