import mongoose, { Document, Types } from "mongoose";
export interface IBorrow extends Document {
    schoolId: Types.ObjectId;
    bookId: Types.ObjectId;
    studentId: Types.ObjectId;
    borrowedAt: Date;
    dueDate: Date;
    returnedAt?: Date;
    createdAt: Date;
    updatedAt: Date;
}
export declare const Borrow: mongoose.Model<IBorrow, {}, {}, {}, mongoose.Document<unknown, {}, IBorrow, {}, {}> & IBorrow & Required<{
    _id: Types.ObjectId;
}> & {
    __v: number;
}, any>;
//# sourceMappingURL=library.borrow.model.d.ts.map