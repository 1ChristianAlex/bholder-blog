import Request from './Request';
import axios from 'axios';

class Api extends Request {
  constructor() {
    super(
      axios.create({
        baseURL: `${process.env.REACT_APP_API}/api`,
      }),
      () =>
        `Bearer ${localStorage.getItem(process.env.REACT_APP_TOKEN_STORAGE!)}`
    );
  }
}

const apiInstance = new Api();

export { Api, apiInstance };
