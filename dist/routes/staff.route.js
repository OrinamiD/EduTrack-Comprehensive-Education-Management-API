import express, { Router } from "express";
import { validateStaff } from "../middleware/staff.middleware.js";
import { staffRegistration } from "../controller/staff.controller.js";
const router = express.Router();
router.post("/staff-register", validateStaff, staffRegistration);
export default router;
//# sourceMappingURL=staff.route.js.map