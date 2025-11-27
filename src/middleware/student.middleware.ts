import type { NextFunction, Request, Response } from "express";

export const validateStudent = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { parentContact, medicalInfo } = req.body;

  const errors = [];

  if (!parentContact.phone) {
    errors.push("Enter your parent phone number");
  }
  if (!parentContact.email) {
    errors.push("Enter your parent email address");
  }
  if (!medicalInfo) {
    errors.push("Enter your medical information");
  }

  if (errors.length > 0) {
    return res.status(200).json({ sucess: false, message: errors });
  }
  next();
};
