import type { Types } from "mongoose";
export interface UpdateSubject extends Request {
    name: string;
    code: string;
    description: string;
    classId: Types.ObjectId;
    userId: Types.ObjectId;
    createdBy: Types.ObjectId;
    schoolId: Types.ObjectId;
    id: string;
}
export interface GetSubject extends Request {
    code: string;
    name: string;
    subjectId: string;
    userId: string;
}
//# sourceMappingURL=subject.types.d.ts.map