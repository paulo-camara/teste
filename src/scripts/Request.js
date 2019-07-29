import axios from "axios";

class Request {
  SendRequestGet(route, success, fail) {
    axios.get(route)
      .then(res => success(res.data))
      .catch(err => fail(err));
  }

  SendRequestPost(route, payload, success, fail) {
    axios.post(route, payload)
      .then((res) => success(res))
      .catch((error) => fail(error));
  }

  SendRequestPut(route, payload, success, fail) {
    axios.put(route, payload)
      .then(res => success(res.data))
      .catch(err => fail(err));
  }
}

export default Request;
