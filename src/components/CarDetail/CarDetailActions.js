import Reflux from "reflux";

const CarDetailActions = Reflux.createActions([
    'Find',
    'ChangeInputDetail',
    'ChangeInputFilter',
    'SetInitialState',
    'GetDetailsCar',
    'Save',
    'Remove',
    'Cancel',
    'Update'
]);

export default CarDetailActions;