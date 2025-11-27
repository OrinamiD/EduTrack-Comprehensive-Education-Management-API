import mongoose, { Schema, Document, Types } from "mongoose";
const assetSchema = new mongoose.Schema({
    schoolId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "School",
        required: true,
        // index: true,
    },
    name: {
        type: String,
        required: true,
    },
    category: {
        type: String,
    },
    quantity: {
        type: Number,
        default: 1,
    },
    condition: {
        type: String,
        default: "good",
    },
    purchaseDate: Date,
    meta: Schema.Types.Mixed,
}, { timestamps: true });
// AssetSchema.index({ tenant: 1, name: 1 });
export const Asset = mongoose.model("Asset", assetSchema);
//# sourceMappingURL=asset.model.js.map