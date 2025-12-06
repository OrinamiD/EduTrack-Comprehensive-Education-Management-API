import mongoose, { Document, Types } from "mongoose";
export interface ISession extends Document {
    schoolId: Types.ObjectId;
    classId: Types.ObjectId;
    name: string;
    capacity?: number;
    createdAt: Date;
    updatedAt: Date;
}
export declare const Session: mongoose.Model<ISession, {}, {}, {}, mongoose.Document<unknown, {}, ISession, {}, {}> & ISession & Required<{
    _id: Types.ObjectId;
}> & {
    __v: number;
}, any>;
//# sourceMappingURL=session.model.d.ts.map