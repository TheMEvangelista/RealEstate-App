import asyncHandler from "express-async-handler";
import { prisma } from "../config/prismaConfig.js";

export const createUser = asyncHandler(async (request, response) => {
  console.log("Creating a user");

  let { email } = request.body;

  const userExists = await prisma.user.findUnique({ where: { email: email } });
  if (!userExists) {
    const user = await prisma.user.create({ data: request.body });
    response.send({
      message: "user registered sucessfully",
      user: user,
    });
    if (!user) {
      response.status(400);
      throw new Error(`User email ${email} not founded`);
    }
  } else {
    response
      .status(201)
      .send({ message: "User already registered", user: userExists });
  }
});

export const bookVisit = asyncHandler(async (request, response) => {
  const { email, date } = request.body;
  const { id } = request.params;

  try {
    const alreadyBooked = await prisma.user.findUnique({
      where: { email },
      select: { bookedVisits: true },
    });

    if (alreadyBooked.bookedVisits.some((visit) => visit.id === id)) {
      response
        .status(400)
        .json({ message: "This residency already booked by you" });
    } else {
      await prisma.user.update({
        where: { email: email },
        data: {
          bookedVisits: { push: { id, date } },
        },
      });
      response.send("Your visit is booked successfully");
    }
  } catch (error) {
    throw new Error(error.message);
  }
});

export const allBookings = asyncHandler(async (request, response) => {
  const { email } = request.body;

  try {
    const bookings = await prisma.user.findUnique({
      where: { email },
      select: { bookedVisits: true },
    });

    response.status(200).send(bookings);
  } catch (error) {
    throw new Error(error.message);
  }
});

export const removeBooking = asyncHandler(async (request, response) => {
  const { email } = request.body;
  const { id } = request.params;

  try {
    const user = await prisma.user.findUnique({
      where: { email },
      select: { bookedVisits: true },
    });

    const index = user.bookedVisits.findIndex((visit) => visit.id === id);
    if (index !== -1) {
      response.status(404).json({ message: "Booking not founded" });
    } else {
      user.bookedVisits.splice(index, 1);
      await prisma.user.update({
        where: { email },
        data: {
          bookedVisits: user.bookedVisits,
        },
      });

      response.send("Booking removed sucessfully");
    }
  } catch (error) {
    throw new Error(error.message);
  }
});

export const toFavorite = asyncHandler(async (request, response) => {
  const { email } = request.body;
  const { rid } = request.params;

  const user = await prisma.user.findUnique({
    where: { email },
  });

  if (user.favResidenciesID.include(rid)) {
    const updateUser = await prisma.user.update({
      where: { email },
      data: {
        favResidenciesID: {
          set: user.favResidenciesID.filter((id) => id !== rid),
        },
      },
    });

    response.send({ message: "Removed from favourites", user: updateUser });
  } else {
    const updateUser = await prisma.user.update({
      where: { email },
      data: {
        favResidenciesID: {
          push: rid,
        },
      },
    });

    response.send({ message: "Updated favourites", user: updateUser });
  }
});

export const favorites = asyncHandler(async (request, response) => {
  const { email } = request.body;

  try {
    const favResidency = await prisma.user.findUnique({
      where: { email },
      select: { favResidenciesID: true },
    });

    response.status(200).send(favResidency);
  } catch (error) {
    throw new Error(error.message);
  }
});
