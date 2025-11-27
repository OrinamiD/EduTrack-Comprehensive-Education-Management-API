import mongoose, { Document, Types } from "mongoose";
export interface IAudit extends Document {
    schoolId: Types.ObjectId;
    user?: Types.ObjectId;
    action: string;
    entity: string;
    entityId?: Types.ObjectId | string;
    metadata?: Record<string, any>;
    createdAt: Date;
}
export declare const Audit: mongoose.Model<IAudit, {}, {}, {}, mongoose.Document<unknown, {}, IAudit, {}, {}> & IAudit & Required<{
    _id: Types.ObjectId;
}> & {
    __v: number;
}, any>;
//# sourceMappingURL=audit.model.d.ts.map