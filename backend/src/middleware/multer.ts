import multer from 'multer';
import { Request, Response, NextFunction } from 'express';
import { S3File } from '../resources';
import { JsonToken } from '../helpers/';
import { IUser } from '../Interfaces';

const storage = multer.memoryStorage();
const upload = multer({ storage });

const MulterUpload = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const s3 = new S3File();
    const jsonToken = new JsonToken();
    const token = req.headers?.authorization;
    const currentUser = jsonToken.Verify(token) as IUser;
    const files = req.files as Express.Multer.File[];
    const filesList = {};

    if (files.length > 0) {
      await Promise.all(
        files.map(async file => {
          const snapshot = await s3.Upload(file.buffer, file.originalname);
          const url = snapshot.Location;
          [file.fieldname, url];
          return (filesList[file.fieldname] = url);
        }),
      );
    }

    const oldBody = req.body;
    req.body = {
      data: {
        ...oldBody,
        ...filesList,
      },
      currentUser,
    };

    next();
  } catch (error) {
    console.log(error);
  }
};

export { upload, MulterUpload };
