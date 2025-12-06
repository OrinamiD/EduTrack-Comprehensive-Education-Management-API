import jwt, {} from "jsonwebtoken";
import joi from "joi";
import User from "../models/auth.model.js";
// validate signup
export const validateSignup = async (req, res, next) => {
    const { schoolId, role, firstName, otherName, lastName, email, password, gender, phone, DOB, } = req.body;
    const errors = [];
    if (!schoolId) {
        errors.push("School Id is required");
    }
    if (!role) {
        errors.push("role is required");
    }
    if (!firstName) {
        errors.push("firstName is required");
    }
    if (!otherName) {
        errors.push("otherName is required");
    }
    if (!lastName) {
        errors.push("lastName is required");
    }
    if (!email) {
        errors.push("email is required");
    }
    if (!password) {
        errors.push("password is required");
    }
    if (!gender) {
        errors.push("gender is required");
    }
    if (!phone) {
        errors.push("phone is required");
    }
    if (!DOB) {
        errors.push("date of birth is required");
    }
    if (errors.length > 0) {
        return res.status(200).json({ message: errors });
    }
    const signupSchema = joi.object({
        firstName: joi.string().min(5).max(40).trim().required(),
        otherName: joi.string().min(5).max(40).trim().required(),
        lastName: joi.string().min(5).max(40).trim().required(),
        email: joi
            .string()
            .min(4)
            .max(50)
            .trim()
            .required()
            .lowercase()
            .pattern(new RegExp("^[^@]+@[^@]+.[^@]+$"))
            .messages({
            "string.pattern.base": "Please enter a valid email address (e.g., name@example.com).",
            "string.email": "Please enter a valid email address.",
        }),
        password: joi
            .string()
            .min(6)
            .max(23)
            .trim()
            .required()
            .pattern(new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[@$!%*?&])[A-Za-z\\d@$!%*?&]{8,}$"))
            .messages({
            "string.pattern.base": "Password must be at least 8 characters long and include uppercase, lowercase, number, and special character.",
        }),
        gender: joi.string().required().trim().required(),
        phone: joi.string().required().trim(),
        DOB: joi.date().required(),
    });
    const { error } = signupSchema.validate({
        firstName,
        otherName,
        lastName,
        email,
        password,
        gender,
        phone,
        DOB,
    });
    if (error) {
        return res.status(200).json({ message: error });
    }
    next();
};
// validate login
export const validateSignin = async (req, res, next) => {
    const { email, phone, password } = req.body;
    const errors = [];
    if (!email && !phone) {
        errors.push("email or phone  is required");
    }
    if (!password) {
        errors.push("password is required");
    }
    if (errors.length > 0) {
        return res.status(200).json({ message: errors });
    }
    next();
};
// resend otp
export const validateResendOTP = async (req, res, next) => {
    const { email } = req.body;
    const errors = [];
    if (!email) {
        errors.push("email is required");
    }
    if (errors.length > 0) {
        return res.status(403).json({
            success: false,
            message: errors,
        });
    }
    next();
};
// forgot password
export const validateForgotPassword = async (req, res, next) => {
    const { email, password } = req.body;
    const errors = [];
    if (!email && !password) {
        errors.push("email or password is required");
    }
    if (errors.length > 0) {
        return res.status(403).json({
            success: false,
            message: errors,
        });
    }
};
//verifyOTP
export const validateOtpVerification = async (req, res, next) => {
    const { email, otp } = req.body;
    const errors = [];
    if (!email) {
        errors.push("email is required");
    }
    if (!otp) {
        errors.push("otp is required");
    }
    if (errors.length > 0) {
        return res.status(403).json({
            success: false,
            message: errors,
        });
    }
    next();
};
export const validatePasswordReset = async (req, res, next) => {
    const { password } = req.body;
    const errors = [];
    if (!password) {
        throw new Error("password is required");
    }
    next();
};
// validate token
export const auth = async (req, res, next) => {
    try {
        const token = req.header("Authorization");
        if (!token) {
            return res
                .status(401)
                .json({ success: false, message: "Invalid response" });
        }
        const splitToken = token.split(" ");
        const realToken = splitToken[1];
        if (!realToken) {
            return res
                .status(401)
                .json({ success: false, message: "Incorrect credentials" });
        }
        const decoded = jwt.verify(realToken, process.env.ACCESS_TOKEN);
        if (!decoded) {
            return res.status(401).json({ success: false, Message: "Forbidden!" });
        }
        // req.role = decoded.role;
        req.user = await User.findById(decoded.id);
        const user = await User.findById(decoded?.id);
        if (!req.user) {
            return res
                .status(401)
                .json({ success: false, message: "user not found" });
        }
        req.user = user;
        next();
    }
    catch (error) {
        console.error(error.message);
        return res.status(401).json({ success: false, message: error.message });
    }
};
// is superAdmin
export const isSuperAdmin = async (req, res, next) => {
    const { role } = req;
    if (!role || role != "superadmin") {
        return res.status(401).json({ success: false, message: "NOT allowed" });
    }
};
//# sourceMappingURL=auth.middleware.js.map