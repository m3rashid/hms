import { PrismaClient } from "@prisma/client";

import { verifyPassword } from "../../../utils/auth";

const prisma = new PrismaClient();

const handler = async (req, res) => {
    if (req.method === "POST") {
        const { username, password, level } = req.body;
        if (!username || !password || !level) {
            res.status(422).json({ message: "Invalid Input" });
            return;
        }
        // check if the same username exists
        const user = await prisma['auth'].findFirst({
            where: { username: username },
        });

        if (user) {
            if (verifyPassword(password, user.password)) {
                res.json({
                    message: "User found",
                    user: user,
                });
            } else {
                res.status(422).json({ message: "Invalid Password" });
            }

        } else {
            res.status(422).json({ message: "Username does not exist" });
        }

    }
};

export default handler;
