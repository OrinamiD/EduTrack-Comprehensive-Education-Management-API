import mongoose, { Document, Types } from "mongoose";
export interface ISubmission extends Document {
    schoolId: Types.ObjectId;
    assignmentId: Types.ObjectId;
    studentId: Types.ObjectId;
    submittedAt: Date;
    files?: {
        url: string;
        name?: string;
    }[];
    score?: number;
    feedback?: string;
    plagiarismScore?: number;
    createdAt: Date;
    updatedAt: Date;
}
export declare const Submission: mongoose.Model<ISubmission, {}, {}, {}, mongoose.Document<unknown, {}, ISubmission, {}, {}> & ISubmission & Required<{
    _id: Types.ObjectId;
}> & {
    __v: number;
}, any>;
//# sourceMappingURL=submission.model.d.ts.map