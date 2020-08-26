import Request from './Request';
import axios from 'axios';

class Public extends Request {
  constructor() {
    super(
      axios.create({
        baseURL: process.env.REACT_APP_API,
      })
    );
  }
}

const publicInstance = new Public();

export { Public, publicInstance };
