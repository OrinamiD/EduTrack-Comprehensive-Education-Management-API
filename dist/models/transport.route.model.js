import mongoose, { Schema, Document, Types } from "mongoose";
const routeSchema = new mongoose.Schema({
    schoolId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "School",
        required: true,
        //   index: true,
    },
    name: {
        type: String,
        required: true,
    },
    bus: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Bus",
        required: true,
    },
    stops: {
        type: [String],
    },
}, { timestamps: true });
// routeSchema.index({ tenant: 1, name: 1 }, { unique: true });
export const BusRoute = mongoose.model("BusRoute", routeSchema);
//# sourceMappingURL=transport.route.model.js.map