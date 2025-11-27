import mongoose, { Document, Types } from "mongoose";
export interface IStudent extends Document {
    schoolId: Types.ObjectId;
    departmentId: Types.ObjectId;
    userId: Types.ObjectId;
    classId: Types.ObjectId;
    admissionNo: string;
    lastNo: number;
    DOB?: Date;
    gender?: "male" | "female" | "other";
    address: {
        street: string;
        area: string;
        city: string;
        state: string;
        country: string;
    };
    parentContact?: {
        name?: string;
        phone?: string;
        email?: string;
    };
    medicalInfo?: string;
    currentClass?: Types.ObjectId;
    currentSection?: Types.ObjectId;
    status?: "active" | "graduated" | "left" | "suspended";
    meta?: Record<string, any>;
    createdAt: Date;
    updatedAt: Date;
}
export declare const Student: mongoose.Model<IStudent, {}, {}, {}, mongoose.Document<unknown, {}, IStudent, {}, {}> & IStudent & Required<{
    _id: Types.ObjectId;
}> & {
    __v: number;
}, any>;
//# sourceMappingURL=student.model.d.ts.map