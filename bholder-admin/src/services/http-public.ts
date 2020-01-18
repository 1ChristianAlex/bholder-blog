import axios from 'axios';

class HttpPublic {
  constructor(private Url:string) {}


    private Instance = axios.create({
      baseURL: `http://localhost:5000/${this.Url}`,
    })

    public async Post(body:object | string | JSON) {
      const respose = await this.Instance.post('/', body);
      return respose.data
    }

    static getInstance() {
      return new HttpPublic('/')
    }
}

export default HttpPublic
