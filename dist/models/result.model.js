// src/models/result.model.ts
import mongoose, { Document, Schema, Types } from "mongoose";
const resultSchema = new mongoose.Schema({
    schoolId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "School",
        required: true,
        //   index: true,
    },
    examId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Exam",
        required: true,
    },
    studentId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Student",
        required: true,
    },
    subjectId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Subject",
        required: true,
    },
    score: {
        type: Number,
        required: true,
    },
    maxScore: {
        type: Number,
    },
    grade: {
        type: String,
    },
    remarks: {
        type: String,
    },
}, { timestamps: true });
// ResultSchema.index(
//   { tenant: 1, exam: 1, student: 1, subject: 1 },
//   { unique: true }
// );
export const Result = mongoose.model("Result", resultSchema);
//# sourceMappingURL=result.model.js.map