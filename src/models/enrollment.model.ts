// src/models/enrollment.model.ts
import mongoose, { Document, Schema, Types } from "mongoose";

export interface IEnrollment extends Document {
  schoolId: Types.ObjectId;
  studentId: Types.ObjectId;
  classId: Types.ObjectId;
  sectionId?: Types.ObjectId;
  academicYear: string; // e.g., "2024/2025"
  status: "enrolled" | "promoted" | "left" | "graduated";
  enrolledAt: Date;
  createdAt: Date;
  updatedAt: Date;
}

const enrollmentSchema: Schema<IEnrollment> = new mongoose.Schema(
  {
    schoolId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Tenant",
      required: true,
      //   index: true,
    },
    studentId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Student",
      required: true,
      //   index: true,
    },
    classId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Class",
      required: true,
    },
    sectionId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Section",
    },
    academicYear: {
      type: String,
      required: true,
    },
    status: {
      type: String,
      enum: ["enrolled", "promoted", "left", "graduated"],
      default: "enrolled",
    },
    enrolledAt: { type: Date, default: Date.now },
  },
  { timestamps: true }
);

// EnrollmentSchema.index(
//   { tenant: 1, student: 1, academicYear: 1 },
//   { unique: true }
// );

export const Enrollment = mongoose.model<IEnrollment>(
  "Enrollment",
  enrollmentSchema
);
