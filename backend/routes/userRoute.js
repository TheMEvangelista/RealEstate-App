import express from "express";
import {
  allBookings,
  bookVisit,
  createUser,
  favorites,
  removeBooking,
  toFavorite,
} from "../controller/userController.js";

const router = express.Router();

router.post("/register", createUser);
router.post("/bookVisit/:id", bookVisit);
router.get("/bookings", allBookings);
router.delete("/removeBooking", removeBooking);
router.post("/toFavorite/:rid", toFavorite);
router.get("/favorites", favorites);

export { router as userRoute };
