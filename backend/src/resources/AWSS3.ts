import * as AWS from 'aws-sdk';
import { BUCKET_NAME } from '../config/env';

export class S3File {
  private S3 = new AWS.S3();
  public Upload = (
    buffer: Buffer,
    filename: string,
  ): Promise<AWS.S3.ManagedUpload.SendData> => {
    return new Promise((res, rej) => {
      this.S3.createBucket({ Bucket: BUCKET_NAME });

      const s3Parms: AWS.S3.PutObjectRequest = {
        Bucket: BUCKET_NAME,
        Key: filename.replace(' ', '-'),
        Body: buffer,
      };
      this.S3.upload(s3Parms, (err, data) => {
        if (err) rej(err);

        res(data);
      });
    });
  };
  public ListFiles = (): Promise<AWS.S3.ListObjectsV2Output> => {
    return new Promise((res, rej) => {
      const parms: AWS.S3.ListObjectsV2Request = {
        Bucket: BUCKET_NAME,
        MaxKeys: 100,
      };
      this.S3.listObjectsV2(parms, (err, data) => {
        if (err) rej(err);

        res(data);
      });
    });
  };
  public Delete = (filename: string): Promise<AWS.S3.DeleteObjectOutput> => {
    return new Promise((res, rej) => {
      this.S3.createBucket({ Bucket: BUCKET_NAME });

      const s3Parms: AWS.S3.PutObjectRequest = {
        Bucket: BUCKET_NAME,
        Key: filename.replace(' ', '-'),
      };
      this.S3.deleteObject(s3Parms, (err, data) => {
        if (err) rej(err);
        res(data);
      });
    });
  };
}
