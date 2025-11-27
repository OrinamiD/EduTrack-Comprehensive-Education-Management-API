import type { Request, Response } from "express";
import { departmentCreation } from "../services/department.service.js";

export const craeteDepartment = async (
  req: Request<{ userId: string }>,
  res: Response
) => {
  try {
    const { userId } = req.params;
    const { data } = req.body;

    const createdDepartment = await departmentCreation(data, userId);

    if (!createdDepartment) {
      return res
        .status(400)
        .json({ success: false, message: "department was not created" });
    }

    return res.status(200).json({
      success: true,
      messsage: "department created successfully",
      createdDepartment,
    });
  } catch (error: any) {
    if (error.message === "User not found") {
      return res.status(404).json({
        success: false,
        messsage: error.message,
      });
    }
    if (error.message === "Only owner can perform this operation") {
      return res.status(400).json({
        success: false,
        messsage: error.message,
      });
    }
    if (error.message === "department has already been created") {
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
