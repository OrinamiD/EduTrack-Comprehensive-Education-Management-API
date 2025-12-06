import User from "../models/auth.model.js";
import type { IDepartment } from "../models/department.model.js";
import Department from "../models/department.model.js";
import School from "../models/school.model.js";

export const departmentCreation = async (data: IDepartment, userId: String) => {
  const { name } = data;

  // const school = await School.findById(userId);

  // if (!school) {
  //   throw new Error("You are not a registered member of this college");
  // }

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
