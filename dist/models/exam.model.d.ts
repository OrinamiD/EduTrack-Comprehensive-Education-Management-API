import mongoose, { Document, Types } from "mongoose";
export interface IExam extends Document {
    schoolId: Types.ObjectId;
    title: string;
    academicYear: string;
    term?: string;
    startDate?: Date;
    endDate?: Date;
    createdBy?: Types.ObjectId;
    meta?: Record<string, any>;
    createdAt: Date;
    updatedAt: Date;
}
export declare const Exam: mongoose.Model<IExam, {}, {}, {}, mongoose.Document<unknown, {}, IExam, {}, {}> & IExam & Required<{
    _id: Types.ObjectId;
}> & {
    __v: number;
}, any>;
//# sourceMappingURL=exam.model.d.ts.map