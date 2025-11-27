// src/models/subject.model.ts
import mongoose, { Document, Schema, Types } from "mongoose";

export interface ISubject extends Document {
  schoolId: Types.ObjectId;
  name: string;
  code?: string;
  description?: string;
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
    },
    code: {
      type: String,
    },
    description: {
      type: String,
    },
    registered: { type: Boolean },
  },
  { timestamps: true }
);

// SubjectSchema.index({ tenant: 1, name: 1 }, { unique: true });

export const Subject = mongoose.model<ISubject>("Subject", SubjectSchema);
