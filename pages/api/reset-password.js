import mail from "@sendgrid/mail";
import config from "../../config";
import bcrypt from "bcrypt";
import crypto from "crypto";

import fs from "fs";

mail.setApiKey(config.server.sendgrid.apiKey);

import Penguin from "../../data/models/Penguin";

const template = fs.readFileSync("assets/mail/reset-password.html").toString();

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(400);
  }

  const { username, email } = req.body;

  if (!username || !email) {
    return res.status(422).send();
  }

  const penguin = await Penguin.query().findOne({
    username,
    email,
  });

  if (penguin) {
    const password = crypto.randomBytes(8).toString("hex");

    let updatedTemplate = template;
    updatedTemplate = updatedTemplate.replace("{{PENGUIN_NAME}}", penguin.username);
    updatedTemplate = updatedTemplate.replace("{{PASSWORD}}", password);

    const message = {
      to: penguin.email,
      from: {
        email: "noreply@cpplus.pw",
        name: "CP Forever",
      },
      subject: "Your New Password",
      html: updatedTemplate,
    };

    try {
      await mail.send(message);
    } catch (err) {
      return res.status(422).send();
    }

    const hashedPassword = await bcrypt.hash(password, 12);

    await penguin.$query().patch({
      password: hashedPassword,
    });
  }

  return res.status(200).send();
}
