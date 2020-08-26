import { IRequest } from './IRequest';
import { AxiosInstance } from 'axios';

export default abstract class Request implements IRequest {
  constructor(private connect: AxiosInstance) {}

  async get(url: string): Promise<any> {
    try {
      const response = await this.connect.get(url);
      return response.data;
    } catch (error) {
      throw error;
    }
  }

  async post(url: string, body: object): Promise<any> {
    try {
      const response = await this.connect.post(url, body);
      return response.data;
    } catch (error) {
      throw error;
    }
  }

  async put(url: string, body: object): Promise<any> {
    try {
      const response = await this.connect.post(url, body);
      return response.data;
    } catch (error) {
      throw error;
    }
  }

  async delete(url: string, body: object): Promise<any> {
    try {
      const response = await this.connect.post(url, body);
      return response.data;
    } catch (error) {
      throw error;
    }
  }
}
