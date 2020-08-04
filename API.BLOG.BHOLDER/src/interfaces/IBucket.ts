import { Body } from 'aws-sdk/clients/s3';

export interface IBucket {
  uploadMemoryFile(file: Body): Promise<string>;
}
