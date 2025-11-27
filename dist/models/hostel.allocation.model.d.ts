import mongoose, { Document, Types } from "mongoose";
export interface IHostelAllocation extends Document {
    schoolId: Types.ObjectId;
    roomId: Types.ObjectId;
    studentId: Types.ObjectId;
    allocatedAt: Date;
    removedAt?: Date;
    createdAt: Date;
    updatedAt: Date;
}
export declare const HostelAllocation: mongoose.Model<IHostelAllocation, {}, {}, {}, mongoose.Document<unknown, {}, IHostelAllocation, {}, {}> & IHostelAllocation & Required<{
    _id: Types.ObjectId;
}> & {
    __v: number;
}, any>;
//# sourceMappingURL=hostel.allocation.model.d.ts.map