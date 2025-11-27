// src/models/teacher.model.ts
import mongoose, { Document, Schema, Types } from "mongoose";

export interface IStaff extends Document {
  schoolId: Types.ObjectId;
  departmentsId: Types.ObjectId[];
  userId: Types.ObjectId;
  title: string;
  staff: string[];
  staffId: string;
  subjectsId?: Types.ObjectId;
  bio?: string;
  employmentDate?: Date;
  status?: "active" | "inactive" | "resigned";
  meta?: Record<string, any>;
  createdAt: Date;
  updatedAt: Date;
}

const staffSchema: Schema<IStaff> = new mongoose.Schema(
  {
    schoolId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "School",
      required: true,
      // index: true,
    },
    departmentsId: [
      {
        type: Schema.Types.ObjectId,
        ref: "Department",
      },
    ],
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
      // index: true,
    },
    title: {
      type: String,
      required: true,
    },
    staff: [
      {
        type: String,
        required: true,
      },
    ],
    staffId: {
      type: String,
    },
    subjectsId: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Subject",
      },
    ],
    bio: {
      type: String,
    },
    employmentDate: {
      type: Date,
    },
    status: {
      type: String,
      default: "active",
    },
    meta: {
      type: Schema.Types.Mixed,
    },
  },
  { timestamps: true }
);

// TeacherSchema.index({ tenant: 1, staffId: 1 }, { unique: true, sparse: true });

export const Staff = mongoose.model<IStaff>("Staff", staffSchema);
