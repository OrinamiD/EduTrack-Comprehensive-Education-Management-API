import mongoose, { Document, Types } from "mongoose";
export interface IAssignment extends Document {
    schoolId: Types.ObjectId;
    title: string;
    description?: string;
    classId?: Types.ObjectId;
    sectionId?: Types.ObjectId;
    subjectId?: Types.ObjectId;
    assignedBy?: Types.ObjectId;
    dueDate?: Date;
    maxScore?: number;
    createdAt: Date;
    updatedAt: Date;
}
export declare const Assignment: mongoose.Model<IAssignment, {}, {}, {}, mongoose.Document<unknown, {}, IAssignment, {}, {}> & IAssignment & Required<{
    _id: Types.ObjectId;
}> & {
    __v: number;
}, any>;
//# sourceMappingURL=assignment.model.d.ts.map