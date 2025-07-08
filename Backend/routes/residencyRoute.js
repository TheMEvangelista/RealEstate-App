import express from "express";
import {
  createResidency,
  getAllResidencies,
  getResidency,
} from "../controller/residencyController.js";

const router = express.Router();

router.post("/create", createResidency);
router.get("/residencies", getAllResidencies);
router.get("/:id", getResidency);

export { router as residencyRoute };
