import mongoose, { Document, Types } from "mongoose";
export interface IStaff extends Document {
    schoolId: Types.ObjectId;
    departmentsId: Types.ObjectId[];
    userId: Types.ObjectId;
    title: string;
    staff: string[];
    staffId: string;
    subjectsId?: Types.ObjectId;
    bio?: string;
    employmentDate?: Date;
    status?: "active" | "inactive" | "resigned";
    meta?: Record<string, any>;
    createdAt: Date;
    updatedAt: Date;
}
export declare const Staff: mongoose.Model<IStaff, {}, {}, {}, mongoose.Document<unknown, {}, IStaff, {}, {}> & IStaff & Required<{
    _id: Types.ObjectId;
}> & {
    __v: number;
}, any>;
//# sourceMappingURL=staff.model.d.ts.map