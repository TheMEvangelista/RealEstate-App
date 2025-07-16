import asyncHandler from "express-async-handler";
import { prisma } from "../config/prismaConfig.js";

// Create a new residency
// This function creates a new residency in the database using the provided data from the request body.
export const createResidency = asyncHandler(async (req, res) => {
  const {
    title,
    description,
    price,
    address,
    city,
    country,
    image,
    facilities,
    userEmail,
  } = req.body.data;

  console.log(req.body.data);

  try {
    const residency = await prisma.residency.create({
      data: {
        title,
        description,
        price,
        address,
        city,
        country,
        image,
        facilities,
        owner: {
          connect: {
            email: userEmail,
          },
        },
      },
    });

    res.send({
      message: "Residency created successfully",
      residency,
    });
  } catch (error) {
    if (error.code === "P2002") {
      throw new Error("Residency already exists");
    }
    throw new Error(error.message);
  }
});

// Get all residencies
// This function retrieves all residencies from the database and returns them in descending order based on their
export const getAllResidencies = asyncHandler(async (req, res) => {
  try {
    const residencies = await prisma.residency.findMany({
      orderBy: {
        createdAt: "desc",
      },
    });

    res.send(residencies);
  } catch (error) {
    throw new Error(error.message);
  }
});

//Get a single residency by ID
// This function retrieves a single residency based on the provided ID from the request parameters.
export const getResidency = asyncHandler(async (req, res) => {
  const { id } = req.params;

  try {
    const residency = await prisma.residency.findUnique({
      where: {
        id: id,
      },
    });

    if (!residency) {
      res.status(404).send({ message: "Residency not found" });
      return;
    }

    res.send(residency);
  } catch (error) {
    throw new Error(error.message);
  }
});
