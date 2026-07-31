// netlify/functions/contact.js
exports.handler = async (event) => {
  try {
    const data = JSON.parse(event.body || "{}");

    // Basic fields
    const name = data.name || "";
    const phone = data.phone || "";
    const bestTime = data.bestTime || "";

    // TODO: send email here (later)
    console.log("Contact form received:", { name, phone, bestTime });

    return {
      statusCode: 200,
      body: JSON.stringify({ ok: true }),
    };
  } catch (err) {
    return {
      statusCode: 500,
      body: JSON.stringify({ ok: false, error: String(err) }),
    };
  }
};