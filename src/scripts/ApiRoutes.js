class ApiRoutes {
  constructor() {
    this.Api = "http://private-anon-9d54cb3df6-tradersclubapi.apiary-mock.com/api/";

    this.ListCars = `${this.Api}/cars?search=`;
  }
}

export default new ApiRoutes();