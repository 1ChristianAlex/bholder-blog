import axios from "axios";

class HttpPublic {
  constructor(private Url: string) {}

  private Instance = axios.create({
    baseURL: `http://localhost:5000/${this.Url}`
  });

  public async Post(body: object | string | JSON) {
    const respose = await this.Instance.post("/", body);
    return respose.data;
  }

  public async Get(path: string) {
    const respose = await this.Instance.get(path);
    return respose.data;
  }

  public async Patch(body: object | string | JSON, path = "/") {
    const respose = await this.Instance.patch(path, body);
    return respose.data;
  }

  public async Delete(path = "/") {
    const respose = await this.Instance.delete(path);
    return respose.data;
  }

  static getInstance() {
    return new HttpPublic("/");
  }
}

export default HttpPublic;
