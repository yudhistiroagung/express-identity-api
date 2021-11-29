import { Request, NextFunction, Response } from 'express';

import IdentityService from '../services/identity.service';

export default (req: Request, _: Response, next: NextFunction) => {
  const locals = req.app.locals || {};

  const identityRepository = locals?.identityRepository;

  req.app.locals.identityService = new IdentityService({
    identityRepository
  });

  next();
}