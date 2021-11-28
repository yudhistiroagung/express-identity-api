import { Request, Response } from 'express';

import { IdentityService } from '../../services/identity.service';

const handler = async (req: Request, res: Response) => {
  const { body, app } = req;

  try {
    const service = app?.locals?.identityService as IdentityService;

    const result = await service.register(body);

    res.json(result);
  } catch(error) {
    res.status(500).json({ error })
  }
}

export default handler;