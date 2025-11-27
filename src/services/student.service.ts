import User from "../models/auth.model.js";
import { Class } from "../models/class.model.js";
import { Student, type IStudent } from "../models/student.model.js";
import {
  juniorAdmissionNo,
  seniorAdmissionNo,
} from "../utils/admissionNo.utils.js";

export const registerStudentsInfo = async (
  data: IStudent,
  className: string
) => {
  const { id, admissionNo } = data;

  const user = await User.findById(id).populate(
    "school firstName otherName lastName gender DOB address"
  );
  if (!user) {
    throw new Error("User does not exist");
  }

  const studentClass = await Class.findOne({ className });

  if (!studentClass) {
    throw new Error("Contact your class Teacher");
  }

  const existingStudent = await Student.findOne({ admissionNo });

  if (existingStudent) {
    throw new Error("You are already a student");
  }

  let newAdmissionNo: string;

  if (["JSS1", "JSS2", "JSS3"].includes(studentClass.className)) {
    newAdmissionNo = await juniorAdmissionNo();
  } else if (["SS1", "SS2", "SS3"].includes(studentClass.className)) {
    newAdmissionNo = await seniorAdmissionNo();
  } else {
    throw new Error("Invalid class");
  }

  const studentInfo = new Student({
    ...data,
    userId: user?._id,
    admissionNo: newAdmissionNo,
  });

  await studentInfo.save();

  if (studentInfo.admissionNo) {
    user.hasStudentId = true;
  }

  return studentInfo;
};
