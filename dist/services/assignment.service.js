import { title } from "process";
import { Assignment } from "../models/assignment.model.js";
import User from "../models/auth.model.js";
import { Class } from "../models/class.model.js";
import School from "../models/school.model.js";
import { Session } from "../models/session.model.js";
import { Staff } from "../models/staff.model.js";
import { Subject } from "../models/subject.model.js";
// post assignment
export const assignmentCreation = async (data) => {
    const { schoolId, classId, sessionId, subjectId, assignedBy, title, staffId, } = data;
    const existingSchool = await School.findById(schoolId);
    if (!existingSchool) {
        throw new Error("School does not exist");
    }
    const user = await User.findById(assignedBy).select("firstName otherName lastName email _id");
    if (!user) {
        throw new Error("user does not exist");
    }
    const existingClass = await Class.findById(classId);
    if (!existingClass) {
        throw new Error("class does not exist");
    }
    const validSession = await Session.findById(sessionId);
    if (!validSession) {
        throw new Error("Invalid session");
    }
    const validSubject = await Subject.findById(subjectId);
    if (!validSubject) {
        throw new Error("Invalid subject");
    }
    const isStaff = await Staff.findById(staffId);
    if (!isStaff) {
        throw new Error("You are not part of the school");
    }
    if (isStaff.subjectsId != validSubject.id) {
        throw new Error("You are not authorized");
    }
    const existingAssignment = await Assignment.findOne({ title });
    if (existingAssignment) {
        throw new Error("Assignment already exist");
    }
    const newAssignment = new Assignment({
        ...data,
        id: user?._id,
        startDate: Date.now(),
        dueDate: new Date(), // 7 days
    });
    await newAssignment.save();
    //   if (newAssignment.dueDate != Date.now()) {
    //     newAssignment.isaActive = true;
    //     newAssignment.save();
    //   }
    return newAssignment;
};
// update assignment
// export const 
//# sourceMappingURL=assignment.service.js.map