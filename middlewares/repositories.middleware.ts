import { Request, NextFunction, Response } from 'express';

import { Locals } from '../types';
import IdentityRepository from '../repositories/identity.repository';

export default (req: Request, _: Response, next: NextFunction) => {
  req.app.locals.identityRepository = new IdentityRepository();
  
  next();
}