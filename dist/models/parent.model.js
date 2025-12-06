import mongoose, { Document, Schema, Types } from "mongoose";
const parentSchema = new mongoose.Schema({
    schoolId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "School",
    },
    userId: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
    phone: { type: String },
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
        image: {
            type: String,
        },
    },
}, { timestamps: true });
const Parent = mongoose.model("Parent", parentSchema);
export default Parent;
//# sourceMappingURL=parent.model.js.map