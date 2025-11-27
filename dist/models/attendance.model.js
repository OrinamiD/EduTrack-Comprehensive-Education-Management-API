// src/models/attendance.model.ts
import mongoose, { Document, Schema, Types } from "mongoose";
const attendanceSchema = new mongoose.Schema({
    schoolId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "School",
        required: true,
        // index: true,
    },
    studentId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Student",
        required: true,
        // index: true,
    },
    classId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Class",
    },
    sectionId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Section",
    },
    date: {
        type: Date,
        required: true,
        // index: true
    },
    status: {
        type: String,
        required: true,
        enum: ["present", "absent", "late", "excused"],
        default: "absent",
    },
    recordedBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
    },
    meta: {
        type: mongoose.Schema.Types.Mixed,
    },
}, { timestamps: true });
// AttendanceSchema.index({ tenant: 1, student: 1, date: 1 }, { unique: true });
export const Attendance = mongoose.model("Attendance", attendanceSchema);
//# sourceMappingURL=attendance.model.js.map