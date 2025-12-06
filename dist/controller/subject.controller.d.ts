import type { Request, Response } from "express";
export declare const createSubject: (req: Request, res: Response) => Promise<Response<any, Record<string, any>>>;
export declare const updateSubject: (req: Request, res: Response) => Promise<Response<any, Record<string, any>>>;
export declare const getOneSubject: (req: Request, res: Response) => Promise<Response<any, Record<string, any>> | undefined>;
export declare const getAllSubject: (req: Request, res: Response) => Promise<Response<any, Record<string, any>>>;
export declare const deleteSubject: (req: Request, res: Response) => Promise<Response<any, Record<string, any>>>;
//# sourceMappingURL=subject.controller.d.ts.map