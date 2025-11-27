import mongoose, { Schema, Document, Types } from "mongoose";

export interface IProctorSession extends Document {
  schoolId: Types.ObjectId;
  examId: Types.ObjectId;
  studentId: Types.ObjectId;
  startedAt: Date;
  endedAt?: Date;
  aiFlags: {
    faceMismatch?: number;
    multiplePeople?: number;
    phoneDetected?: number;
    tabSwitch?: number;
  };
  videoChunks?: {
    url: string;
    timestamp: Date;
  }[];
  status: "active" | "completed" | "violated";
  createdAt: Date;
  updatedAt: Date;
}

const proctorSessionSchema: Schema<IProctorSession> = new mongoose.Schema(
  {
    schoolId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "School",
      required: true,
      // index: true,
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
    startedAt: {
      type: Date,
      default: Date.now,
    },
    endedAt: {
      type: Date,
    },
    aiFlags: {
      faceMismatch: Number,
      multiplePeople: Number,
      phoneDetected: Number,
      tabSwitch: Number,
    },
    videoChunks: [
      {
        url: String,
        timestamp: Date,
      },
    ],
    status: {
      type: String,
      default: "active",
    },
  },
  { timestamps: true }
);

// ProctorSessionSchema.index({ tenant: 1, exam: 1, student: 1 });

export const ProctorSession = mongoose.model<IProctorSession>(
  "ProctorSession",
  proctorSessionSchema
);
