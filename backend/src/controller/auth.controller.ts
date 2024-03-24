import { Request, Response } from "express";
import { postLoginBody, postUserBody } from "../schema/auth.schema";
import { addUser, findUserByEmail } from "../service/auth.service";
import { createToken } from "../helper/jwt.helper";

export const index = (req: Request, res: Response) => {
  res.json({ message: "Hello world" });
};

export const postUser = async (
  req: Request<unknown, unknown, postUserBody>,
  res: Response
) => {
  try {
    const { email } = req.body;
    const findUser = await findUserByEmail(email);
    if (findUser) {
      return res.status(400).json({ message: "user already exists" });
    }
    await addUser(req.body);
    res.status(201).json({ message: "user created" });
  } catch (error) {}
};

export const postLogin = async (
  req: Request<unknown, unknown, postLoginBody>,
  res: Response
) => {
  try {
    const { email, password } = req.body;

    const findUser = await findUserByEmail(email);

    if (!findUser) {
      return res
        .status(404)
        .json({ message: "the email or password is incorrect" });
    }

    if (findUser.password !== password) {
      return res
        .status(404)
        .json({ message: "the email or password is incorrect" });
    }

    const token = createToken({
      id: findUser.id,
      email: findUser.email,
      name: findUser.name,
      edad: findUser.edad,
    });

    res.status(200).json({ message: "login success", token });
  } catch (error) {}
};

export const getVerifyToken = (req: Request, res: Response) => {
  try {
    res.status(200).json({ message: "token valid" });
  } catch (error) {
    res.status(500).json({ message: "error" });
  }
};

// export const getProfile = (req: Request, res: Response) => {
//   try {
//     res.status(200).json(req.user);
//   } catch (error) {
//     res.status(500).json({ message: "error" });
//   }
// }
