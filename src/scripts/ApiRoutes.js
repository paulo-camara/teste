class ApiRoutes {
  constructor() {
    const env = "mock";
    
    const routes = {
      mock:
        "https://private-anon-239e04e901-tradersclubapi.apiary-mock.com/api",
      production: "https://tchml.tradersclub.com.br:12000/api"
    };

    this.ListCars = `${routes[env]}/cars?search=`;
    this.SaveCar = `${routes[env]}/cars`;
    this.UpdateCar = `${routes[env]}/cars/`;
    this.RemoveCar = `${routes[env]}/cars/`;
  }
}

export default new ApiRoutes();
