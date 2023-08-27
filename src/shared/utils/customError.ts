class CustomError {
  statusCode: number;

  _message: Object[] | string;

  constructor(statusCode: number, message: Object[] | string) {
    this.statusCode = statusCode;
    this._message = message;
  }
}

export { CustomError };
