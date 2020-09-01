import { IRequest } from './IRequest';
import { AxiosInstance, AxiosResponse } from 'axios';

export default abstract class Request implements IRequest {
  private configAxios: Function;

  constructor(private connect: AxiosInstance, config = () => ({})) {
    this.configAxios = config;
  }

  async get(url: string): Promise<AxiosResponse> {
    try {
      const response = await this.connect.get(url, this.configAxios());
      return response;
    } catch (error) {
      throw error;
    }
  }

  async post(url: string, body: object): Promise<AxiosResponse> {
    try {
      const response = await this.connect.post(url, body, this.configAxios());
      return response;
    } catch (error) {
      throw error;
    }
  }

  async put(url: string, body: object): Promise<AxiosResponse> {
    try {
      const response = await this.connect.post(url, body, this.configAxios());
      return response;
    } catch (error) {
      throw error;
    }
  }

  async delete(url: string, body: object): Promise<AxiosResponse> {
    try {
      const response = await this.connect.post(url, body, this.configAxios());
      return response;
    } catch (error) {
      throw error;
    }
  }
}
