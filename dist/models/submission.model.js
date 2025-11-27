// src/models/submission.model.ts
import mongoose, { Document, Schema, Types } from "mongoose";
const submissionSchema = new mongoose.Schema({
    schoolId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "School",
        required: true,
        //   index: true,
    },
    assignmentId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Assignment",
        required: true,
        //   index: true,
    },
    studentId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Student",
        required: true,
        //   index: true,
    },
    submittedAt: {
        type: Date,
        default: Date.now,
    },
    files: [
        {
            name: String,
            url: String,
        },
    ],
    score: {
        type: Number,
    },
    feedback: {
        type: String,
    },
    plagiarismScore: {
        type: Number,
    },
}, { timestamps: true });
// SubmissionSchema.index(
//   { tenant: 1, assignment: 1, student: 1 },
//   { unique: true }
// );
export const Submission = mongoose.model("Submission", submissionSchema);
//# sourceMappingURL=submission.model.js.map