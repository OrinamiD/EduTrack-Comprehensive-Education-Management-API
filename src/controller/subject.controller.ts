import type { Request, Response } from "express";
import {
  allSubject,
  getSubject,
  subjectCreation,
  subjectDeletion,
  subjectUpdate,
} from "../services/subject.service.js";

// create subject
export const createSubject = async (req: Request, res: Response) => {
  try {
    const { schoolId, userId, classId, code } = req.body;
    const craetedSubject = await subjectCreation(req.body);

    return res.status(200).json({
      sucess: true,
      message: "subject craeted successfully",
      craetedSubject,
    });
  } catch (error: any) {
    if (
      error.message ===
      "you are not recognize in this college. Please pick your form today"
    ) {
      return res.status(400).json({
        sucess: false,
        message: error.message,
      });
    }
    if (error.message === "user does not exist") {
      return res.status(404).json({
        sucess: false,
        message: error.message,
      });
    }
    if (error.message === "only admin") {
      return res.status(400).json({
        sucess: false,
        message: error.message,
      });
    }
    if (error.message === "No existing class at the moment") {
      return res.status(404).json({
        sucess: false,
        message: error.message,
      });
    }
    if (error.message === "Subject already created") {
      return res.status(400).json({
        sucess: false,
        message: error.message,
      });
    } else {
      return res.status(500).json({
        sucess: false,
        message: error.message,
      });
    }
  }
};

// update subject

export const updateSubject = async (req: Request, res: Response) => {
  try {
    const { name, code, description, userId, schoolId, createdBy, id } =
      req.body;

    const { user, update } = await subjectUpdate(req.body);

    return res.status(200).json({
      success: true,
      message: "supdated successfully",
      userDetails: {
        updatedBy: user.id,
        update,
      },
    });
  } catch (error: any) {
    if (error.message === "Not recognized") {
      return res.status(404).json({
        success: false,
        message: error.message,
      });
    }
    if (error.message === "No active user") {
      return res.status(404).json({
        success: false,
        message: error.message,
      });
    }
    if (error.message === "Not the owner") {
      return res.status(404).json({
        success: false,
        message: error.message,
      });
    }
    if (error.message === "You are not allowed") {
      return res.status(400).json({
        success: false,
        message: error.message,
      });
    }
    if (error.message === "Only Super Admin") {
      return res.status(400).json({
        success: false,
        message: error.message,
      });
    }
    if (error.message === "No such Subject") {
      return res.status(400).json({
        success: false,
        message: error.message,
      });
    } else {
      return res.status(500).json({
        success: false,
        message: error.message,
      });
    }
  }
};

// get one subject for each class

export const getOneSubject = async (req: Request, res: Response) => {
  try {
    const { subject } = await getSubject(req.body);

    return res.status(200).json({
      success: true,
      message: "updated successfully",
      subject,
    });
  } catch (error: any) {
    if (error.message === "user does not exist") {
      return res.status(404).json({
        success: false,
        message: error.message,
      });
    }
    if (error.message === "subject does not exist") {
      return res.status(404).json({
        success: false,
        message: error.message,
      });
    }
  }
};

// get all subject per class

export const getAllSubject = async (req: Request, res: Response) => {
  try {
    const { userId } = req.params;

    const subjects = await allSubject(userId as string);

    return res.status(200).json({
      success: true,
      message: "fetched",
      subjects,
    });
  } catch (error: any) {
    if (error.message === "User does not exist") {
      return res.status(404).json({
        success: false,
        message: error.message,
      });
    }
    if (error.message === "No registered Subject") {
      return res.status(404).json({
        success: false,
        message: error.message,
      });
    } else {
      return res.status(500).json({
        success: false,
        message: error.message,
      });
    }
  }
};

// delete subject

export const deleteSubject = async (req: Request, res: Response) => {
  try {
    const { subjectId, userId } = req.body;

    const deletedSubject = await subjectDeletion(subjectId, userId);

    if (!deletedSubject) {
      return res
        .status(200)
        .json({ sucess: false, message: "Can not delete Subject" });
    }

    return res
      .status(200)
      .json({ success: true, message: "deleted successfully" });
  } catch (error: any) {
    if (error.message === "user does not exist") {
      return res.status(404).json({ success: false, message: error.message });
    }
    if (error.message === "subject does not exist") {
      return res.status(404).json({ success: false, message: error.message });
    } else {
      return res.status(500).json({ success: false, message: error.message });
    }
  }
};
