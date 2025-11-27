import mongoose, { Document, Types } from "mongoose";
export interface ISubject extends Document {
    schoolId: Types.ObjectId;
    name: string;
    code?: string;
    description?: string;
    registered: boolean;
    createdAt: Date;
    updatedAt: Date;
}
export declare const Subject: mongoose.Model<ISubject, {}, {}, {}, mongoose.Document<unknown, {}, ISubject, {}, {}> & ISubject & Required<{
    _id: Types.ObjectId;
}> & {
    __v: number;
}, any>;
//# sourceMappingURL=subject.model.d.ts.map