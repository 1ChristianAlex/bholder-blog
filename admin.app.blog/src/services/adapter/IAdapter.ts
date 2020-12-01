/* eslint-disable @typescript-eslint/ban-types */
/* eslint-disable @typescript-eslint/no-explicit-any */
interface IRequestOptions {
  header?: object;
  params?: object;
}

interface IAdapter {
  get(url: string, requestOptions?: IRequestOptions): Promise<any>;
  post(
    url: string,
    body: object,
    requestOptions?: IRequestOptions
  ): Promise<any>;
  put(
    url: string,
    body: object,
    requestOptions?: IRequestOptions
  ): Promise<any>;
  delete(
    url: string,
    body: object,
    requestOptions?: IRequestOptions
  ): Promise<any>;
}

export type { IAdapter, IRequestOptions };
