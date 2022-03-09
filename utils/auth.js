import bcrypt from "bcryptjs";

export const hashPassword = async (password) => {
  hashPassword = await bcrypt.hash(password, 12);
  return hashPassword;
};

export const comparePassword = async (password, hashedPassword) => {
  const result = await bcrypt.compare(password, hashedPassword);
  return result;
};
