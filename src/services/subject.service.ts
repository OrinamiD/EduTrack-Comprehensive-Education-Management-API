import User from "../models/auth.model.js";
import { Class } from "../models/class.model.js";
import School from "../models/school.model.js";
import { Subject, type ISubject } from "../models/subject.model.js";
import type { GetSubject, UpdateSubject } from "../types/subject.types.js";
import {
  agriculture,
  basicScience,
  basicTech,
  biology,
  chemistry,
  commerce,
  CRS,
  economics,
  english,
  furtherMathematics,
  goverment,
  mathematics,
  physics,
  socialStudies,
} from "../utils/subject.code.utils.js";

// create subject
export const subjectCreation = async (data: ISubject) => {
  const { schoolId, userId, classId, code } = data;

  const existingSchool = await School.findById(schoolId);

  if (!existingSchool) {
    throw new Error(
      "you are not recognize in this college. Please pick your form today"
    );
  }

  const user = await User.findById(userId);

  if (!user) {
    throw new Error("user does not exist");
  }

  if (user.role != "admin") {
    throw new Error("only admin");
  }

  const existingClass = await Class.findById(classId);

  if (!existingClass) {
    throw new Error("No existing class at the moment");
  }

  const subject = await Subject.findOne({ code });

  if (subject) {
    throw new Error("Subject already created");
  }

  const newSubject = new Subject({
    ...data,
    userId: user?._id,
    schoolId: schoolId._id,
  });

  await newSubject.save();

  let studentCode: string;

  if ((await newSubject.name) === "maths") {
    studentCode = await mathematics();
  }
  if ((await newSubject.name) === "english") {
    studentCode = await english();
  }
  if ((await newSubject.name) === "basic-science") {
    studentCode = await basicScience();
  }
  if ((await newSubject.name) === "basic-tech") {
    studentCode = await basicTech();
  }
  if ((await newSubject.name) === "CRS") {
    studentCode = await CRS();
  }
  if ((await newSubject.name) === "social-studies") {
    studentCode = await socialStudies();
  }
  if ((await newSubject.name) === "furtherMathematics") {
    studentCode = await furtherMathematics();
  }
  if ((await newSubject.name) === "chemistry") {
    studentCode = await chemistry();
  }
  if ((await newSubject.name) === "physics") {
    studentCode = await physics();
  }
  if ((await newSubject.name) === "biology") {
    studentCode = await biology();
  }
  if ((await newSubject.name) === "agriculture") {
    studentCode = await agriculture();
  }
  if ((await newSubject.name) === "economics") {
    studentCode = await economics();
  }
  if ((await newSubject.name) === "commerce") {
    studentCode = await commerce();
  }
  if ((await newSubject.name) === "goverment") {
    studentCode = await goverment();
  }

  // await newSubject.code = studentCode

  // await newSubject.save()

  return { user: user, newSubject };
};

// update subject

export const subjectUpdate = async (data: UpdateSubject) => {
  const { name, code, description, userId, schoolId, createdBy, id } = data;

  const school = await School.findById(schoolId);

  if (!school) {
    throw new Error("Not recognized");
  }

  const user = await User.findById(userId);

  if (!user) {
    throw new Error("No active user");
  }

  const owner = await User.findById(createdBy);

  if (!owner) {
    throw new Error("Not the owner");
  }

  if (user != owner) {
    throw new Error("You are not allowed");
  }

  if (owner.role != "superadmin") {
    throw new Error("Only Super Admin");
  }

  const isReadyToUpdate = await Subject.findById(id);

  if (!isReadyToUpdate) {
    throw new Error("No such Subject");
  }

  const update = await Subject.findByIdAndUpdate(
    id,
    { name, code, description },
    { new: true }
  );

  await update?.save();

  return { user: user, update };
};

// get one subject for each class

export const getSubject = async (data: GetSubject) => {
  const { userId, subjectId, code, name } = data;
  const user = await User.findById(userId);

  if (!user) {
    throw new Error("user does not exist");
  }

  const subject = await Subject.findOne({
    $or: [{ subjectId }, { code }, { name }],
  });

  if (!subject) {
    throw new Error("subject does not exist");
  }

  return { subject: subject, message: "fetched successfully" };
};

// get all subject per class

export const allSubject = async (userId: string) => {
  const user = await User.findById(userId);

  if (!user) {
    throw new Error("User does not exist");
  }

  const allSubject = await Subject.find();

  if (!allSubject) {
    throw new Error("No registered Subject");
  }

  return { subjects: allSubject, message: "fetched successfully" };
};

// delete subject

export const subjectDeletion = async (subjectId: string, userId: string) => {
  const user = await User.findById(userId);

  if (!user) {
    throw new Error("user does not exist");
  }

  const subject = await Subject.findByIdAndUpdate(subjectId, {
    deleted: true,
    deletedAt: new Date(),
  });

  if (!subject) {
    throw new Error("subject does not exist");
  }

  await subject.save();

  return subject;
};
