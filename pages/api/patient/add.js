import { PrismaClient } from "@prisma/client";
import { getSession } from "next-auth/react";

const prisma = new PrismaClient();

const handler = async (req, res) => {
  const { session } = await getSession({ req });
  if (session == undefined)
    return res.status(401).json({ message: "Unauthorized" });
  if (req.method === "POST") {
    console.log(session);

    const body = req.body;
    console.log("API", body);
    const patient = await prisma.patient.create({
      data: {
        ...body,
        age: parseInt(body.age),
        lastVisit: new Date(body.lastVisit),
      },
    });

    res.json(patient);
  } else {
    res.status(405).json({
      message: "Method not allowed",
    });
  }
};

export default handler;
