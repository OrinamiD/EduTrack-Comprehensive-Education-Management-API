import type { Request, Response } from "express";
import { schoolCreate } from "../services/school.service.js";

export const createSchool = async (
  req: Request<{ userId: string }>,
  res: Response
) => {
  try {
    const { userId } = req.params;
    const { data } = req.body;

    const { school, user } = await schoolCreate(data, userId);

    return res.status(400).json({
      success: false,
      message: "school created successful",
      schoolDetails: {
        schoolName: school.name,
        schoolId: school.id,
        schoolEmail: school.schoolEmail,
        schoolNumber: school.schoolNumber,
        ownerId: user.id,
        ownerName: `${user.firstName}${user.otherName} ${user.lastName}`,
      },
    });
  } catch (error: any) {
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
    if (error.message === "School already exist") {
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
