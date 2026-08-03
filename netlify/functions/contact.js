import nodemailer from "nodemailer";

const parseFormBody = (body) => {
  if (!body) {
    return {};
  }

  const params = new URLSearchParams(body);
  return Object.fromEntries(params.entries());
};

export const handler = async (event) => {
  if (event.httpMethod !== "POST") {
    return {
      statusCode: 405,
      body: JSON.stringify({ ok: false, error: "Method not allowed" }),
    };
  }

  try {
    const data = parseFormBody(event.body || "");

    const name = data.name || "";
    const phone = data.phone || "";
    const bestTime = data.bestTime || "";

    const hasSmtpConfig = process.env.SMTP_HOST && process.env.SMTP_USER && process.env.SMTP_PASS;

    if (hasSmtpConfig) {
      const transporter = nodemailer.createTransport({
        host: process.env.SMTP_HOST,
        port: Number(process.env.SMTP_PORT || 587),
        secure: false,
        auth: {
          user: process.env.SMTP_USER,
          pass: process.env.SMTP_PASS,
        },
      });

      const text =
        `New contact request from website\n\n` +
        `Name: ${name}\n` +
        `Phone: ${phone}\n` +
        `Best time to call: ${bestTime}\n`;

      await transporter.sendMail({
        from: process.env.MAIL_FROM || process.env.SMTP_USER,
        to: process.env.MAIL_TO,
        subject: "New Senior Tech contact request",
        text,
      });
    } else {
      console.log("Contact form received without SMTP configuration", { name, phone, bestTime });
    }

    return {
      statusCode: 200,
      body: JSON.stringify({ ok: true }),
    };
  } catch (err) {
    console.error("Contact form error:", err);
    return {
      statusCode: 500,
      body: JSON.stringify({ ok: false, error: String(err) }),
    };
  }
};