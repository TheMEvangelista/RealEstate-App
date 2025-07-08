import express from "express";
import {
  createResidency,
  getAllResidencies,
} from "../controller/residencyController.js";

const router = express.Router();

router.post("/create", createResidency);
router.get("/residencies", getAllResidencies);

export { router as residencyRoute };
