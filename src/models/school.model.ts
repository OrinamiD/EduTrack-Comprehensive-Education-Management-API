import mongoose, { Document, Schema, Types } from "mongoose";

export interface ISchool extends Document {
  name: string;
  ownerId: Types.ObjectId;
  schoolEmail: string;
  schoolNumber: string;
  school: Types.ObjectId;
  logo: string;
  image: string;
  address: {
    street: string;
    area: string;
    city: string;
    state: string;
    country: string;
  };
  meta?: Record<string, any>;
}

const schoolSchema: Schema<ISchool> = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    ownerId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
    schoolEmail: {
      type: String,
      required: true,
    },
    schoolNumber: {
      type: String,
      required: true,
    },
    school: {
      type: mongoose.Schema.Types.ObjectId,
    },
    logo: {
      type: String,
      // required: true,
    },
    image: {
      type: String,
      // required: true,
    },
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
    },
    meta: { type: Schema.Types.Mixed },
  },
  { timestamps: true }
);

const School = mongoose.model<ISchool>("School", schoolSchema);

export default School;
