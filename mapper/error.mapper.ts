import constants from '../constants';

import HttpException from '../exceptions/HttpException';
import EmailAlreadyExistError from '../exceptions/EmailAlreadyExistError';

const { ERROR_MESSAGES } = constants;

const ERR_MAP: Record<string, HttpException> = {
  [ERROR_MESSAGES.EMAIL_ALREADY_EXIST]: new EmailAlreadyExistError(),
}

export const mapError = ({ message }: Error) => {
  const error = ERR_MAP[message] || new HttpException();
  return error;
}