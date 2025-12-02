/**
 * ? Higer Order Function , CallBack function and Closure function
 * * -> I a function get as a argument a function and return a function. this function call Higher Order function
 * * -> Higher order function's argument function is call-back function
 * * -> Higher order function's return function is clusor function that remember other function variable
 *
 */

import { NextFunction, Request, Response } from "express";
import jwt, { JwtPayload } from "jsonwebtoken";
import config from "../config";

const auth = (...roles: string[]) => {
  return async (req: Request, res: Response, next: NextFunction) => {
    try {
      const token = req.headers.authorization;

      if (!token) {
        return res.status(500).json({ message: "You are not allowed" });
      }

      const decoded = jwt.verify(
        token,
        config.jwtPrivateKey as string
      ) as JwtPayload;

      console.log(decoded);

      req.user = decoded;

      if (roles.length && !roles.includes(decoded.role)) {
        return res.status(401).json({
          messaage: "You are unauthorized",
        });
      }

      next();
    } catch (error: any) {
      res.status(500).json({
        success: false,
        message: error.message,
      });
    }
  };
};

export default auth;
