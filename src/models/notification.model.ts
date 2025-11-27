import mongoose, { Schema, Document, Types } from "mongoose";

export interface INotification extends Document {
  schoolId: Types.ObjectId;
  title: string;
  message: string;
  target:
    | "all"
    | "student"
    | "teacher"
    | "parent"
    | "admin"
    | "accountant"
    | "librarian"
    | "superadmin";
  recipients?: Types.ObjectId[];
  sentBy?: Types.ObjectId;
  isRead?: boolean;
  createdAt: Date;
  updatedAt: Date;
}

const notificationSchema: Schema<INotification> = new mongoose.Schema(
  {
    schoolId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "School",
      required: true,
      // index: true,
    },
    title: {
      type: String,
      required: true,
    },
    message: {
      type: String,
      required: true,
    },
    target: {
      type: String,
      enum: [
        "all",
        "student",
        "teacher",
        "parent",
        "admin",
        "accountant",
        "librarian",
        "superadmin",
      ],
      default: "all",
    },
    recipients: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
      },
    ],
    sentBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
    isRead: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);

// notificationSchema.index({ tenant: 1, target: 1 });

export const Notification = mongoose.model<INotification>(
  "Notification",
  notificationSchema
);
