import mongoose, { Document, Types } from "mongoose";
export interface INotification extends Document {
    schoolId: Types.ObjectId;
    title: string;
    message: string;
    target: "all" | "student" | "teacher" | "parent" | "admin" | "accountant" | "librarian" | "superadmin";
    recipients?: Types.ObjectId[];
    sentBy?: Types.ObjectId;
    isRead?: boolean;
    createdAt: Date;
    updatedAt: Date;
}
export declare const Notification: mongoose.Model<INotification, {}, {}, {}, mongoose.Document<unknown, {}, INotification, {}, {}> & INotification & Required<{
    _id: Types.ObjectId;
}> & {
    __v: number;
}, any>;
//# sourceMappingURL=notification.model.d.ts.map