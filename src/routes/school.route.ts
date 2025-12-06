import express, { Router } from "express";
import { validateSchool } from "../middleware/school.middleware.js";
import { createSchool } from "../controller/school.controller.js";
import { auth } from "../middleware/auth.middleware.js";

const router: Router = express.Router();

router.post("/create-school", auth, validateSchool, createSchool);

export default router;
