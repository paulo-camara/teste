class ApiRoutes {
  constructor() {
    this.ApiList = "http://private-anon-9d54cb3df6-tradersclubapi.apiary-mock.com/api/";
    this.ApiSave = "http://private-anon-3bf4b71314-tradersclubapi.apiary-mock.com/api/";
    this.ApiUpdate = "https://private-anon-3bf4b71314-tradersclubapi.apiary-mock.com/api/cars/";

    this.ListCars = `${this.ApiList}/cars?search=`;
    this.SaveCar = `${this.ApiSave}/cars`;
    this.UpdateCar = `${this.ApiUpdate}/cars/`
  }
}

export default new ApiRoutes();