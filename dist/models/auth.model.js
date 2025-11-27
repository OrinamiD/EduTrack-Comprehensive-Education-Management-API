import mongoose, { Document, Schema, Types } from "mongoose";
const userSchema = new mongoose.Schema({
    role: {
        type: String,
        enum: [
            "student",
            "driver",
            "tutor",
            "parent",
            "admin",
            "accountant",
            "librarian",
            "superadmin",
        ],
        default: "student",
    },
    schoolId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "School",
    },
    departments: [
        {
            type: Schema.Types.ObjectId,
            ref: "Department",
        },
    ],
    firstName: {
        type: String,
        required: true,
    },
    otherName: {
        type: String,
        required: true,
    },
    lastName: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
    phone: {
        type: String,
        required: true,
    },
    gender: {
        type: String,
        required: true,
    },
    DOB: {
        type: String,
        required: true,
    },
    otp: {
        type: String,
        required: true,
    },
    image: {
        type: String,
    },
    address: {
        street: {
            type: String,
            default: "20",
        },
        area: {
            type: String,
        },
        city: {
            type: String,
            default: "benin",
        },
        state: {
            type: String,
            default: "edo",
        },
        country: {
            type: String,
            default: "Nigeria",
        },
    },
    otpVerification: {
        type: Boolean,
        default: false,
    },
    otpExpiresAt: {
        type: Date,
    },
    phoneVerification: {
        type: Boolean,
        default: false,
    },
    adminVerification: {
        type: Boolean,
        default: false,
    },
    hasStaffId: {
        type: Boolean,
        default: false,
    },
    hasClassId: {
        type: Boolean,
        default: false,
    },
    hasStudentId: {
        type: Boolean,
        default: false,
    },
    hasSchoolId: {
        type: Boolean,
        default: false,
    },
    isOnline: {
        type: Boolean,
        default: false,
    },
    lastLogin: {
        type: Date,
        default: null,
    },
    lastSeen: {
        type: Date,
        default: null,
    },
    meta: {
        type: Schema.Types.Mixed,
    },
}, { timestamps: true });
const User = mongoose.model("User", userSchema);
export default User;
//# sourceMappingURL=auth.model.js.map