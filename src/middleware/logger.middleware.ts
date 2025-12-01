import { Request, Response, NextFunction } from "express";

const logger = (req: Request, res: Response, next: NextFunction) => {
  console.log(
    `Time:[${new Date(Date.now()).toLocaleString()}] - path:[${
      req.path
    }] - method:[${req.method}]`
  );

  next();
};

export default logger;
