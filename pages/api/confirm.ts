import { sendEmail } from "./../../services/shared/mailer";
import { NextApiRequest, NextApiResponse } from "next";
import { getStaticMail } from "../../services/shared/template";
import Logger from "../../services/shared/logger";

export default async function confirm(
  req: NextApiRequest,
  res: NextApiResponse
): Promise<void> {
  if (req.method !== "POST") {
    res.status(404).json({
      message: "Route Not Found",
    });
    return;
  }
  Logger.info(req.body);
  try {
    await sendEmail(
      getStaticMail(
        req.body.form_response.answers[2].email,
        "skilltober",
        "confirmation"
      )
    );
    res.status(200).json({
      message: "Mail Sent",
    });
  } catch (e: any) {
    Logger.error(e.message);
    res.status(e.status || 500).json({
      message: e.message || "Server Error",
    });
  }
}
