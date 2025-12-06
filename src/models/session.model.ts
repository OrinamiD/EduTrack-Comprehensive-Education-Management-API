// src/models/section.model.ts
import mongoose, { Document, Schema, Types } from "mongoose";

export interface ISession extends Document {
  schoolId: Types.ObjectId;
  classId: Types.ObjectId;
  name: string; // e.g., "A", "B"
  capacity?: number;
  createdAt: Date;
  updatedAt: Date;
}

const sessionSchema: Schema<ISession> = new mongoose.Schema(
  {
    schoolId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "School",
      required: true,
      //   index: true,
    },
    classId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Class",
      required: true,
      //   index: true,
    },
    name: {
      type: String,
      required: true,
    },
    capacity: {
      type: Number,
      default: 0,
    },
  },
  { timestamps: true }
);

// SectionSchema.index({ tenant: 1, classId: 1, name: 1 }, { unique: true });

export const Session = mongoose.model<ISession>("Session", sessionSchema);
