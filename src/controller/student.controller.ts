import type { Request, Response } from "express";
import { registerStudentsInfo } from "../services/student.service.js";
import { Student } from "../models/student.model.js";

import type { IUser } from "../models/auth.model.js"; // import your User interface

export const studentRegistration = async (req: Request, res: Response) => {
  try {
    const { data, className } = req.body;

    // Register student (returns a Mongoose doc, not yet saved)
    const registeredStudent = await registerStudentsInfo(data, className);

    if (!registeredStudent) {
      return res.status(400).json({
        success: false,
        message: "Registration failed",
      });
    }

    // Save to database
    await registeredStudent.save();

    // Populate userId properly
    const populatedStudent = await Student.findById(registeredStudent._id)
      .populate<{ userId: IUser }>("userId") // Tell TS that userId is a IUser
      .exec();

    if (!populatedStudent) {
      return res
        .status(404)
        .json({ success: false, message: "Student not found" });
    }

    return res.status(201).json({
      success: true,
      message: "Registration successful",
      studentDetails: {
        school: populatedStudent.userId.schoolId,
        firstName: populatedStudent.userId.firstName,
        otherName: populatedStudent.userId.otherName,
        lastName: populatedStudent.userId.lastName,
        gender: populatedStudent.userId.gender,
        parentContact: populatedStudent.parentContact,
        currentClass: populatedStudent.currentClass,
        medicalInfo: populatedStudent.medicalInfo,
        status: populatedStudent.status,
        admissionNo: populatedStudent.admissionNo,
        hasClassId: populatedStudent.userId.hasClassId,
      },
    });
  } catch (error: any) {
    if (error.message === "User does not exist") {
      return res.status(400).json({
        success: false,
        messsage: error.message,
      });
    }
    if (error.message === "Contact your class Teacher") {
      return res.status(400).json({
        success: false,
        messsage: error.message,
      });
    }
    if (error.message === "You are already a student") {
      return res.status(400).json({
        success: false,
        messsage: error.message,
      });
    } else {
      return res.status(400).json({
        success: false,
        messsage: error.message,
      });
    }
  }
};
