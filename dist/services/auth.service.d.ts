import type { IUser } from "../models/auth.model.js";
export declare const registration: (data: IUser) => Promise<import("mongoose").Document<unknown, {}, IUser, {}, {}> & IUser & Required<{
    _id: import("mongoose").Types.ObjectId;
}> & {
    __v: number;
}>;
export declare const verifyOtp: (email: string, otp: string) => Promise<import("mongoose").Document<unknown, {}, IUser, {}, {}> & IUser & Required<{
    _id: import("mongoose").Types.ObjectId;
}> & {
    __v: number;
}>;
export declare const login: (email: string, phone: string, password: string, admissionNo: string) => Promise<{
    user: import("mongoose").Document<unknown, {}, IUser, {}, {}> & IUser & Required<{
        _id: import("mongoose").Types.ObjectId;
    }> & {
        __v: number;
    };
    accessToken: string;
    refreshToken: string;
    message: string;
}>;
export declare const handleResendOtp: (email: string) => Promise<void>;
export declare const forgotPassword: (email: string, password: string) => Promise<{
    email: string;
    otp: string;
    fullName: string;
}>;
export declare const forgottenOTPverify: (email: string, otp: string) => Promise<import("mongoose").Document<unknown, {}, IUser, {}, {}> & IUser & Required<{
    _id: import("mongoose").Types.ObjectId;
}> & {
    __v: number;
}>;
export declare const passwordReset: (id: string, password: string) => Promise<{
    user: import("mongoose").Document<unknown, {}, IUser, {}, {}> & IUser & Required<{
        _id: import("mongoose").Types.ObjectId;
    }> & {
        __v: number;
    };
    accessToken: string;
    refreshToken: string;
    message: string;
}>;
//# sourceMappingURL=auth.service.d.ts.map