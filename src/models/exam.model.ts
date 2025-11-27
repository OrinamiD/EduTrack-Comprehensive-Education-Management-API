// src/models/exam.model.ts
import mongoose, { Document, Schema, Types } from "mongoose";

export interface IExam extends Document {
  schoolId: Types.ObjectId;
  title: string;
  academicYear: string;
  term?: string;
  startDate?: Date;
  endDate?: Date;
  createdBy?: Types.ObjectId;
  meta?: Record<string, any>;
  createdAt: Date;
  updatedAt: Date;
}

const examSchema = new Schema<IExam>(
  {
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
  },
  { timestamps: true }
);

// ExamSchema.index({ tenant: 1, title: 1, academicYear: 1 });

export const Exam = mongoose.model<IExam>("Exam", examSchema);
