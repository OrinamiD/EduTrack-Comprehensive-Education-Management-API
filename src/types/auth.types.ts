// login

import type { Types } from "mongoose";

export interface ILogin extends Request {
  role: string;
  email: string;
  password: string;
  phone: string;
}

// access granting to login

export interface AuthRequest extends Request {
  role?: "tutor" | "parent" | "accountant" | "librarian";
}

// otp verification

export interface IVerifyOTP extends Request {
  email: string;
  otp: string;
}
// is superadmin
export interface AuthRequestSuperAdmin extends Request {
  role: "superadmin";
}

export interface AuthRequestAccess extends Request {
  role: "tutor" | "accountant" | "librarian" | "admin" | "superadmin";
}

export interface AuthRequestStaffReg extends Request {
  schoolId: Types.ObjectId;
  departmentsId: Types.ObjectId[];
  userId: Types.ObjectId;
  title: string;
  staff: string[];
  staffId: string;
  bio?: string;
  employmentDate?: Date;
}
