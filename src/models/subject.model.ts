// src/models/subject.model.ts
import mongoose, { Document, Schema, Types } from "mongoose";

export interface ISubject extends Document {
  schoolId: Types.ObjectId;
  name:
    | "maths"
    | "english"
    | "basic-science"
    | "basic-tech"
    | "CRS"
    | "social-studies"
    | "furtherMathematics"
    | "chemistry"
    | "physics"
    | "biology"
    | "agriculture"
    | "economics"
    | "commerce"
    | "goverment";
  classId: Types.ObjectId;
  userId: Types.ObjectId;
  createdBy: Types.ObjectId;
  code?: string;
  description?: string;
  deleted: boolean;
  deletedAt: Date;
  registered: boolean;
  createdAt: Date;
  updatedAt: Date;
}

const SubjectSchema = new Schema<ISubject>(
  {
    schoolId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "School",
      required: true,
      // index: true,
    },
    name: {
      type: String,
      required: true,
      enum: [
        "maths",
        "english",
        "basic-science",
        "basic-tech",
        "CRS",
        "social-studies",
        "furtherMathematics",
        "chemistry",
        "physics",
        "biology",
        "agriculture",
        "economics",
        "commerce",
        "goverment",
      ],
    },
    classId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Class",
    },
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
    createdBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
    code: {
      type: String,
    },
    description: {
      type: String,
    },
    deleted: {
      type: Boolean,
      default: false,
    },
    deletedAt: {
      type: Date,
      default: null,
    },
    registered: { type: Boolean },
  },
  { timestamps: true }
);

// SubjectSchema.index({ tenant: 1, name: 1 }, { unique: true });

export const Subject = mongoose.model<ISubject>("Subject", SubjectSchema);
