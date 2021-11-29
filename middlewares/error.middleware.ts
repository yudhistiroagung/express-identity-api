import { ErrorRequestHandler, Request, Response, NextFunction } from 'express';

import HttpException from '../exceptions/HttpException';

const handler: ErrorRequestHandler = (error: HttpException, _: Request, res: Response, next: NextFunction) => {
  const status = error.code;
  const message = error.message;
  res.status(status).send({ status, message });
}

export default handler;