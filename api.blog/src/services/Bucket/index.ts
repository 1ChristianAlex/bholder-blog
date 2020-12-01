import { Injectable } from '@nestjs/common';
import { S3 } from 'aws-sdk';
import { BUCKET_NAME } from 'config/Envs';
import { IBucket } from './IBucket';
import {
  createReadStream,
  PathLike,
  unlinkSync,
  writeFileSync,
  existsSync,
  ReadStream,
} from 'fs';
import { basename, resolve } from 'path';
import { Body } from 'aws-sdk/clients/s3';

@Injectable()
export class Bucket implements IBucket {
  protected readonly bucketName = BUCKET_NAME;

  private s3: S3;

  constructor() {
    this.s3 = new S3();
  }

  async uploadBaseFile(file: string): Promise<string> {
    if (!(file.includes('http://') || file.includes('https://'))) {
      const type = file.match(/(\/[A-Za-z]*)/)[0];
      const pathWrite = `${resolve('uploads/')}/${Date.now()}.${type.replace(
        '/',
        '',
      )}`;

      writeFileSync(pathWrite, file.replace(/^data:image\/(...);base64,/, ''), {
        encoding: 'base64',
      });

      const stream = createReadStream(pathWrite);

      const pathUrl = await this.uploadToBucket(stream, basename(pathWrite));
      unlinkSync(pathWrite);

      return pathUrl;
    }
    return file;
  }

  private uploadToBucket(
    file: ReadStream,
    filename: string,
  ): string | PromiseLike<string> {
    return new Promise((res, rej) => {
      const params: S3.PutObjectRequest = {
        Bucket: this.bucketName,
        Body: file,
        Key: filename,
      };
      this.s3.upload(params, (err, data) => {
        if (err) {
          rej(err);
          if (existsSync(file.toString())) {
            unlinkSync(file.toString());
          }
        }

        res(data.Location);
      });
    });
  }
}
