import mongoose, { Schema, Document, Types } from "mongoose";
const hostelAllocationSchema = new mongoose.Schema({
    schoolId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "schoolId",
        required: true,
        // index: true,
    },
    roomId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "HostelRoom",
        required: true,
    },
    studentId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Student",
        required: true,
    },
    allocatedAt: {
        type: Date,
        default: Date.now,
    },
    removedAt: {
        type: Date,
    },
}, { timestamps: true });
// hostelAllocationSchema.index(
//   { tenant: 1, room: 1, student: 1, removedAt: 1 },
//   { unique: true }
// );
export const HostelAllocation = mongoose.model("HostelAllocation", hostelAllocationSchema);
//# sourceMappingURL=hostel.allocation.model.js.map