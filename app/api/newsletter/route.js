import { mkdir, appendFile } from "fs/promises";
import path from "path";

export const runtime = "nodejs";

function isValidEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function csvCell(value) {
  return `"${String(value || "").replaceAll('"', '""')}"`;
}

export async function POST(request) {
  try {
    const body = await request.json();
    const email = String(body.email || "").trim().toLowerCase();
    const source = "floridadealshub.com";

    if (!isValidEmail(email)) {
      return Response.json({ error: "Please enter a valid email address." }, { status: 400 });
    }

    const providerUrl = process.env.NEWSLETTER_PROVIDER_URL;
    const providerKey = process.env.NEWSLETTER_PROVIDER_KEY;

    if (providerUrl && providerKey) {
      const providerResponse = await fetch(providerUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${providerKey}`
        },
        body: JSON.stringify({
          email,
          source,
          tags: ["florida-deals-hub", "network"]
        })
      });

      if (!providerResponse.ok) {
        return Response.json(
          { error: "We could not add you right now. Please try again." },
          { status: 502 }
        );
      }

      return Response.json({ ok: true });
    }

    const dataDir = path.join(process.cwd(), "data");
    const filePath = path.join(dataDir, "newsletter-signups.csv");
    const row = [
      new Date().toISOString(),
      email,
      source,
      request.headers.get("user-agent") || ""
    ]
      .map(csvCell)
      .join(",");

    await mkdir(dataDir, { recursive: true });
    await appendFile(filePath, `${row}\n`, "utf8");

    return Response.json({ ok: true });
  } catch (error) {
    return Response.json(
      { error: "We could not add you right now. Please try again." },
      { status: 500 }
    );
  }
}
