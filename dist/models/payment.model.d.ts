import mongoose, { Document, Types } from "mongoose";
export interface IPayment extends Document {
    schoolId: Types.ObjectId;
    studentId?: Types.ObjectId;
    invoiceRef?: string;
    amount: number;
    method?: string;
    providerRef?: string;
    status?: "pending" | "successful" | "failed" | "refunded";
    createdAt: Date;
    updatedAt: Date;
}
export declare const Payment: mongoose.Model<IPayment, {}, {}, {}, mongoose.Document<unknown, {}, IPayment, {}, {}> & IPayment & Required<{
    _id: Types.ObjectId;
}> & {
    __v: number;
}, any>;
//# sourceMappingURL=payment.model.d.ts.map