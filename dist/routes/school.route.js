import express, { Router } from "express";
import { validateSchool } from "../middleware/school.middleware.js";
import { createSchool } from "../controller/school.controller.js";
const router = express.Router();
router.post("/create-school", validateSchool, createSchool);
export default router;
//# sourceMappingURL=school.route.js.map