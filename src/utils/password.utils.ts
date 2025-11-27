import bcrypt from "bcryptjs";

export const hashPassword = async (password: string) => {
  const hash = await bcrypt.hash(password, 12);

  return hash;
};

export const generateOTP = () => {
  const otp = Math.floor(100000 + Math.random() * 900000).toString(); // 6 digits
  const expiresAt = new Date(Date.now() + 5 * 60 * 1000); // current time + 5 minutes

  return otp;
};
