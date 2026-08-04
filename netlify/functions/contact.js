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

const rateLimitWindowMs = 5 * 60 * 1000;
const maxRequestsPerWindow = 3;
const recentRequests = new Map();

const getClientIp = (event) => {
  const forwardedFor = event.headers?.["x-forwarded-for"] || event.headers?.["X-Forwarded-For"] || "";
  const firstIp = forwardedFor.split(",")[0]?.trim();

  return firstIp || event.headers?.["x-nf-client-connection-ip"] || "unknown";
};

const isSuspicious = (data) => {
  const values = Object.values(data).filter((value) => typeof value === "string");
  const combinedText = values.join(" ").toLowerCase();

  return (
    data["bot-field"] ||
    data["website"] ||
    data["company"] ||
    /<script|javascript:|https?:\/\//i.test(combinedText)
  );
};

const isValidPayload = (data) => {
  const name = String(data.name || "").trim();
  const phone = String(data.phone || "").trim();
  const bestTime = String(data.bestTime || "").trim();

  return (
    name.length >= 2 &&
    bestTime.length >= 3 &&
    /^([\d\s()+-]{7,15})$/.test(phone)
  );
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
    const clientIp = getClientIp(event);
    const now = Date.now();
    const recentWindow = recentRequests.get(clientIp) || [];
    const activeRequests = recentWindow.filter((timestamp) => now - timestamp < rateLimitWindowMs);

    if (activeRequests.length >= maxRequestsPerWindow) {
      return {
        statusCode: 429,
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ ok: false, error: "Too many requests. Please try again later." }),
      };
    }

    recentRequests.set(clientIp, [...activeRequests, now]);

    if (isSuspicious(data) || !isValidPayload(data)) {
      return {
        statusCode: 400,
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ ok: false, error: "Suspicious bot submission detected" }),
      };
    }

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