import mongoose, { Schema, Document, Types } from "mongoose";

export interface IHostelAllocation extends Document {
  schoolId: Types.ObjectId;
  roomId: Types.ObjectId;
  studentId: Types.ObjectId;
  allocatedAt: Date;
  removedAt?: Date;
  createdAt: Date;
  updatedAt: Date;
}

const hostelAllocationSchema: Schema<IHostelAllocation> = new mongoose.Schema(
  {
    schoolId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "schoolId",
      required: true,
      // index: true,
    },
    roomId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "HostelRoom",
      required: true,
    },
    studentId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Student",
      required: true,
    },
    allocatedAt: {
      type: Date,
      default: Date.now,
    },
    removedAt: {
      type: Date,
    },
  },
  { timestamps: true }
);

// hostelAllocationSchema.index(
//   { tenant: 1, room: 1, student: 1, removedAt: 1 },
//   { unique: true }
// );

export const HostelAllocation = mongoose.model<IHostelAllocation>(
  "HostelAllocation",
  hostelAllocationSchema
);
