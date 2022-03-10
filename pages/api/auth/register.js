import { PrismaClient } from "@prisma/client";

import { hashPassword } from "../../../utils/auth";

const prisma = new PrismaClient();

const handler = async (req, res) => {
  if (req.method === "POST") {
    const { username, password, level } = req.body;
    if (!username || !password || !level) {
      res.status(422).json({ message: "Invalid Input" });
      return;
    }

    try {
      const user = await prisma["auth"].findOne({
        where: { username: username },
      });

      if (user) {
        res.status(409).json({ message: "Username already exists" });
        return;
      }
      let hashedPassword = await hashPassword(password);
      const newUser = await prisma["auth"].create({
        data: {
          username: username,
          password: hashedPassword,
          level: level,
        },
      });

      return res.status(201).json({
        message: "User created successfully",
        user: newUser,
      });
    } catch (err) {
      console.log(err);
      return res.status(422).json({
        message: "Error creating user",
      });
    }
  }
};

export default handler;
