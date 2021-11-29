import { Request, Response, NextFunction } from 'express';
import asyncHandler from 'express-async-handler';

import { IdentityService } from '../../services/identity.service';
import { mapError } from '../../mapper/error.mapper';
import Ex from '../../exceptions/EmailAlreadyExistError';

const handler = asyncHandler( async (req: Request, res: Response, next: NextFunction) => {
  const { body, app } = req;
  const service = app?.locals?.identityService as IdentityService;

  try {
    const result = await service.register(body);

    res.json(result);
  } catch (e: any) {
    throw mapError(e);
  }
});

export default handler;