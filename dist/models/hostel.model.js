import mongoose, { Schema, Document, Types } from "mongoose";
const hostelSchema = new mongoose.Schema({
    schoolId: {
        type: Schema.Types.ObjectId,
        ref: "School",
        required: true,
        // index: true,
    },
    name: {
        type: String,
        required: true,
    },
    type: {
        type: String,
        default: "mixed",
    },
    capacity: {
        type: Number,
        required: true,
    },
}, { timestamps: true });
// hostelSchema.index({ tenant: 1, name: 1 }, { unique: true });
export const Hostel = mongoose.model("Hostel", hostelSchema);
//# sourceMappingURL=hostel.model.js.map