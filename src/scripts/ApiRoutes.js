class ApiRoutes {
  constructor() {
    const env = 'mock';

    this.ApiList = "http://private-anon-9d54cb3df6-tradersclubapi.apiary-mock.com/api";
    this.ApiSave = "http://private-anon-3bf4b71314-tradersclubapi.apiary-mock.com/api";
    this.ApiUpdate = "https://private-anon-3bf4b71314-tradersclubapi.apiary-mock.com/api";
    this.ApiRemove = "https://private-anon-a333fe3b86-tradersclubapi.apiary-mock.com/api";

    this.ListCars = `${this.ApiList}/cars?search=`;
    this.SaveCar = `${this.ApiSave}/cars`;
    this.UpdateCar = `${this.ApiUpdate}/cars/`
    this.RemoveCar = `${this.ApiRemove}/cars/`

    if (env === 'production') {
      this.UrlProduction = "https://tchml.tradersclub.com.br:12000/api";

      this.ListCars = `${this.UrlProduction}/cars?search=`;
      this.SaveCar = `${this.UrlProduction}/cars`;
      this.UpdateCar = `${this.UrlProduction}/cars/`
      this.RemoveCar = `${this.UrlProduction}/cars/`
      return;
    }
  }
}

export default new ApiRoutes();