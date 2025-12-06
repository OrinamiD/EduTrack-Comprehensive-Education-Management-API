import express, { Router } from "express";
import { auth } from "../middleware/auth.middleware.js";
import { createClass, selectYourClass, } from "../controller/class.controller.js";
const router = express.Router();
router.use("/create-class", auth, createClass);
router.post("/register-class", selectYourClass);
export default router;
//# sourceMappingURL=class.route.js.map