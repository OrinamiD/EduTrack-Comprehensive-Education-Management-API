import mongoose, { Schema, Document, Types } from "mongoose";
const proctorSessionSchema = new mongoose.Schema({
    schoolId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "School",
        required: true,
        // index: true,
    },
    examId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Exam",
        required: true,
    },
    studentId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Student",
        required: true,
    },
    startedAt: {
        type: Date,
        default: Date.now,
    },
    endedAt: {
        type: Date,
    },
    aiFlags: {
        faceMismatch: Number,
        multiplePeople: Number,
        phoneDetected: Number,
        tabSwitch: Number,
    },
    videoChunks: [
        {
            url: String,
            timestamp: Date,
        },
    ],
    status: {
        type: String,
        default: "active",
    },
}, { timestamps: true });
// ProctorSessionSchema.index({ tenant: 1, exam: 1, student: 1 });
export const ProctorSession = mongoose.model("ProctorSession", proctorSessionSchema);
//# sourceMappingURL=proctoring.monitoring.model.js.map