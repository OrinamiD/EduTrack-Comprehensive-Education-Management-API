import express, { Router } from "express";
import { studentRegistration } from "../controller/student.controller.js";
import { validateStudent } from "../middleware/student.middleware.js";
const router = express.Router();
router.post("/student-registration", validateStudent, studentRegistration);
export default router;
//# sourceMappingURL=student.route.js.map