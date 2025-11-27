import mongoose, { Document, Types } from "mongoose";
export interface IClass extends Document {
    schoolId: Types.ObjectId;
    departmentsId: Types.ObjectId[];
    userId: Types.ObjectId;
    className: "JSS1" | "JSS2" | "JSS3" | "SS1" | "SS2" | "SS3";
    code?: string;
    description?: string;
    createdAt: Date;
    updatedAt: Date;
}
export declare const Class: mongoose.Model<IClass, {}, {}, {}, mongoose.Document<unknown, {}, IClass, {}, {}> & IClass & Required<{
    _id: Types.ObjectId;
}> & {
    __v: number;
}, any>;
//# sourceMappingURL=class.model.d.ts.map