import { authOptions } from "./auth/[...nextauth]";
import { unstable_getServerSession } from "next-auth/next";

const { raw } = require("objection");

import Penguin from "../../data/models/Penguin";
import Code from "../../data/models/Code";
import UserCode from "../../data/models/UserCode";
import Inventory from "../../data/models/Inventory";

import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";
import timezone from "dayjs/plugin/timezone";

dayjs.extend(utc);
dayjs.extend(timezone);

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(400);
  }

  const session = await unstable_getServerSession(req, res, authOptions);

  if (!session) {
    return res.status(403);
  }

  const { code: codeValue } = req.body;

  if (!codeValue) {
    return res.status(422).json({
      error: "Please enter a valid Code.",
    });
  }

  const code = await Code.query().findOne({
    code: codeValue,
  });

  if (!code) {
    return res.status(422).json({
      error: "Please enter a valid Code.",
    });
  }

  const begins = dayjs.utc(code.begins);
  const expires = dayjs.utc(code.expires);

  const now = dayjs.utc();

  if (now.isBefore(begins)) {
    const beginsLocal = begins.tz("America/Los_Angeles").local().format("MMM D, YYYY h:mm a");

    return res.status(422).json({
      error: `Code is not redeemable until ${beginsLocal} PST.`,
    });
  }

  if (now.isAfter(expires)) {
    const expiresLocal = expires.tz("America/Los_Angeles").local().format("MMM D, YYYY h:mm a");

    return res.status(422).json({
      error: `Code expired on ${expiresLocal} PST.`,
    });
  }

  const { user } = session;
  const { id: userId } = user;

  const { id: codeId, limit, itemId, coins } = code;

  const penguin = await Penguin.query().findById(userId);

  if (!penguin) {
    return res.status(422).json({
      error: "Unable to find your Penguin.",
    });
  }

  const userCode = await UserCode.query().findOne({
    userId,
    codeId,
  });

  if (userCode) {
    return res.status(422).json({
      error: `Code has already been redeemed.`,
    });
  }

  if (limit) {
    const [result] = await UserCode.query().select(raw("COUNT(*)").as("total")).where({ codeId });

    const { total } = result;

    if (total >= limit) {
      return res.status(422).json({
        error: `This is a limited code that is no longer eligible for redemption.`,
      });
    }
  }

  await UserCode.query().insert({
    userId,
    codeId,
  });

  if (coins > 0) {
    const availableCoins = penguin.coins + coins;
    const coinsEarned = penguin.coinsEarned + coins;

    await penguin.$query().patch({
      coins: availableCoins,
      coinsEarned,
    });
  }

  if (itemId) {
    const found = await Inventory.query().findById([userId, itemId]);

    if (!found) {
      await Inventory.query().insert({
        userId,
        itemId,
      });
    }
  }

  return res.status(200).send();
}
