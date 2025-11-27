import mongoose, { Schema, Document, Types } from "mongoose";

export interface IRoute extends Document {
  schoolId: Types.ObjectId;
  name: string;
  busId: Types.ObjectId;
  stops: string[];
  createdAt: Date;
  updatedAt: Date;
}

const routeSchema = new mongoose.Schema(
  {
    schoolId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "School",
      required: true,
      //   index: true,
    },
    name: {
      type: String,
      required: true,
    },
    bus: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Bus",
      required: true,
    },
    stops: {
      type: [String],
    },
  },
  { timestamps: true }
);

// routeSchema.index({ tenant: 1, name: 1 }, { unique: true });

export const BusRoute = mongoose.model<IRoute>("BusRoute", routeSchema);
