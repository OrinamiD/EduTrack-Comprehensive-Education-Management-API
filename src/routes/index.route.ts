import express, { Router } from "express";

const router: Router = express.Router();

import authRoute from "./auth.route.js";
import studentRoute from "./student.route.js";
import classRoute from "./class.route.js";
import staffRoute from "./staff.route.js";
import schoolRoute from "./school.route.js";

router.use("/school", schoolRoute);
router.use("/auth", authRoute);
router.use("/students", studentRoute);
router.use("/class", classRoute);
router.use("/staff", staffRoute);

export default router;
