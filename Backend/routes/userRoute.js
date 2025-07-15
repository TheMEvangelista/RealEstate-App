import express from "express";
import {
  bookVisit,
  createUser,
  getAllBookings,
} from "../controller/userController.js";

const router = express.Router();

router.post("/register", createUser);
router.post("/bookVisit/:id", bookVisit);
router.get("/bookings", getAllBookings);

export { router as userRoute };
