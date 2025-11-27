import mongoose, { Document, Types } from "mongoose";
export interface IUser extends Document {
    role: "student" | "driver" | "tutor" | "parent" | "admin" | "accountant" | "librarian" | "superadmin";
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
declare const User: mongoose.Model<IUser, {}, {}, {}, mongoose.Document<unknown, {}, IUser, {}, {}> & IUser & Required<{
    _id: Types.ObjectId;
}> & {
    __v: number;
}, any>;
export default User;
//# sourceMappingURL=auth.model.d.ts.map