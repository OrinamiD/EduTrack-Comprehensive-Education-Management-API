import type { Request, Response } from "express";
import { chooseYourClass, classCreation } from "../services/class.service.js";

export const createClass = async (req: Request, res: Response) => {
  try {
    const { data } = req.body;

    const { createClass } = await classCreation(req.body);

    if (!createClass) {
      return res
        .status(400)
        .json({ success: false, message: "class was not created" });
    }

    return res.status(200).json({
      success: true,
      messsage: "class created successfully",
      classDetails: {
        className: createClass.className,
        description: createClass.description,
        code: createClass.code,
      },
    });
  } catch (error: any) {
    if (error.message === "School does not exist") {
      return res.status(404).json({
        success: false,
        messsage: error.message,
      });
    }
    if (error.message === "User does not exist") {
      return res.status(404).json({
        success: false,
        messsage: error.message,
      });
    }
    if (error.message === "Only the owner can perform this") {
      return res.status(400).json({
        success: false,
        messsage: error.message,
      });
    }
    if (error.message === "Class already exist") {
      return res.status(400).json({
        success: false,
        messsage: error.message,
      });
    }
    if (error.message === "Invalid Code") {
      return res.status(400).json({
        success: false,
        messsage: error.message,
      });
    } else {
      return res.status(500).json({
        success: false,
        messsage: error.message,
      });
    }
  }
};

export const selectYourClass = async (req: Request, res: Response) => {
  try {
    const { data, userId } = req.body;

    const { student } = await chooseYourClass(data, userId);

    if (!student) {
      return res
        .status(400)
        .json({ success: false, message: "did not generate class" });
    }

    return res
      .status(200)
      .json({ success: true, message: "class choosed successful", student });
  } catch (error: any) {
    if (error.message === "School does not exist") {
      return res.status(404).json({
        success: false,
        messsage: error.message,
      });
    }
    if (error.message === "User not found") {
      return res.status(404).json({
        success: false,
        messsage: error.message,
      });
    }
    if (error.message === "Only students can select a class") {
      return res.status(400).json({
        success: false,
        messsage: error.message,
      });
    }
    if (error.message === "Student profile not found") {
      return res.status(400).json({
        success: false,
        messsage: error.message,
      });
    }
    if (error.message === "Selected class does not exist") {
      return res.status(400).json({
        success: false,
        messsage: error.message,
      });
    }
    if (error.message === "Department not found") {
      return res.status(404).json({
        success: false,
        messsage: error.message,
      });
    }
    if (
      error.message === "This department does not belong to the selected class"
    ) {
      return res.status(400).json({
        success: false,
        messsage: error.message,
      });
    } else {
      return res.status(500).json({
        success: false,
        messsage: error.message,
      });
    }
  }
};
