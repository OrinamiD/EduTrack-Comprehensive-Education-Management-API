import { type IAssignment } from "../models/assignment.model.js";
import type { CreateAssignment } from "../types/assigment.types.js";
export declare const assignmentCreation: (data: CreateAssignment) => Promise<import("mongoose").Document<unknown, {}, IAssignment, {}, {}> & IAssignment & Required<{
    _id: import("mongoose").Types.ObjectId;
}> & {
    __v: number;
}>;
//# sourceMappingURL=assignment.service.d.ts.map