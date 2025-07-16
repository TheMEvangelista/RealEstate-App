import express from "express";
import {
  bookVisit,
  cancelBooking,
  createUser,
  favorites,
  getAllBookings,
  toFavorite,
} from "../controller/userController.js";

const router = express.Router();

router.post("/register", createUser);
router.post("/bookVisit/:id", bookVisit);
router.get("/bookings", getAllBookings);
router.delete("/removeBooking/:id", cancelBooking);
router.post("/toFavorite/:rid", toFavorite);
router.get("/favorites", favorites);

export { router as userRoute };
