import express, { Router } from "express";
import {
  validateForgotPassword,
  validateOtpVerification,
  validatePasswordReset,
  validateResendOTP,
  validateSignin,
  validateSignup,
} from "../middleware/auth.middleware.js";
import {
  forgottenOTPVerification,
  forgottenPassword,
  otpVerification,
  resendOTP,
  resetPassword,
  userLogin,
  userRegistration,
} from "../controller/auth.controller.js";

const router: Router = express.Router();

router.post("/sign-up", validateSignup, userRegistration);

router.post("/verify-otp", validateOtpVerification, otpVerification);

router.post("/login", validateSignin, userLogin);

router.post("/resend-otp", validateResendOTP, resendOTP);

router.post("/forgotten-password", validateForgotPassword, forgottenPassword);

router.post(
  "/forgot-password-otp",
  validateOtpVerification,
  forgottenOTPVerification
);

router.post("/reset-password", validatePasswordReset, resetPassword);

export default router;
