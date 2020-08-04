import { Injectable } from '@nestjs/common';
import { S3 } from 'aws-sdk';
import { AWS_BUCKET_NAME } from 'config/Envs';
import { Body } from 'aws-sdk/clients/s3';
import { IBucket } from 'interfaces/IBucket';

@Injectable()
export class Bucket implements IBucket {
  protected readonly bucketName = AWS_BUCKET_NAME;

  private s3: S3;

  constructor() {
    this.s3 = new S3();
  }

  async uploadMemoryFile(file: Body): Promise<string> {
    let buffer = file as Buffer;

    if (!Buffer.isBuffer(file)) {
      buffer = Buffer.from(file);
    }

    const params: S3.PutObjectRequest = {
      Bucket: this.bucketName,
      Body: buffer,
      Key: `${Math.random() * Date.now()}`,
    };

    const sendData = await this.s3.upload(params).promise();

    return sendData.Location;
  }
}
