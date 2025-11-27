import User from "../models/auth.model.js";
import Department from "../models/department.model.js";
export const departmentCreation = async (data, userId) => {
    const { name } = data;
    const isSuperAdmin = await User.findById(userId);
    if (!isSuperAdmin) {
        throw new Error("User not found");
    }
    if (isSuperAdmin.role != "superadmin") {
        throw new Error("Only owner can perform this operation");
    }
    // find by the name of the department
    const dept = await Department.findOne({ name });
    if (dept) {
        throw new Error("department has already been created");
    }
    const newDepartment = await Department.create({
        postedBy: {
            name: `${isSuperAdmin.firstName}${isSuperAdmin.otherName} ${isSuperAdmin.lastName}`,
        },
        ...data,
        userId: isSuperAdmin?.id,
    });
    await newDepartment.save();
    return newDepartment;
};
//# sourceMappingURL=department.service.js.map