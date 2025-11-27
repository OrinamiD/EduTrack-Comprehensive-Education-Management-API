import mongoose, { Schema, Document, Types } from "mongoose";
const busSchema = new mongoose.Schema({
    schoolId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "School",
        required: true,
        //   index: true,
    },
    plateNumber: {
        type: String,
        required: true,
    },
    capacity: {
        type: Number,
        required: true,
    },
    driverName: {
        type: String,
    },
    driverPhone: {
        type: String,
    },
    status: {
        type: String,
        default: "active",
    },
}, { timestamps: true });
// busSchema.index({ tenant: 1, plateNumber: 1 }, { unique: true });
export const Bus = mongoose.model("Bus", busSchema);
//# sourceMappingURL=transport.model.js.map