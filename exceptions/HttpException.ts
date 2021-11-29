class HttpException extends Error {
  code: number;
  message: string;

  constructor(code: number = 500, message: string = 'Something went wrong') {
    super(message);
    this.code = code;
    this.message = message
  }
}

export default HttpException;
