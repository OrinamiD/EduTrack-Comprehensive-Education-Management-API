import mongoose, { Schema, Document, Types } from "mongoose";
const notificationSchema = new mongoose.Schema({
    schoolId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "School",
        required: true,
        // index: true,
    },
    title: {
        type: String,
        required: true,
    },
    message: {
        type: String,
        required: true,
    },
    target: {
        type: String,
        enum: [
            "all",
            "student",
            "teacher",
            "parent",
            "admin",
            "accountant",
            "librarian",
            "superadmin",
        ],
        default: "all",
    },
    recipients: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
        },
    ],
    sentBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
    },
    isRead: {
        type: Boolean,
        default: false,
    },
}, { timestamps: true });
// notificationSchema.index({ tenant: 1, target: 1 });
export const Notification = mongoose.model("Notification", notificationSchema);
//# sourceMappingURL=notification.model.js.map