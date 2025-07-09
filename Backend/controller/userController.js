import asyncHandler from "express-async-handler";
import { prisma } from "../config/prismaConfig.js";

export const createUser = asyncHandler(async (req, res) => {
  console.log("Creating a user");

  let { email } = req.body;

  const userExists = await prisma.user.findUnique({ where: { email: email } });
  if (!userExists) {
    const user = await prisma.user.create({ data: req.body });
    res.send({
      message: "user registered sucessfully",
      user: user,
    });
    if (!user) {
      res.status(400);
      throw new Error(`User email ${email} not founded`);
    }
  } else {
    res
      .status(201)
      .send({ message: "User already registered", user: userExists });
  }
});
