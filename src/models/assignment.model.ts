// src/models/assignment.model.ts
import mongoose, { Document, Schema, Types } from "mongoose";

export interface IAssignment extends Document {
  schoolId: Types.ObjectId;
  title: string;
  description?: string;
  classId?: Types.ObjectId;
  sectionId?: Types.ObjectId;
  subjectId?: Types.ObjectId;
  assignedBy?: Types.ObjectId;
  dueDate?: Date;
  maxScore?: number;
  createdAt: Date;
  updatedAt: Date;
}

const assignmentSchema: Schema<IAssignment> = new mongoose.Schema(
  {
    schoolId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "School",
      required: true,
      // index: true,
    },
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
    },
    classId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Class",
    },
    sectionId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Section",
    },
    subjectId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Subject",
    },
    assignedBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
    dueDate: {
      type: Date,
    },
    maxScore: {
      type: Number,
    },
  },
  { timestamps: true }
);

// AssignmentSchema.index({ tenant: 1, classId: 1, subjectId: 1 });

export const Assignment = mongoose.model<IAssignment>(
  "Assignment",
  assignmentSchema
);
