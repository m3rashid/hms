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
      // check if the same username exists
      const user = await prisma['auth'].findOne({
        where: { username: username },
      });

      if (user) {
        res.status(422).json({ message: "Username already exists" });
        return;
      }
    } catch (err) {
      console.log(err);
    }
    // hash the password
    let hashedPassword = await hashPassword(password);

    // store the user in the database
    const newUser = await prisma['auth'].create({
      data: {
        username: username,
        password: hashedPassword,
        level: level,
      },
    });

    res.json({
      message: "User created successfully",
      user: newUser,
    });
  }
};

export default handler;
