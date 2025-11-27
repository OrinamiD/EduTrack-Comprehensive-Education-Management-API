import mongoose, { Document, Types } from "mongoose";
export interface IBus extends Document {
    schoolId: Types.ObjectId;
    plateNumber: string;
    capacity: number;
    driverName?: string;
    driverPhone?: string;
    status?: "active" | "maintenance" | "inactive";
    createdAt: Date;
    updatedAt: Date;
}
export declare const Bus: mongoose.Model<IBus, {}, {}, {}, mongoose.Document<unknown, {}, IBus, {}, {}> & IBus & Required<{
    _id: Types.ObjectId;
}> & {
    __v: number;
}, any>;
//# sourceMappingURL=transport.model.d.ts.map