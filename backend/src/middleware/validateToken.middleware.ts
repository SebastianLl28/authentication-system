import { NextFunction, Request, Response } from "express";
import { verifyToken } from "../helper/jwt.helper";
import { findUserById } from "../service/auth.service";

export const jwtValidator = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const authorization = req.headers.authorization as string;
    if (!authorization) {
      return res.status(401).json({
        message: "token invalido",
      });
    }

    if (!authorization.startsWith("Bearer ")) {
      return res.status(401).json({ message: "token invalido" });
    }

    const token = authorization.replace("Bearer ", "").trim();

    const { id } = verifyToken(token);

    const findUser = await findUserById(id);

    if (!findUser) {
      return res.status(401).json({
        message: "token invalido",
      });
    }

    req.body.user = findUser;

    next();
  } catch (error) {
    res.status(401).json({
      message: "token invalido",
    });
  }
};
