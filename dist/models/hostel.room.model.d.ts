import mongoose, { Document, Types } from "mongoose";
export interface IHostelRoom extends Document {
    schoolId: Types.ObjectId;
    hostelId: Types.ObjectId;
    roomNumber: string;
    capacity: number;
    createdAt: Date;
    updatedAt: Date;
}
export declare const HostelRoom: mongoose.Model<IHostelRoom, {}, {}, {}, mongoose.Document<unknown, {}, IHostelRoom, {}, {}> & IHostelRoom & Required<{
    _id: Types.ObjectId;
}> & {
    __v: number;
}, any>;
//# sourceMappingURL=hostel.room.model.d.ts.map