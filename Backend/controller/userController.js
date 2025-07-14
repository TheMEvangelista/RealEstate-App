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

export const bookVisit = asyncHandler(async (req, res) => {
  const { email, date } = req.body;
  const { id } = req.params;

  try {
    const alreadyBooked = await prisma.user.findUnique({
      where: { email },
      select: { bookVisits: true },
    });

    if (alreadyBooked.bookedVisits.some((visit) => visit.id === id)) {
      res.status(400).json({ message: "This residency already booked by you" });
    } else {
      await prisma.user.update({
        where: { email: email },
        data: {
          bookedVisits: { push: { id: id } },
        },
      });
      res.send("Your visit is booked successfully");
    }
  } catch (error) {
    throw new Error(error.message);
  }
});
