// src/models/submission.model.ts
import mongoose, { Document, Schema, Types } from "mongoose";

export interface ISubmission extends Document {
  schoolId: Types.ObjectId;
  assignmentId: Types.ObjectId;
  studentId: Types.ObjectId;
  submittedAt: Date;
  files?: { url: string; name?: string }[];
  score?: number;
  feedback?: string;
  plagiarismScore?: number; // if using plagiarism service
  createdAt: Date;
  updatedAt: Date;
}

const submissionSchema: Schema<ISubmission> = new mongoose.Schema(
  {
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
  },
  { timestamps: true }
);

// SubmissionSchema.index(
//   { tenant: 1, assignment: 1, student: 1 },
//   { unique: true }
// );

export const Submission = mongoose.model<ISubmission>(
  "Submission",
  submissionSchema
);
