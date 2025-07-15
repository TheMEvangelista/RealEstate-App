import express from "express";
import {
  bookVisit,
  cancelBooking,
  createUser,
  getAllBookings,
} from "../controller/userController.js";

const router = express.Router();

router.post("/register", createUser);
router.post("/bookVisit/:id", bookVisit);
router.get("/bookings", getAllBookings);
router.delete("/removeBooking/:id", cancelBooking);

export { router as userRoute };
