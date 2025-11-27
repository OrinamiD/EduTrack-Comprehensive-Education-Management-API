// src/models/fee.model.ts
import mongoose, { Document, Schema, Types } from "mongoose";

export interface IFee extends Document {
  schoolId: Types.ObjectId;
  title: string;
  amount: number;
  academicYear?: string;
  classId?: Types.ObjectId;
  dueDate?: Date;
  createdAt: Date;
  updatedAt: Date;
}

const feeSchema: Schema<IFee> = new mongoose.Schema<IFee>(
  {
    schoolId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Tenant",
      required: true,
      // index: true,
    },
    title: {
      type: String,
      required: true,
    },
    amount: {
      type: Number,
      required: true,
    },
    academicYear: {
      type: String,
    },
    classId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Class",
    },
    dueDate: {
      type: Date,
    },
  },
  { timestamps: true }
);

// FeeSchema.index({ tenant: 1, title: 1 });

export const Fee = mongoose.model<IFee>("Fee", feeSchema);
