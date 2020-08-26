export interface IRequest {
  get(url: string): Promise<any>;
  post(url: string, body: object): Promise<any>;
  put(url: string, body: object): Promise<any>;
  delete(url: string, body: object): Promise<any>;
}
