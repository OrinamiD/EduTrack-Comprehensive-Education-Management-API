import mongoose, { Document, Schema, Types } from "mongoose";

export interface IParent extends Document {
  schoolId: Types.ObjectId;
  userId: Types.ObjectId;
  phone: string;
  address: {
    street: string;
    area: string;
    city: string;
    state: string;
    country: string;
  };
  image: string;
}

const parentSchema: Schema<IParent> = new mongoose.Schema(
  {
    schoolId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "School",
    },
    userId: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
    phone: { type: String },
    address: {
      street: {
        type: String,
        default: "20",
      },
      area: {
        type: String,
      },
      city: {
        type: String,
        default: "benin",
      },
      state: {
        type: String,
        default: "edo",
      },
      country: {
        type: String,
        default: "Nigeria",
      },
      image: {
        type: String,
      },
    },
  },
  { timestamps: true }
);

const Parent = mongoose.model<IParent>("Parent", parentSchema);

export default Parent;
