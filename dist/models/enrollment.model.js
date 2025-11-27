// src/models/enrollment.model.ts
import mongoose, { Document, Schema, Types } from "mongoose";
const enrollmentSchema = new mongoose.Schema({
    schoolId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Tenant",
        required: true,
        //   index: true,
    },
    studentId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Student",
        required: true,
        //   index: true,
    },
    classId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Class",
        required: true,
    },
    sectionId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Section",
    },
    academicYear: {
        type: String,
        required: true,
    },
    status: {
        type: String,
        enum: ["enrolled", "promoted", "left", "graduated"],
        default: "enrolled",
    },
    enrolledAt: { type: Date, default: Date.now },
}, { timestamps: true });
// EnrollmentSchema.index(
//   { tenant: 1, student: 1, academicYear: 1 },
//   { unique: true }
// );
export const Enrollment = mongoose.model("Enrollment", enrollmentSchema);
//# sourceMappingURL=enrollment.model.js.map