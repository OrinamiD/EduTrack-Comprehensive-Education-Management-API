import type { Types } from "mongoose";
export interface CreateAssignment extends Request {
    schoolId: Types.ObjectId;
    classId: Types.ObjectId;
    sessionId: Types.ObjectId;
    subjectId: Types.ObjectId;
    assignedBy: Types.ObjectId;
    title: Types.ObjectId;
    staffId: string;
}
//# sourceMappingURL=assigment.types.d.ts.map