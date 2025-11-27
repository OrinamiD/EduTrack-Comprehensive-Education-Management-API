import mongoose, { Schema, Document, Types } from "mongoose";

export interface IHostelRoom extends Document {
  schoolId: Types.ObjectId;
  hostelId: Types.ObjectId;
  roomNumber: string;
  capacity: number;
  createdAt: Date;
  updatedAt: Date;
}

const hostelRoomSchema: Schema<IHostelRoom> = new mongoose.Schema(
  {
    schoolId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Tenant",
      required: true,
      // index: true,
    },
    hostelId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Hostel",
      required: true,
    },
    roomNumber: {
      type: String,
      required: true,
    },
    capacity: {
      type: Number,
      default: 4,
    },
  },
  { timestamps: true }
);

// hostelRoomSchema.index(
//   { tenant: 1, hostel: 1, roomNumber: 1 },
//   { unique: true }
// );

export const HostelRoom = mongoose.model<IHostelRoom>(
  "HostelRoom",
  hostelRoomSchema
);
