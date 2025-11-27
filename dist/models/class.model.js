// src/models/class.model.ts
import mongoose, { Document, Schema, Types } from "mongoose";
const ClassSchema = new mongoose.Schema({
    schoolId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "School",
        required: true,
        // index: true,
    },
    departmentsId: [
        {
            type: Schema.Types.ObjectId,
            ref: "Department",
        },
    ],
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true,
    },
    className: {
        type: String,
        required: true,
        enum: ["JSS1", "JSS2", "JSS3", "SS1", "SS2", "SS3"],
    },
    code: {
        type: String,
    },
    description: {
        type: String,
    },
}, { timestamps: true });
// ClassSchema.index({ tenant: 1, name: 1 }, { unique: true });
export const Class = mongoose.model("Class", ClassSchema);
//# sourceMappingURL=class.model.js.map