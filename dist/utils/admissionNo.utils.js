import { Student } from "../models/student.model.js";
// student addmission no for Junior school
export const juniorAdmissionNo = async () => {
    let student = "SAAC/Student/JS";
    let counter = await Student.findOne({ key: "admissionNo" });
    if (!counter) {
        counter = await Student.create({ key: "admissionNo", lastNo: 0 });
    }
    counter.lastNo += 1; // increase to 1, 2, 3, ...
    await counter.save();
    const padded = counter.lastNo.toString().padStart(6, "0");
    return `${student}${padded}`;
};
// student addmission no for Senior school
export const seniorAdmissionNo = async () => {
    let student = "SAAC/Student/SS";
    let counter = await Student.findOne({ key: "admission" });
    if (!counter) {
        counter = await Student.create({ key: "admissionNo", lastNo: 0 });
    }
    counter.lastNo += 1; // increase to 1, 2, 3, ...
    await counter.save();
    const padded = counter.lastNo.toString().padStart(6, "0");
    return `${student}${padded}`;
};
// // tutor staff  no
export const tutorAdmissionNo = (prefex = "SAAC/Tutor/") => {
    const staffNo = Math.floor(100000 + Math.random() * 900000).toString();
    return `${prefex}${staffNo}`;
};
// accountant staff  no
export const accountantAdmissionNo = (prefex = "SAAC/Accountant/") => {
    const staffNo = Math.floor(100000 + Math.random() * 900000).toString();
    return `${prefex}${staffNo}`;
};
// librarian staff  no
export const librarianAdmissionNo = (prefex = "SAAC/Librarian/") => {
    const staffNo = Math.floor(100000 + Math.random() * 900000).toString();
    return `${prefex}${staffNo}`;
};
// admin staff no
export const adminAdmissionNo = (prefex = "SAAC/Admin") => {
    const staffNo = Math.floor(100000 + Math.random() * 900000).toString();
    return `${prefex}${staffNo}`;
};
// Driver addmission no for Junior
export const schoolissionNo = (prefex = "SAAC/Driver") => {
    const staffNo = Math.floor(100000 + Math.random() * 900000).toString();
    return `${prefex}${staffNo}`;
};
//# sourceMappingURL=admissionNo.utils.js.map