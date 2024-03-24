import { User } from "@prisma/client";
import prisma from "../helper/prismaClient.helper";

export const addUser = async (user: Omit<User, "id">) => {
  const newUser = await prisma.user.create({
    data: user,
  });
  return newUser;
};

export const findUserByEmail = async (email: string): Promise<User | null> => {
  const user = await prisma.user.findFirst({
    where: {
      email,
    },
  });
  return user;
};

export const findUserById = async (id: number): Promise<User | null> =>
  await prisma.user.findFirst({
    where: {
      id: id,
    },
  });
