// src/models/exam.model.ts
import mongoose, { Document, Schema, Types } from "mongoose";
const examSchema = new Schema({
    schoolId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "School",
        required: true,
        //   index: true,
    },
    title: {
        type: String,
        required: true,
    },
    academicYear: {
        type: String,
        required: true,
    },
    term: {
        type: String,
    },
    startDate: {
        type: Date,
    },
    endDate: {
        type: Date,
    },
    createdBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
    },
    meta: {
        type: Schema.Types.Mixed,
    },
}, { timestamps: true });
// ExamSchema.index({ tenant: 1, title: 1, academicYear: 1 });
export const Exam = mongoose.model("Exam", examSchema);
//# sourceMappingURL=exam.model.js.map