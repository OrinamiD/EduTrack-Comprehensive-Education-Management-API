import mongoose, { Schema, Document, Types} from "mongoose";

export interface IBus extends Document {
  schoolId: Types.ObjectId;
  plateNumber: string;
  capacity: number;
  driverName?: string;
  driverPhone?: string;
  status?: "active" | "maintenance" | "inactive";
  createdAt: Date;
  updatedAt: Date;
}

const busSchema: Schema<IBus> = new mongoose.Schema(
  {
    schoolId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "School",
      required: true,
      //   index: true,
    },
    plateNumber: {
      type: String,
      required: true,
    },
    capacity: {
      type: Number,
      required: true,
    },
    driverName: {
      type: String,
    },
    driverPhone: {
      type: String,
    },
    status: {
      type: String,
      default: "active",
    },
  },
  { timestamps: true }
);

// busSchema.index({ tenant: 1, plateNumber: 1 }, { unique: true });

export const Bus = mongoose.model<IBus>("Bus", busSchema);
