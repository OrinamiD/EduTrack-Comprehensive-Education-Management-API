import mongoose, { Schema, Document, Types } from "mongoose";
const borrowSchema = new mongoose.Schema({
    schoolId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "School",
        required: true,
        //   index: true,
    },
    bookId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Book",
        required: true,
    },
    studentId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Student",
        required: true,
    },
    borrowedAt: {
        type: Date,
        default: Date.now,
    },
    dueDate: {
        type: Date,
        required: true,
    },
    returnedAt: {
        type: Date,
    },
}, { timestamps: true });
// borrowSchema.index({ tenant: 1, book: 1, student: 1, returnedAt: 1 });
export const Borrow = mongoose.model("Borrow", borrowSchema);
//# sourceMappingURL=library.borrow.model.js.map