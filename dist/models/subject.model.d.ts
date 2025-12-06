import mongoose, { Document, Types } from "mongoose";
export interface ISubject extends Document {
    schoolId: Types.ObjectId;
    name: "maths" | "english" | "basic-science" | "basic-tech" | "CRS" | "social-studies" | "furtherMathematics" | "chemistry" | "physics" | "biology" | "agriculture" | "economics" | "commerce" | "goverment";
    classId: Types.ObjectId;
    userId: Types.ObjectId;
    createdBy: Types.ObjectId;
    code?: string;
    description?: string;
    deleted: boolean;
    deletedAt: Date;
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