import mongoose, { Document, Types } from "mongoose";
export interface IHostel extends Document {
    schoolId: Types.ObjectId;
    name: string;
    type: "male" | "female" | "mixed";
    capacity: number;
    createdAt: Date;
    updatedAt: Date;
}
export declare const Hostel: mongoose.Model<IHostel, {}, {}, {}, mongoose.Document<unknown, {}, IHostel, {}, {}> & IHostel & Required<{
    _id: Types.ObjectId;
}> & {
    __v: number;
}, any>;
//# sourceMappingURL=hostel.model.d.ts.map