import type { NextFunction, Request, Response } from "express";

export const validateDepartment = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { name, schoolId, userId } = req.body;

  const errors = [];

  if (!name) {
    errors.push("name is required");
  }
  if (!schoolId) {
    errors.push("school Id is required");
  }
  if (!userId) {
    errors.push("user Id is required");
  }

  if (errors.length > 0) {
    return res.status(200).json({ message: errors });
  }

  next();
};
