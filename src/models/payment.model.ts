// src/models/payment.model.ts
import mongoose, { Document, Schema, Types } from "mongoose";

export interface IPayment extends Document {
  schoolId: Types.ObjectId;
  studentId?: Types.ObjectId;
  invoiceRef?: string;
  amount: number;
  method?: string; // e.g., paystack, stripe, cash
  providerRef?: string; // provider transaction id
  status?: "pending" | "successful" | "failed" | "refunded";
  createdAt: Date;
  updatedAt: Date;
}

const paymentSchema: Schema<IPayment> = new mongoose.Schema(
  {
    schoolId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Tenant",
      required: true,
      // index: true,
    },
    studentId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Student",
    },
    invoiceRef: {
      type: String,
    },
    amount: {
      type: Number,
      required: true,
    },
    method: {
      type: String,
    },
    providerRef: {
      type: String,
    },
    status: {
      type: String,
      enum: ["pending", "successful", "failed", "refunded"],
      default: "pending",
    },
  },
  { timestamps: true }
);

// PaymentSchema.index(
//   { tenant: 1, providerRef: 1 },
//   { unique: true, sparse: true }
// );

export const Payment = mongoose.model<IPayment>("Payment", paymentSchema);
