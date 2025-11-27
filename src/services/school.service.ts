import { error } from "console";
import User from "../models/auth.model.js";
import type { ISchool } from "../models/school.model.js";
import School from "../models/school.model.js";

export const schoolCreate = async (data: ISchool, userId: string) => {
  const { name } = data;

  const user = await User.findById(userId);

  if (!user) {
    throw new Error("User does not exist");
  }

  if (user.role != "superadmin") {
    throw new Error("Only the owner can perform this");
  }

  const school = await School.findOne({ name });

  if (school) {
    throw new Error("School already exist");
  }

  const newSchool = await School.create({
    ...data,
    ownerId: userId,
  });

  await newSchool.save();

  if (newSchool.id) {
    user.hasSchoolId = true;
  }

  return { school: newSchool, user };
};
