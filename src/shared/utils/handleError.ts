import { Request, Response, NextFunction } from "express";
import { CustomError } from "./customError";

const handleError = (
  err: CustomError,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  if (err instanceof CustomError) {
    return res.status(err.statusCode).json({
      errorMessage: err._message,
    });
  }
  return res.status(500).json({
    error: err,
  });
};

export { handleError };
