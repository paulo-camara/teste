import Reflux from "reflux";

const CarDetailActions = Reflux.createActions([
    'Find',
    'ChangeInputDetail',
    'ChangeInputFilter',
    'SetInitialState',
    'GetDetailsCar',
    'Remove',
    'Cancel',
    'Update'
]);

export default CarDetailActions;