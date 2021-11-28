import Joi from 'joi';
import JoiValidator from 'express-joi-validation';

const validator = JoiValidator.createValidator();

const registerSchema = Joi.object({
  email: Joi.string().email().required(),
  password: Joi.string().min(6).required()
});

const registerValidator = validator.body(registerSchema);

export default {
  registerValidator,
}