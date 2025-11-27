import mongoose, { Document, Schema, Types } from "mongoose";
const schoolSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    ownerId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
    },
    schoolEmail: {
        type: String,
        required: true,
    },
    schoolNumber: {
        type: String,
        required: true,
    },
    logo: {
        type: String,
        required: true,
    },
    image: {
        type: String,
    },
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
    },
    meta: { type: Schema.Types.Mixed },
}, { timestamps: true });
const School = mongoose.model("School", schoolSchema);
export default School;
//# sourceMappingURL=school.model.js.map