// src/models/teacher.model.ts
import mongoose, { Document, Schema, Types } from "mongoose";
const staffSchema = new mongoose.Schema({
    schoolId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "School",
        required: true,
        // index: true,
    },
    departmentsId: [
        {
            type: Schema.Types.ObjectId,
            ref: "Department",
        },
    ],
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true,
        // index: true,
    },
    title: {
        type: String,
        required: true,
    },
    staff: [
        {
            type: String,
            required: true,
        },
    ],
    staffId: {
        type: String,
    },
    subjectsId: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Subject",
        },
    ],
    bio: {
        type: String,
    },
    employmentDate: {
        type: Date,
    },
    status: {
        type: String,
        default: "active",
    },
    meta: {
        type: Schema.Types.Mixed,
    },
}, { timestamps: true });
// TeacherSchema.index({ tenant: 1, staffId: 1 }, { unique: true, sparse: true });
export const Staff = mongoose.model("Staff", staffSchema);
//# sourceMappingURL=staff.model.js.map