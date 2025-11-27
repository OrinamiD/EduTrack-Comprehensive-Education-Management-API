import type { Request, Response, NextFunction } from "express";
import type { AuthRequestSuperAdmin } from "../types/auth.types.js";
export declare const validateSignup: (req: Request, res: Response, next: NextFunction) => Promise<Response<any, Record<string, any>> | undefined>;
export declare const validateSignin: (req: Request, res: Response, next: NextFunction) => Promise<Response<any, Record<string, any>> | undefined>;
export declare const validateResendOTP: (req: Request, res: Response, next: NextFunction) => Promise<Response<any, Record<string, any>> | undefined>;
export declare const validateForgotPassword: (req: Request, res: Response, next: NextFunction) => Promise<Response<any, Record<string, any>> | undefined>;
export declare const validateOtpVerification: (req: Request, res: Response, next: NextFunction) => Promise<Response<any, Record<string, any>> | undefined>;
export declare const validatePasswordReset: (req: Request<{
    id: string;
}>, res: Response, next: NextFunction) => Promise<void>;
export interface AuthRequest extends Request {
    user?: any;
}
export declare const auth: (req: AuthRequest, res: Response, next: NextFunction) => Promise<Response<any, Record<string, any>> | undefined>;
export declare const isSuperAdmin: (req: AuthRequestSuperAdmin, res: Response, next: NextFunction) => Promise<Response<any, Record<string, any>> | undefined>;
//# sourceMappingURL=auth.middleware.d.ts.map