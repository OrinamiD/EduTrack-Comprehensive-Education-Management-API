// src/models/result.model.ts
import mongoose, { Document, Schema, Types } from "mongoose";

export interface IResult extends Document {
  schoolId: Types.ObjectId;
  examId: Types.ObjectId;
  studentId: Types.ObjectId;
  subjectId: Types.ObjectId;
  score: number;
  maxScore?: number;
  grade?: string;
  remarks?: string;
  createdAt: Date;
  updatedAt: Date;
}

const resultSchema: Schema<IResult> = new mongoose.Schema(
  {
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
  },
  { timestamps: true }
);

// ResultSchema.index(
//   { tenant: 1, exam: 1, student: 1, subject: 1 },
//   { unique: true }
// );

export const Result = mongoose.model<IResult>("Result", resultSchema);
