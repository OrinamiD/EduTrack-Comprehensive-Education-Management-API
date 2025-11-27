import mongoose, { Document, Schema, Types } from "mongoose";

export interface IUser extends Document {
  role:
    | "student"
    | "driver"
    | "tutor"
    | "parent"
    | "admin"
    | "accountant"
    | "librarian"
    | "superadmin";
  schoolId: Types.ObjectId;
  departments: Types.ObjectId[];
  firstName: string;
  otherName: string;
  lastName: string;
  email: string;
  password: string;
  phone: string;
  gender: string;
  DOB: string;
  otp: string;
  image: string;
  address: {
    street: string;
    area: string;
    city: string;
    state: string;
    country: string;
  };
  otpVerification: boolean;
  otpExpiresAt: Date;
  phoneVerification: boolean;
  adminVerification: boolean;
  hasStaffId: boolean;
  hasClassId: boolean;
  hasStudentId: boolean;
  hasSchoolId: boolean;
  isOnline: boolean;
  lastLogin: Date | null;
  lastSeen: Date | null;
  meta?: Record<string, any>;
  createdAt: Date;
  updatedAt: Date;
}

const userSchema: Schema<IUser> = new mongoose.Schema(
  {
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
  },
  { timestamps: true }
);

const User = mongoose.model<IUser>("User", userSchema);

export default User;
