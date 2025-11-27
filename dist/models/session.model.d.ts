import mongoose, { Document, Types } from "mongoose";
export interface ISection extends Document {
    schoolId: Types.ObjectId;
    classId: Types.ObjectId;
    name: string;
    capacity?: number;
    createdAt: Date;
    updatedAt: Date;
}
export declare const Section: mongoose.Model<ISection, {}, {}, {}, mongoose.Document<unknown, {}, ISection, {}, {}> & ISection & Required<{
    _id: Types.ObjectId;
}> & {
    __v: number;
}, any>;
//# sourceMappingURL=session.model.d.ts.map