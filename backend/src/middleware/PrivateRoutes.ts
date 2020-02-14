import { Router, Request, Response } from 'express';
import { JsonToken } from '../helpers';
import { IBody } from '../Interfaces';

export const privatesRoutes = Router();
const privateRoutePath = '/api/';

const privatesHandler = (req: Request, res: Response, next: Function) => {
  const token = req.headers?.authorization;
  const jsonToken = new JsonToken();

  const auth = jsonToken.Verify(token);
  if (!auth) {
    res.status(401).json({ mensage: 'Unauthorized. Please log again' });
  } else {
    const oldBody = req.body as IBody;

    req.body = {
      ...oldBody,
      currentUser: auth,
    };
    next();
  }
};

privatesRoutes.use(privateRoutePath, privatesHandler);
