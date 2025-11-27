// src/models/fee.model.ts
import mongoose, { Document, Schema, Types } from "mongoose";
const feeSchema = new mongoose.Schema({
    schoolId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Tenant",
        required: true,
        // index: true,
    },
    title: {
        type: String,
        required: true,
    },
    amount: {
        type: Number,
        required: true,
    },
    academicYear: {
        type: String,
    },
    classId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Class",
    },
    dueDate: {
        type: Date,
    },
}, { timestamps: true });
// FeeSchema.index({ tenant: 1, title: 1 });
export const Fee = mongoose.model("Fee", feeSchema);
//# sourceMappingURL=fee.model.js.map