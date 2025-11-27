import mongoose, { Schema, Document, Types } from "mongoose";

export interface IHostel extends Document {
  schoolId: Types.ObjectId;
  name: string;
  type: "male" | "female" | "mixed";
  capacity: number;
  createdAt: Date;
  updatedAt: Date;
}

const hostelSchema: Schema<IHostel> = new mongoose.Schema(
  {
    schoolId: {
      type: Schema.Types.ObjectId,
      ref: "School",
      required: true,
      // index: true,
    },
    name: {
      type: String,
      required: true,
    },
    type: {
      type: String,
      default: "mixed",
    },
    capacity: {
      type: Number,
      required: true,
    },
  },
  { timestamps: true }
);

// hostelSchema.index({ tenant: 1, name: 1 }, { unique: true });

export const Hostel = mongoose.model<IHostel>("Hostel", hostelSchema);
