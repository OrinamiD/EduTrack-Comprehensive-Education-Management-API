import mongoose, { Schema, Document, Types } from "mongoose";

export interface IBook extends Document {
  schoolId: Types.ObjectId;
  title: string;
  author: string;
  isbn: string;
  category?: string;
  copies: number;
  availableCopies: number;
  createdAt: Date;
  updatedAt: Date;
}

const bookSchema: Schema<IBook> = new mongoose.Schema(
  {
    schoolId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "School",
      required: true,
      //   index: true,
    },
    title: {
      type: String,
      required: true,
    },
    author: {
      type: String,
    },
    isbn: {
      type: String,
      required: true,
    },
    category: {
      type: String,
    },
    copies: {
      type: Number,
      default: 1,
    },
    availableCopies: {
      type: Number,
      default: 1,
    },
  },
  { timestamps: true }
);

// BookSchema.index({ tenant: 1, isbn: 1 }, { unique: true });

export const Book = mongoose.model<IBook>("Book", bookSchema);
