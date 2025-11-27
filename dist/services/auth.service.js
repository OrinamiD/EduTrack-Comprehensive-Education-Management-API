import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { registrationEmail } from "../emails/registration.email.js";
import User from "../models/auth.model.js";
import { generateOTP, hashPassword } from "../utils/password.utils.js";
import { Student } from "../models/student.model.js";
import { resendOtpEmail } from "../emails/resend.otp.email.js";
import { forgotPasswordEmail } from "../emails/forgotten.password.email.js";
// registration
export const registration = async (data) => {
    const { email, phone, password, firstName, otherName, lastName } = data;
    const user = await User.findOne({
        $or: [{ email }, { phone }],
    }).populate("school");
    if (user) {
        throw new Error("Account already exist");
    }
    const passwordHashed = await hashPassword(password);
    const otp = generateOTP();
    if (!otp) {
        throw new Error("Otp was not generated");
    }
    const newUser = new User({
        ...data,
        password: passwordHashed,
        otp,
        otpExpiresAt: new Date(Date.now() + 5 * 60 * 1000),
    });
    const result = await newUser.save();
    result.password = undefined;
    // send email
    await registrationEmail(email, firstName, otherName, lastName, otp);
    return result;
};
//verify otp
export const verifyOtp = async (email, otp) => {
    const user = await User.findOne({ email });
    if (!user) {
        throw new Error("User not found.");
    }
    if (!user.otp || !user.otpExpiresAt) {
        throw new Error("No OTP set");
    }
    if (user.otpExpiresAt < new Date()) {
        throw new Error("OTP expired");
    }
    if (user.otpVerification === true) {
        throw new Error("account already verified");
    }
    if (user.otp !== otp) {
        throw new Error("Invalid OTP.");
    }
    user.otpVerification = true;
    await user.save();
    return user;
};
//login
export const login = async (email, phone, password, admissionNo) => {
    //check if the user is a student
    const user = await User.findOne({
        $or: [{ email }, { phone }],
    });
    if (!user) {
        throw new Error("User does not exist");
    }
    if (user.role === "superadmin") {
        user.adminVerification = true;
    }
    if (user.otpVerification === false) {
        throw new Error("Account not verified. Please check your email for OTP.");
    }
    //check if the students has complete his registration on the student model
    if (user.role === "student") {
        const student = await Student.findOne({ admissionNo });
        if (!student) {
            throw new Error("Complete your registration");
        }
    }
    if (user.role === "accountant" ||
        user.role === "parent" ||
        user.role === "tutor" ||
        (user.role === "librarian" && user.adminVerification === false)) {
        throw new Error("Wait while admin verify your details");
    }
    if (user.adminVerification === false) {
        throw new Error("Your account has not been approved");
    }
    const verifyPassword = await bcrypt.compare(password, user.password);
    if (!verifyPassword) {
        throw new Error("Incorrect password or Email");
    }
    // Update login date
    user.lastLogin = new Date();
    await user.save();
    user.password = undefined;
    // access token
    const accessToken = jwt.sign({ role: user.role, id: user._id }, `${process.env.ACCESS_TOKEN}`, {
        expiresIn: "5m",
    });
    // refresh token
    const refreshToken = jwt.sign({ role: user.role, id: user._id }, `${process.env.REFRESH_TOKEN}`, { expiresIn: "7d" });
    return {
        user: user,
        accessToken,
        refreshToken,
        message: "successful",
    };
};
//resend otp
export const handleResendOtp = async (email) => {
    const user = await User.findOne({ email });
    if (!user) {
        throw new Error("user does not exist");
    }
    if (user.otpVerification === true) {
        throw new Error("You are already verified!. Login");
    }
    if (user.otpExpiresAt > new Date()) {
        throw new Error("Check your email, its has not expired");
    }
    const newOtp = generateOTP();
    user.otp = newOtp;
    user.otpExpiresAt = new Date(Date.now() + 5 * 60 * 1000);
    await user.save();
    await resendOtpEmail(email, newOtp);
    // send otp
};
// forgot password
export const forgotPassword = async (email, password) => {
    const user = await User.findOne({
        $or: [{ email }, { password }],
    });
    if (!user) {
        throw new Error("user does found");
    }
    const firstName = user.firstName;
    const lastName = user.lastName;
    const fullName = `${firstName}${lastName}`;
    const newOtp = generateOTP();
    const forgotPasswordData = {
        email: email,
        otp: newOtp,
        fullName: fullName,
    };
    // send email
    await forgotPasswordEmail(email, firstName, lastName, newOtp);
    return forgotPasswordData;
};
// FOTGOTTEN PASSWORD verify otp
export const forgottenOTPverify = async (email, otp) => {
    const user = await User.findOne({ email });
    if (!user) {
        throw new Error("User not found.");
    }
    if (!user.otp || !user.otpExpiresAt) {
        throw new Error("No OTP set");
    }
    if (user.otpExpiresAt < new Date()) {
        throw new Error("OTP expired");
    }
    if (user.otp !== otp) {
        throw new Error("Invalid OTP.");
    }
    user.otpVerification = true;
    await user.save();
    return user;
};
// reset password
export const passwordReset = async (id, password) => {
    const user = await User.findById(id);
    if (!user) {
        throw new Error("user not found");
    }
    const hashedPassword = await hashPassword(password);
    user.password = hashedPassword;
    user.password = undefined;
    // access token
    const accessToken = jwt.sign({ role: user.role, id: user._id }, `${process.env.ACCESS_TOKEN}`, {
        expiresIn: "5m",
    });
    // refresh token
    const refreshToken = jwt.sign({ role: user.role, id: user._id }, `${process.env.REFRESH_TOKEN}`, { expiresIn: "7d" });
    await user.save();
    return {
        user: user,
        accessToken,
        refreshToken,
        message: "successful",
    };
};
//# sourceMappingURL=auth.service.js.map