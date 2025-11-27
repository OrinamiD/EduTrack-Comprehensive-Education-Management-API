// src/models/subject.model.ts
import mongoose, { Document, Schema, Types } from "mongoose";
const SubjectSchema = new Schema({
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
    code: {
        type: String,
    },
    description: {
        type: String,
    },
    registered: { type: Boolean },
}, { timestamps: true });
// SubjectSchema.index({ tenant: 1, name: 1 }, { unique: true });
export const Subject = mongoose.model("Subject", SubjectSchema);
//# sourceMappingURL=subject.model.js.map