import mongoose, { Document, Types } from "mongoose";
export interface IFee extends Document {
    schoolId: Types.ObjectId;
    title: string;
    amount: number;
    academicYear?: string;
    classId?: Types.ObjectId;
    dueDate?: Date;
    createdAt: Date;
    updatedAt: Date;
}
export declare const Fee: mongoose.Model<IFee, {}, {}, {}, mongoose.Document<unknown, {}, IFee, {}, {}> & IFee & Required<{
    _id: Types.ObjectId;
}> & {
    __v: number;
}, any>;
//# sourceMappingURL=fee.model.d.ts.map