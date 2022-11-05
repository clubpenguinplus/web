import bcrypt from "bcrypt";

import { authOptions } from "./auth/[...nextauth]";
import { unstable_getServerSession } from "next-auth/next";

import Penguin from "../../data/models/Penguin";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(400);
  }

  const session = await unstable_getServerSession(req, res, authOptions);

  if (!session) {
    return res.status(403);
  }

  const { password } = req.body;

  if (!password || password.length < 6 || password.length > 32) {
    return res.status(422).json({
      error: "Password must be between 6 and 32 characters.",
    });
  }

  const { user } = session;
  const { id: userId } = user;

  const hashedPassword = await bcrypt.hash(password, 12);

  try {
    const penguin = await Penguin.query().findById(userId);

    await penguin.$query().patch({
      password: hashedPassword,
    });
  } catch (err) {
    return res.status(500).send();
  }

  return res.status(200).send();
}
