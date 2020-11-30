/* eslint-disable @typescript-eslint/ban-types */
import axios, { AxiosInstance, AxiosResponse } from 'axios';
import { IAdapter, IRequestOptions } from './IAdapter';

class Adapter implements IAdapter {
  private http: AxiosInstance;

  constructor(private baseUrl?: string) {
    if (!baseUrl) {
      this.baseUrl = 'http://localhost:5000';
    }
    this.http = axios.create({ baseURL: this.baseUrl, headers: '' });
  }

  private getTokenHeader(): object {
    const token = localStorage.getItem('token');
    const header = {
      Authorization: `Bearer ${token}`,
    };

    return header;
  }

  async get<T = any>(
    url: string,
    requestOptions?: IRequestOptions
  ): Promise<AxiosResponse<T>> {
    const header = {
      ...requestOptions?.header,
      ...this.getTokenHeader(),
    };

    return this.http.get(url, {
      params: requestOptions?.params,
      headers: header,
    });
  }
  async post<T = any>(
    url: string,
    body: object,
    requestOptions?: IRequestOptions
  ): Promise<AxiosResponse<T>> {
    const header = {
      ...requestOptions?.header,
      ...this.getTokenHeader(),
    };

    return this.http.post(url, body, {
      params: requestOptions?.params,
      headers: header,
    });
  }
  async put<T = any>(
    url: string,
    body: object,
    requestOptions?: IRequestOptions
  ): Promise<AxiosResponse<T>> {
    const header = {
      ...requestOptions?.header,
      ...this.getTokenHeader(),
    };

    return this.http.post(url, body, {
      params: requestOptions?.params,
      headers: header,
    });
  }
  async delete<T = any>(
    url: string,
    body: object,
    requestOptions?: IRequestOptions
  ): Promise<AxiosResponse<T>> {
    const header = {
      ...requestOptions?.header,
      ...this.getTokenHeader(),
    };

    return this.http.delete(url, {
      params: requestOptions?.params,
      headers: header,
      data: body,
    });
  }
}

export default Adapter;
