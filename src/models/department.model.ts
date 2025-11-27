import mongoose, { Schema, Document, Types, model } from "mongoose";

export interface IDepartment extends Document {
  name:
    | "science"
    | "commercial"
    | "art"
    | "accounting"
    | "libray"
    | "driving"
    | "administrative";
  schoolId: Types.ObjectId;
  classId: Types.ObjectId;
  userId: Types.ObjectId;
  staffIds: Types.ObjectId[];
  studentIds: Types.ObjectId[];
  createdAt: Date;
  updatedAt: Date;
}

const departmentSchema: Schema<IDepartment> = new mongoose.Schema(
  {
    name: {
      type: String,
      enum: [
        "science",
        "commercial",
        "art",
        "accounting",
        "libray",
        "driving",
        "administrative",
      ],
      required: true,
      trim: true,
    },

    schoolId: {
      type: Schema.Types.ObjectId,
      ref: "School",
      required: true,
    },
    classId: {
      type: Schema.Types.ObjectId,
      ref: "Class",
    },
    userId: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },

    staffIds: [
      {
        type: Schema.Types.ObjectId,
        ref: "Staff",
      },
    ],

    studentIds: [
      {
        type: Schema.Types.ObjectId,
        ref: "Student",
      },
    ],
  },
  {
    timestamps: true,
  }
);

const Department = model<IDepartment>("Department", departmentSchema);

export default Department;
