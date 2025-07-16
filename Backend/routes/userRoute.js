import express from "express";
import {
  bookVisit,
  cancelBooking,
  createUser,
  getAllBookings,
  toFav,
} from "../controller/userController.js";

const router = express.Router();

router.post("/register", createUser);
router.post("/bookVisit/:id", bookVisit);
router.get("/bookings", getAllBookings);
router.delete("/removeBooking/:id", cancelBooking);
router.post("/favorites/:rid", toFav);

export { router as userRoute };
