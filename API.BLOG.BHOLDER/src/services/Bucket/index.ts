import { Injectable } from '@nestjs/common';
import { S3 } from 'aws-sdk';
import { AWS_BUCKET_NAME } from 'config/Envs';
import { IBucket } from './IBucket';
import { createReadStream, PathLike, unlinkSync } from 'fs';
import { basename } from 'path';

@Injectable()
export class Bucket implements IBucket {
  protected readonly bucketName = AWS_BUCKET_NAME;

  private s3: S3;

  constructor() {
    this.s3 = new S3();
  }

  async uploadMemoryFile(file: PathLike): Promise<string> {
    try {
      return new Promise((res, rej) => {
        const stream = createReadStream(file);

        const params: S3.PutObjectRequest = {
          Bucket: this.bucketName,
          Body: stream,
          Key: basename(file as string),
        };
        this.s3.upload(params, (err, data) => {
          if (err) {
            rej(err);
          }
          res(data.Location);
        });
        unlinkSync(file);
      });
    } catch (error) {
      throw error;
    }
  }
}
