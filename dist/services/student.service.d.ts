import { type IStudent } from "../models/student.model.js";
export declare const registerStudentsInfo: (data: IStudent, className: string) => Promise<import("mongoose").Document<unknown, {}, IStudent, {}, {}> & IStudent & Required<{
    _id: import("mongoose").Types.ObjectId;
}> & {
    __v: number;
}>;
//# sourceMappingURL=student.service.d.ts.map