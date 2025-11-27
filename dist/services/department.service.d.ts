import type { IDepartment } from "../models/department.model.js";
export declare const departmentCreation: (data: IDepartment, userId: String) => Promise<import("mongoose").Document<unknown, {}, IDepartment, {}, {}> & IDepartment & Required<{
    _id: import("mongoose").Types.ObjectId;
}> & {
    __v: number;
}>;
//# sourceMappingURL=department.service.d.ts.map