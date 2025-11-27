import mongoose, { Document, Types } from "mongoose";
export interface IResult extends Document {
    schoolId: Types.ObjectId;
    examId: Types.ObjectId;
    studentId: Types.ObjectId;
    subjectId: Types.ObjectId;
    score: number;
    maxScore?: number;
    grade?: string;
    remarks?: string;
    createdAt: Date;
    updatedAt: Date;
}
export declare const Result: mongoose.Model<IResult, {}, {}, {}, mongoose.Document<unknown, {}, IResult, {}, {}> & IResult & Required<{
    _id: Types.ObjectId;
}> & {
    __v: number;
}, any>;
//# sourceMappingURL=result.model.d.ts.map