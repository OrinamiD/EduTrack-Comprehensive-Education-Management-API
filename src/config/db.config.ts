import mongoose from "mongoose";

import dotenv from "dotenv";

dotenv.config();

export const PORT = process.env.PORT || 5000;

export const connectedDB = async () => {
  try {
    await mongoose
      .connect(`${process.env.MONGODB_URL}`)
      .then(() => console.log("Server connected successfully..."));
  } catch (error: any) {
    if (error) {
      throw new Error(error.message);
    }
  }
};
