// src/models/payment.model.ts
import mongoose, { Document, Schema, Types } from "mongoose";
const paymentSchema = new mongoose.Schema({
    schoolId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Tenant",
        required: true,
        // index: true,
    },
    studentId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Student",
    },
    invoiceRef: {
        type: String,
    },
    amount: {
        type: Number,
        required: true,
    },
    method: {
        type: String,
    },
    providerRef: {
        type: String,
    },
    status: {
        type: String,
        enum: ["pending", "successful", "failed", "refunded"],
        default: "pending",
    },
}, { timestamps: true });
// PaymentSchema.index(
//   { tenant: 1, providerRef: 1 },
//   { unique: true, sparse: true }
// );
export const Payment = mongoose.model("Payment", paymentSchema);
//# sourceMappingURL=payment.model.js.map