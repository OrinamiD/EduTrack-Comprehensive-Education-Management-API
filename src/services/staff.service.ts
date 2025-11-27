import User from "../models/auth.model.js";
import { Staff, type IStaff } from "../models/staff.model.js";
import Department from "../models/department.model.js";
import {
  account,
  art,
  commercial,
  driver,
  libray,
  science,
} from "../utils/staff.ID.utils.js";
import { adminAdmissionNo } from "../utils/admissionNo.utils.js";
import School from "../models/school.model.js";

export const staffReg = async (data: IStaff, name: string[]) => {
  const { userId, staffId, schoolId } = data;

  const school = await School.findById(schoolId);

  if (!school) {
    throw new Error("You are not a member of this school");
  }

  const user = await User.findById(userId);

  if (!user) {
    throw new Error("User not found");
  }

  if (user.role === "student" || user.role === "parent") {
    throw new Error("keep off");
  }

  const dept = await Department.findOne({ name });

  if (!dept) {
    throw new Error("No such department");
  }

  const staff = await Staff.findById(staffId);

  if (staff) {
    throw new Error("Your a staff. Login");
  }

  // generate staff id
  let newStaffId: string;

  if (dept.name === "science") {
    newStaffId = await science();
  }
  if (dept.name === "commercial") {
    newStaffId = await commercial();
  }
  if (dept.name === "art") {
    newStaffId = await art();
  }
  if (dept.name === "administrative") {
    newStaffId = await adminAdmissionNo();
  }
  if (dept.name === "accounting") {
    newStaffId = await account();
  }
  if (dept.name === "libray") {
    newStaffId = await libray();
  }
  if (dept.name === "driving") {
    newStaffId = await driver();
  } else {
    throw new Error("Invalid department name");
  }

  const newStaff = await Staff.create({
    ...data,
    userId: user?._id,
  });

  await newStaff.save();

  if (newStaff.staffId) {
    user.hasStaffId = true;
  }

  return newStaff;
};
