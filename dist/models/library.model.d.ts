import mongoose, { Document, Types } from "mongoose";
export interface IBook extends Document {
    schoolId: Types.ObjectId;
    title: string;
    author: string;
    isbn: string;
    category?: string;
    copies: number;
    availableCopies: number;
    createdAt: Date;
    updatedAt: Date;
}
export declare const Book: mongoose.Model<IBook, {}, {}, {}, mongoose.Document<unknown, {}, IBook, {}, {}> & IBook & Required<{
    _id: Types.ObjectId;
}> & {
    __v: number;
}, any>;
//# sourceMappingURL=library.model.d.ts.map