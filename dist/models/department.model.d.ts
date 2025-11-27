import mongoose, { Document, Types } from "mongoose";
export interface IDepartment extends Document {
    name: "science" | "commercial" | "art" | "accounting" | "libray" | "driving" | "administrative";
    schoolId: Types.ObjectId;
    classId: Types.ObjectId;
    userId: Types.ObjectId;
    staffIds: Types.ObjectId[];
    studentIds: Types.ObjectId[];
    createdAt: Date;
    updatedAt: Date;
}
declare const Department: mongoose.Model<IDepartment, {}, {}, {}, mongoose.Document<unknown, {}, IDepartment, {}, {}> & IDepartment & Required<{
    _id: Types.ObjectId;
}> & {
    __v: number;
}, any>;
export default Department;
//# sourceMappingURL=department.model.d.ts.map