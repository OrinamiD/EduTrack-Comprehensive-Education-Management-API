import mongoose, { Document, Types } from "mongoose";
export interface IAttendance extends Document {
    schoolId: Types.ObjectId;
    studentId: Types.ObjectId;
    classId?: Types.ObjectId;
    sectionId?: mongoose.Types.ObjectId;
    date: Date;
    status: "present" | "absent" | "late" | "excused";
    recordedBy?: Types.ObjectId;
    meta?: Record<string, any>;
    createdAt: Date;
    updatedAt: Date;
}
export declare const Attendance: mongoose.Model<IAttendance, {}, {}, {}, mongoose.Document<unknown, {}, IAttendance, {}, {}> & IAttendance & Required<{
    _id: Types.ObjectId;
}> & {
    __v: number;
}, any>;
//# sourceMappingURL=attendance.model.d.ts.map