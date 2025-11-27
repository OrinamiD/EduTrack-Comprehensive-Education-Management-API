import mongoose, { Document, Types } from "mongoose";
export interface IProctorSession extends Document {
    schoolId: Types.ObjectId;
    examId: Types.ObjectId;
    studentId: Types.ObjectId;
    startedAt: Date;
    endedAt?: Date;
    aiFlags: {
        faceMismatch?: number;
        multiplePeople?: number;
        phoneDetected?: number;
        tabSwitch?: number;
    };
    videoChunks?: {
        url: string;
        timestamp: Date;
    }[];
    status: "active" | "completed" | "violated";
    createdAt: Date;
    updatedAt: Date;
}
export declare const ProctorSession: mongoose.Model<IProctorSession, {}, {}, {}, mongoose.Document<unknown, {}, IProctorSession, {}, {}> & IProctorSession & Required<{
    _id: Types.ObjectId;
}> & {
    __v: number;
}, any>;
//# sourceMappingURL=proctoring.monitoring.model.d.ts.map