import mongoose, { Schema, Document, Types, model } from "mongoose";
const departmentSchema = new mongoose.Schema({
    name: {
        type: String,
        enum: [
            "science",
            "commercial",
            "art",
            "accounting",
            "libray",
            "driving",
            "administrative",
        ],
        required: true,
        trim: true,
    },
    schoolId: {
        type: Schema.Types.ObjectId,
        ref: "School",
        required: true,
    },
    classId: {
        type: Schema.Types.ObjectId,
        ref: "Class",
    },
    userId: {
        type: Schema.Types.ObjectId,
        ref: "User",
        required: true,
    },
    staffIds: [
        {
            type: Schema.Types.ObjectId,
            ref: "Staff",
        },
    ],
    studentIds: [
        {
            type: Schema.Types.ObjectId,
            ref: "Student",
        },
    ],
}, {
    timestamps: true,
});
const Department = model("Department", departmentSchema);
export default Department;
//# sourceMappingURL=department.model.js.map