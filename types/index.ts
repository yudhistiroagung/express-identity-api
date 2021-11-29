import { Application as EApplication } from 'express-serve-static-core';


import { IdentityRepository } from '../repositories/identity.repository';
import { IdentityService } from '../services/identity.service';

export interface Locals {
  identityRepository?: IdentityRepository;
  identiryService?: IdentityService;
}

export type Application = EApplication<Locals>;