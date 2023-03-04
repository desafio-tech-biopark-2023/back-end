import { NextFunction, Request, response, Response } from "express";
import jwt from "jsonwebtoken";
import "dotenv/config";

const verifyTokenMiddleware = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  let token = req.headers.authorization;

  if (!token) {
    return res.status(401).json({
      message: "Authorization is missing",
    });
  }

  token = token.split(" ")[1];

  jwt.verify(token, process.env.SECRET_KEY as string, (error, decoded: any) => {
    if (error) {
      return res.status(401).json({
        message: "Invalid  token",
      });
    }

    req.user = {
      id: decoded.id,
    };

    next();
  });
};

export { verifyTokenMiddleware };
