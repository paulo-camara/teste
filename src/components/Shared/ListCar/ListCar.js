import Request from "../../../scripts/Request";
import ApiRoutes from "../../../scripts/ApiRoutes";

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