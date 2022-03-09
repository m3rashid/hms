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
    // check if the same username exists
    const user = await prisma.user.findOne({
      where: { username: username },
    });

    // hash the password
    const hashedPassword = await hashPassword(password);

    // store the user in the database
  }
};

export default handler;
