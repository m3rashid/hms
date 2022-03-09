import bcrypt from "bcryptjs";

export const hashPassword = async (password) => {
  hashPassword = await bcrypt.hash(password, 12);
  return hashPassword;
};

export const verifyPassword = async (password, hashedPassword) => {
  const isValid = await bcrypt.compare(password, hashedPassword);
  return isValid;
};
