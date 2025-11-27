import mongoose, { Document, Types } from "mongoose";
export interface IAsset extends Document {
    schoolId: Types.ObjectId;
    name: string;
    category?: string;
    quantity: number;
    condition?: "new" | "good" | "fair" | "damaged";
    purchaseDate?: Date;
    meta?: Record<string, any>;
    createdAt: Date;
    updatedAt: Date;
}
export declare const Asset: mongoose.Model<IAsset, {}, {}, {}, mongoose.Document<unknown, {}, IAsset, {}, {}> & IAsset & Required<{
    _id: Types.ObjectId;
}> & {
    __v: number;
}, any>;
//# sourceMappingURL=asset.model.d.ts.map