import { authOptions } from "./auth/[...nextauth]";
import { unstable_getServerSession } from "next-auth/next";

import Ban from "../../data/models/Ban";

export default async function handler(req, res) {
  const session = await unstable_getServerSession(req, res, authOptions);

  if (!session) {
    return res.status(403).send();
  }

  const { user } = session;

  const bans = await Ban.query().where({
    userId: user.id,
  });

  return res.status(200).json(bans);
}
