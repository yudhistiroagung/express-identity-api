import express from 'express';

import validators from '../../validations';
import registerHandler from './register.handler';

const {
  identity: {
    registerValidator
  }
} = validators;

const router = express.Router();

router.post('/register', registerValidator, registerHandler);

const identityRoute = express.Router()
  .use('/identity', router)

export default identityRoute;