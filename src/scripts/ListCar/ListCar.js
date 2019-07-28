import Request from "../Request";
import ApiRoutes from "../ApiRoutes";

class ListCar {
    constructor(carID, success, error) {
        this.request = new Request();

        this.success = success;
        this.error = error;

        this.route = `${ApiRoutes.ListCars}${carID}`;
    }

    GetListCar() {
        this.request.SendRequestGet(this.route, this.success, this.error);
    }
}

export default ListCar;