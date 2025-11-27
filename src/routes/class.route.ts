import express, { Router } from "express";
import { isSuperAdmin } from "../middleware/auth.middleware.js";
import {
  createClass,
  selectYourClass,
} from "../controller/class.controller.js";

const router: Router = express.Router();

router.use("/create-class", createClass);

router.post("/register-class", selectYourClass);

export default router;
