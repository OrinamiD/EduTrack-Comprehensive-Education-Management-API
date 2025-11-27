import mongoose, { Schema, Document, Types } from "mongoose";
const auditSchema = new mongoose.Schema({
    schoolId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Tenant",
        required: true,
        // index: true,
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
    },
    action: {
        type: String,
        required: true,
    },
    entity: {
        type: String,
        required: true,
    },
    entityId: {
        type: mongoose.Schema.Types.Mixed,
    },
    metadata: {
        type: mongoose.Schema.Types.Mixed,
    },
}, { timestamps: { createdAt: true, updatedAt: false } });
// auditSchema.index({ tenant: 1, entity: 1 });
export const Audit = mongoose.model("Audit", auditSchema);
//# sourceMappingURL=audit.model.js.map