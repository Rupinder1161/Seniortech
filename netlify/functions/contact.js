import nodemailer from "nodemailer";

export const handler = async (event) => {
  try {
    const data = JSON.parse(event.body || "{}");

    const name = data.name || "";
    const phone = data.phone || "";
    const bestTime = data.bestTime || "";

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

    return {
      statusCode: 200,
      body: JSON.stringify({ ok: true }),
    };
  } catch (err) {
    console.error("Email send error:", err);
    return {
      statusCode: 500,
      body: JSON.stringify({ ok: false, error: String(err) }),
    };
  }
};