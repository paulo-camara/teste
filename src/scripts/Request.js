import axios from "axios";

class Request {
  SendRequestGet(route, success, fail) {
    axios
      .get(route)
      .then(res => success(res.data))
      .catch(err => fail(err));
  }
}

export default Request;
