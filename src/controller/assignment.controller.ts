import type { Request, Response } from "express";
import { assignmentCreation } from "../services/assignment.service.js";

export const postAssignment = async (req: Request, res: Response) => {
  try {
    const { schoolId, classId, sessionId, subjectId, assignedBy, title } =
      req.body;

    const postedAssignment = await assignmentCreation(req.body);

    if (!postedAssignment) {
      return res
        .status(201)
        .json({ success: false, message: "Can not create assignment" });
    }

    return res.status(201).json({
      success: true,
      message: "Assignment posted successfullly",
      postedAssignment,
    });
  } catch (error: any) {
    if (error.message === "School does not exist") {
      return res.status(404).json({ success: false, message: error.message });
    }
    if (error.message === "user does not exist") {
      return res.status(404).json({ success: false, message: error.message });
    }
    if (error.message === "class does not exist") {
      return res.status(404).json({ success: false, message: error.message });
    }
    if (error.message === "Invalid session") {
      return res.status(400).json({ success: false, message: error.message });
    }
    if (error.message === "Invalid subject") {
      return res.status(400).json({ success: false, message: error.message });
    }
    if (error.message === "You are not part of the school") {
      return res.status(400).json({ success: false, message: error.message });
    }
    if (error.message === "You are not authorized") {
      return res.status(400).json({ success: false, message: error.message });
    }
    if (error.message === "Assignment already exist") {
      return res.status(400).json({ success: false, message: error.message });
    }
  }
};

// update assignment

export const updateInstructor = async (req: Request, res: Response) => {
  try {
    return res
      .status(200)
      .json({ message: "updated successfully", updateInstructor });
  } catch (error) {
    return res.status(200).json({ message: error });
  }
};
