import { authOptions } from "./auth/[...nextauth]";
import { unstable_getServerSession } from "next-auth/next";

import UserCode from "../../data/models/UserCode";

export default async function handler(req, res) {
  const session = await unstable_getServerSession(req, res, authOptions);

  if (!session) {
    return res.status(403).send();
  }

  const { user } = session;

  const codes = await UserCode.query()
    .where({
      userId: user.id,
    })
    .withGraphJoined("[code.[item]]");

  return res.status(200).json(codes);
}
