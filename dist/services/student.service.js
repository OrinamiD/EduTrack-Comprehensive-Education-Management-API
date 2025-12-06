import User from "../models/auth.model.js";
import { Class } from "../models/class.model.js";
import School from "../models/school.model.js";
import { Student } from "../models/student.model.js";
import { juniorAdmissionNo, seniorAdmissionNo, } from "../utils/admissionNo.utils.js";
export const registerStudentsInfo = async (data, className) => {
    const { id, admissionNo, schoolId } = data;
    const existingSchool = await School.findById(schoolId);
    if (!existingSchool) {
        throw new Error("You are not a register member of this school.");
    }
    const user = await User.findById(id).populate("school firstName otherName lastName gender DOB address");
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
    let newAdmissionNo;
    if (["JSS1", "JSS2", "JSS3"].includes(studentClass.className)) {
        newAdmissionNo = await juniorAdmissionNo();
    }
    else if (["SS1", "SS2", "SS3"].includes(studentClass.className)) {
        newAdmissionNo = await seniorAdmissionNo();
    }
    else {
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
//# sourceMappingURL=student.service.js.map