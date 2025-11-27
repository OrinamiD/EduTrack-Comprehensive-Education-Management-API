import { type IStaff } from "../models/staff.model.js";
export declare const staffReg: (data: IStaff, name: string[]) => Promise<import("mongoose").Document<unknown, {}, IStaff, {}, {}> & IStaff & Required<{
    _id: import("mongoose").Types.ObjectId;
}> & {
    __v: number;
}>;
//# sourceMappingURL=staff.service.d.ts.map