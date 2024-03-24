import { User } from "@prisma/client";
import jwt from "jsonwebtoken";
import "dotenv/config";

interface IUser extends Omit<User, "password"> {}

interface IToken extends IUser {
  iat: number;
  exp: number;
}

export const createToken = (user: IUser): string =>
  jwt.sign(user, process.env.JWT_SECRET as string, { expiresIn: "8h" });

export const verifyToken = (token: string): IToken =>
  jwt.verify(token, process.env.JWT_SECRET as string) as IToken;
