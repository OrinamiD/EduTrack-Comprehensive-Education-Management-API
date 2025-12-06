import {} from "express";
import { forgotPassword, forgottenOTPverify, handleResendOtp, login, passwordReset, registration, verifyOtp, } from "../services/auth.service.js";
export const userRegistration = async (req, res) => {
    try {
        const registeredUser = await registration(req.body);
        if (!registeredUser) {
            return res
                .status(400)
                .json({ success: false, message: "Can not register this user" });
        }
        return res.status(200).json({
            success: true,
            message: "registration successful",
            user: {
                role: registeredUser.role,
                school: registeredUser.schoolId,
                fullName: `${registeredUser.firstName} ${registeredUser.otherName} ${registeredUser.lastName}`,
                email: registeredUser.email,
                phone: registeredUser.phone,
                gender: registeredUser.gender,
                DOB: registeredUser.DOB,
                otpVerification: registeredUser.otpVerification,
                adminVerification: registeredUser.adminVerification,
                isActive: registeredUser.isOnline,
            },
        });
    }
    catch (error) {
        if (error.message === "Account already exist") {
            return res.status(400).json({
                success: false,
                message: error.message,
            });
        }
        else if (error.message === "Otp was not generated") {
            return res.status(400).json({
                success: false,
                message: error.message,
            });
        }
        else {
            return res.status(500).json({
                success: false,
                message: error.message,
            });
        }
    }
};
//verify otp
export const otpVerification = async (req, res) => {
    try {
        const { email, otp } = req.body;
        const users = await verifyOtp(email, otp);
        if (!users) {
            return res.status(400).json({
                success: false,
                message: "Can not verify otp",
            });
        }
        return res.status(200).json({
            success: true,
            message: "Account verified successfully. Login to your account",
        });
    }
    catch (error) {
        if (error.message === "User not found.") {
            return res.status(404).json({ success: false, message: error.message });
        }
        if (error.message === "No OTP set") {
            return res.status(400).json({ success: false, message: error.message });
        }
        if (error.message === "OTP expired") {
            return res.status(400).json({ success: false, message: error.message });
        }
        if (error.message === "account already verified") {
            return res.status(400).json({ success: false, message: error.message });
        }
        if (error.message === "Invalid OTP.") {
            return res.status(400).json({ success: false, message: error.message });
        }
        else {
            return res.status(500).json({ success: false, message: error.message });
        }
    }
};
//login
export const userLogin = async (req, res) => {
    try {
        const { email, phone, password, admissionNo } = req.body;
        const { user, accessToken, refreshToken } = await login(email, phone, password, admissionNo);
        return res
            .cookie("refreshToken", refreshToken, {
            httpOnly: true,
            secure: process.env.NODE_ENV === "production", // only https in prod
            sameSite: "strict", // prevents CSRF
            maxAge: 7 * 24 * 60 * 60 * 1000, // 7 days
        })
            .status(200)
            .json({
            success: true,
            message: "login successful",
            userInfo: {
                school: user.schoolId,
                role: user.role,
                id: user.id,
                Name: `${user.firstName} ${user.otherName} ${user.lastName}`,
                email: user.email,
                gender: user.gender,
                phoneVerification: user.phoneVerification,
                otpVerification: user.otpVerification,
                adminVerification: user.adminVerification,
                hasStaffId: user.hasStaffId,
                hasclassId: user.hasClassId,
                hasStudentId: user.hasStudentId,
                hasSchoolId: user.hasSchoolId,
                isOnline: user.isOnline,
                lastlogin: user.lastLogin,
                lastSeen: user.lastSeen,
            },
            accessToken,
        });
    }
    catch (error) {
        if (error.message === "User does not exist") {
            return res.status(404).json({
                success: false,
                message: error.message,
            });
        }
        if (error.message === "Account not verified. Please check your email for OTP.") {
            return res.status(400).json({
                success: false,
                message: error.message,
            });
        }
        if (error.message === "Complete your registration") {
            return res.status(400).json({
                success: false,
                message: error.message,
            });
        }
        if (error.message === "Wait while admin verify your details") {
            return res.status(400).json({
                success: false,
                message: error.message,
            });
        }
        if (error.message === "Your account has not been approved") {
            return res.status(400).json({
                success: false,
                message: error.message,
            });
        }
        if (error.message === "Incorrect password or Email") {
            return res.status(400).json({
                success: false,
                message: error.message,
            });
        }
        else {
            return res.status(500).json({
                success: false,
                message: error.message,
            });
        }
    }
};
// resend otp
export const resendOTP = async (req, res) => {
    try {
        const { email } = req.body;
        const sentOtp = await handleResendOtp(email);
        return res.status(200).json({
            success: true,
            message: "OTP sent successful. Check your email",
        });
    }
    catch (error) {
        if (error.message === "User does not exist") {
            return res.status(404).json({
                success: false,
                message: error.message,
            });
        }
        if (error.message === "You are already verified!. Login") {
            return res.status(400).json({
                success: false,
                message: error.message,
            });
        }
        if (error.message === "Check your email, its has not expired") {
            return res.status(400).json({
                success: false,
                message: error.message,
            });
        }
        else {
            return res.status(500).json({
                success: false,
                message: error.message,
            });
        }
    }
};
// forgot password
export const forgottenPassword = async (req, res) => {
    try {
        const { email, password } = req.body;
        const forgotPasswordData = await forgotPassword(email, password);
        if (!forgotPassword) {
            return res
                .status(400)
                .json({ success: false, message: "can not send otp" });
        }
        return res.status(400).json({
            success: true,
            message: "otp sent successful",
            forgotPasswordData,
        });
    }
    catch (error) {
        if (error.message === "user does found") {
            return res.status(404).json({
                success: false,
                message: error.message,
            });
        }
        else {
            return res.status(500).json({
                success: false,
                message: error.message,
            });
        }
    }
};
export const forgottenOTPVerification = async (req, res) => {
    try {
        const { email, otp } = req.body;
        const users = await forgottenOTPverify(email, otp);
        if (!users) {
            return res.status(400).json({
                success: false,
                message: "Can not verify otp",
            });
        }
        return res.status(200).json({
            success: true,
            message: "Account verified successfully. Login to your account",
        });
    }
    catch (error) {
        if (error.message === "User not found.") {
            return res.status(404).json({
                success: false,
                message: error.message,
            });
        }
        if (error.message === "No OTP set") {
            return res.status(400).json({
                success: false,
                message: error.message,
            });
        }
        if (error.message === "OTP expired") {
            return res.status(400).json({
                success: false,
                message: error.message,
            });
        }
        if (error.message === "Invalid OTP.") {
            return res.status(400).json({
                success: false,
                message: error.message,
            });
        }
        else {
            return res.status(500).json({
                success: false,
                message: error.message,
            });
        }
    }
};
// reset password
export const resetPassword = async (req, res) => {
    try {
        const { id } = req.params;
        const { password } = req.body;
        const { user, accessToken, refreshToken } = await passwordReset(id, password);
        return res
            .cookie("refreshToken", refreshToken, {
            httpOnly: true,
            secure: process.env.NODE_ENV === "production", // only https in prod
            sameSite: "strict", // prevents CSRF
            maxAge: 7 * 24 * 60 * 60 * 1000, // 7 days
        })
            .status(200)
            .json({
            sucess: true,
            message: "password reset successfully",
            user,
            accessToken,
        });
    }
    catch (error) {
        if (error.message === "User not found.") {
            return res.status(404).json({
                success: false,
                message: error.message,
            });
        }
        else {
            return res.status(500).json({
                success: false,
                message: error.message,
            });
        }
    }
};
//# sourceMappingURL=auth.controller.js.map