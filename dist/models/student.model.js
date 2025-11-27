// src/models/student.model.ts
import mongoose, { Document, Schema, Types } from "mongoose";
const studentSchema = new mongoose.Schema({
    schoolId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "School",
        required: true,
        // index: true,
    },
    departmentId: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Department",
        },
    ],
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true,
        // index: true,
    },
    classId: {
        type: Schema.Types.ObjectId,
        ref: "Class",
    },
    admissionNo: {
        type: String,
        required: true,
    },
    lastNo: { type: Number },
    DOB: {
        type: Date,
    },
    gender: {
        type: String,
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
    parentContact: {
        type: Schema.Types.Mixed,
    },
    medicalInfo: {
        type: String,
    },
    currentClass: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Class",
    },
    currentSection: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Section",
    },
    status: {
        type: String,
        enum: ["active", "graduated", "left", "suspended"],
        default: "active",
    },
    meta: {
        type: mongoose.Schema.Types.Mixed,
    },
}, { timestamps: true });
// StudentSchema.index(
//   { tenant: 1, admissionNo: 1 },
//   { unique: true, sparse: true }
// );
export const Student = mongoose.model("Student", studentSchema);
//# sourceMappingURL=student.model.js.map