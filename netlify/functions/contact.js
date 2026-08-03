const parseFormBody = (body) => {
  if (!body) {
    return {};
  }

  try {
    return JSON.parse(body);
  } catch {
    const params = new URLSearchParams(body);
    return Object.fromEntries(params.entries());
  }
};

export const handler = async (event) => {
  if (event.httpMethod !== "POST") {
    return {
      statusCode: 405,
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ ok: false, error: "Method not allowed" }),
    };
  }

  try {
    const data = parseFormBody(event.body || "");
    console.log("Contact form received", data);

    return {
      statusCode: 200,
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ ok: true, received: true }),
    };
  } catch (err) {
    console.error("Contact form error:", err);
    return {
      statusCode: 500,
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ ok: false, error: String(err) }),
    };
  }
};