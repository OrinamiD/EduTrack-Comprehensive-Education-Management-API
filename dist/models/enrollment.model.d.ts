import mongoose, { Document, Types } from "mongoose";
export interface IEnrollment extends Document {
    schoolId: Types.ObjectId;
    studentId: Types.ObjectId;
    classId: Types.ObjectId;
    sectionId?: Types.ObjectId;
    academicYear: string;
    status: "enrolled" | "promoted" | "left" | "graduated";
    enrolledAt: Date;
    createdAt: Date;
    updatedAt: Date;
}
export declare const Enrollment: mongoose.Model<IEnrollment, {}, {}, {}, mongoose.Document<unknown, {}, IEnrollment, {}, {}> & IEnrollment & Required<{
    _id: Types.ObjectId;
}> & {
    __v: number;
}, any>;
//# sourceMappingURL=enrollment.model.d.ts.map