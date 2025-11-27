import type { Request, Response } from "express";
export declare const createClass: (req: Request<{
    userId: string;
}>, res: Response) => Promise<Response<any, Record<string, any>>>;
export declare const selectYourClass: (req: Request, res: Response) => Promise<Response<any, Record<string, any>> | undefined>;
//# sourceMappingURL=class.controller.d.ts.map