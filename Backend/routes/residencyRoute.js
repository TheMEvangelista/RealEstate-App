import express from "express";
import { createResidency } from "../controller/residencyController.js";

const router = express.Router();

router.post("/create", createResidency);

export { router as residencyRoute };
