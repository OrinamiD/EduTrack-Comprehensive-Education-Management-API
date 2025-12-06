import { type Request, type Response } from "express";
export declare const userRegistration: (req: Request, res: Response) => Promise<Response<any, Record<string, any>>>;
export declare const otpVerification: (req: Request, res: Response) => Promise<Response<any, Record<string, any>>>;
export declare const userLogin: (req: Request, res: Response) => Promise<Response<any, Record<string, any>>>;
export declare const resendOTP: (req: Request, res: Response) => Promise<Response<any, Record<string, any>>>;
export declare const forgottenPassword: (req: Request, res: Response) => Promise<Response<any, Record<string, any>>>;
export declare const forgottenOTPVerification: (req: Request, res: Response) => Promise<Response<any, Record<string, any>>>;
export declare const resetPassword: (req: Request<{
    id: string;
}>, res: Response) => Promise<Response<any, Record<string, any>>>;
//# sourceMappingURL=auth.controller.d.ts.map