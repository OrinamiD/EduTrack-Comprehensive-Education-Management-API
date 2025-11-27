import mongoose, { Schema, Document, Types } from "mongoose";
const hostelRoomSchema = new mongoose.Schema({
    schoolId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Tenant",
        required: true,
        // index: true,
    },
    hostelId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Hostel",
        required: true,
    },
    roomNumber: {
        type: String,
        required: true,
    },
    capacity: {
        type: Number,
        default: 4,
    },
}, { timestamps: true });
// hostelRoomSchema.index(
//   { tenant: 1, hostel: 1, roomNumber: 1 },
//   { unique: true }
// );
export const HostelRoom = mongoose.model("HostelRoom", hostelRoomSchema);
//# sourceMappingURL=hostel.room.model.js.map