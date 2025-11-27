import { error } from "console";
import User from "../models/auth.model.js";
import { Class } from "../models/class.model.js";
import School from "../models/school.model.js";
import { JSS1Code, JSS2Code, JSS3Code, SS1Code, SS2Code, SS3Code, } from "../utils/class.code.utils.js";
import Department from "../models/department.model.js";
import { Student } from "../models/student.model.js";
export const classCreation = async (data, userId) => {
    const { className } = data;
    const user = await User.findById(userId);
    if (!user) {
        throw new Error("User does not exist");
    }
    if (user.role !== "superadmin") {
        throw new Error("Only the owner can perform this");
    }
    const existingClass = await Class.findOne({ className });
    if (existingClass) {
        throw new Error("Class already exist");
    }
    let classCode;
    if (className === "JSS1") {
        classCode = await JSS1Code();
    }
    else if (className === "JSS2") {
        classCode = await JSS2Code();
    }
    else if (className === "JSS3") {
        classCode = await JSS3Code();
    }
    else if (className === "SS1") {
        classCode = await SS1Code();
    }
    else if (className === "SS2") {
        classCode = await SS2Code();
    }
    else if (className === "SS3") {
        classCode = await SS3Code();
    }
    else {
        throw new Error("Invalid class name");
    }
    const createClass = new Class({
        ...data,
        code: classCode,
    });
    await createClass.save();
    return {
        message: `Class ${className} created successfully`,
        createClass,
    };
};
// select your class
export const chooseYourClass = async (data, userId) => {
    const { className, schoolId, departmentsId } = data;
    // 1. Check if school exists
    const school = await School.findById(schoolId);
    if (!school) {
        throw new Error("School does not exist");
    }
    // 2. Check if user exists
    const user = await User.findById(userId);
    if (!user) {
        throw new Error("User not found");
    }
    if (user.role !== "student") {
        throw new Error("Only students can select a class");
    }
    // 3. Check if student profile exists
    const student = await Student.findOne({ userId });
    if (!student) {
        throw new Error("Student profile not found");
    }
    // 4. Validate selected class
    const classData = await Class.findOne({ className });
    if (!classData) {
        throw new Error("Selected class does not exist");
    }
    // 5. Validate selected department
    const dept = await Department.findById(departmentsId);
    if (!dept) {
        throw new Error("Department not found");
    }
    // OPTIONAL: ensure department belongs to the class
    if (dept.classId?.toString() !== classData._id.toString()) {
        throw new Error("This department does not belong to the selected class");
    }
    // 6. Assign class and department to student
    student.classId = classData._id;
    student.departmentId = dept._id;
    student.schoolId = schoolId;
    await student.save();
    if (student.admissionNo) {
        user.adminVerification = true;
        user.hasClassId = true;
    }
    return {
        message: `Class ${className} selected successfully`,
        student,
    };
};
//# sourceMappingURL=class.service.js.map