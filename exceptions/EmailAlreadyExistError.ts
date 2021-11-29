import HttpException from './HttpException';

class EmailAlreadyExistError extends HttpException {
  constructor() {
    super(409, 'Email already exist');
  }
}

export default EmailAlreadyExistError;