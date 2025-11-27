// src/models/student.model.ts
import mongoose, { Document, Schema, Types } from "mongoose";

export interface IStudent extends Document {
  schoolId: Types.ObjectId;
  departmentId: Types.ObjectId;
  userId: Types.ObjectId; // reference to User
  classId: Types.ObjectId;
  admissionNo: string;
  lastNo: number;

  DOB?: Date;
  gender?: "male" | "female" | "other";
  address: {
    street: string;
    area: string;
    city: string;
    state: string;
    country: string;
  };
  parentContact?: {
    name?: string;
    phone?: string;
    email?: string;
  };
  medicalInfo?: string;
  currentClass?: Types.ObjectId; // ref Class
  currentSection?: Types.ObjectId; // ref Section
  status?: "active" | "graduated" | "left" | "suspended";
  meta?: Record<string, any>;
  createdAt: Date;
  updatedAt: Date;
}

const studentSchema: Schema<IStudent> = new mongoose.Schema(
  {
    schoolId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "School",
      required: true,
      // index: true,
    },
    departmentId: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Department",
      },
    ],
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
      // index: true,
    },
    classId: {
      type: Schema.Types.ObjectId,
      ref: "Class",
    },
    admissionNo: {
      type: String,
      required: true,
    },
    lastNo: { type: Number },
    DOB: {
      type: Date,
    },
    gender: {
      type: String,
    },
    address: {
      street: {
        type: String,
        default: "20",
      },
      area: {
        type: String,
      },
      city: {
        type: String,
        default: "benin",
      },
      state: {
        type: String,
        default: "edo",
      },
      country: {
        type: String,
        default: "Nigeria",
      },
    },
    parentContact: {
      type: Schema.Types.Mixed,
    },
    medicalInfo: {
      type: String,
    },
    currentClass: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Class",
    },
    currentSection: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Section",
    },
    status: {
      type: String,
      enum: ["active", "graduated", "left", "suspended"],
      default: "active",
    },
    meta: {
      type: mongoose.Schema.Types.Mixed,
    },
  },
  { timestamps: true }
);

// StudentSchema.index(
//   { tenant: 1, admissionNo: 1 },
//   { unique: true, sparse: true }
// );

export const Student = mongoose.model<IStudent>("Student", studentSchema);
