import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const { email } = await req.json();

  if (!email || typeof email !== "string") {
    return NextResponse.json({ error: "Bitte gib eine gültige E-Mail-Adresse ein." }, { status: 400 });
  }

  const apiKey = process.env.MAILCHIMP_API_KEY;
  const audienceId = process.env.MAILCHIMP_AUDIENCE_ID;

  if (!apiKey || !audienceId) {
    console.error("Mailchimp environment variables missing");
    return NextResponse.json({ error: "Serverkonfigurationsfehler." }, { status: 500 });
  }

  // Datacenter is the part after the last hyphen in the API key (e.g. "us5")
  const dc = apiKey.split("-").pop();
  const url = `https://${dc}.api.mailchimp.com/3.0/lists/${audienceId}/members`;

  const response = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Basic ${Buffer.from(`anystring:${apiKey}`).toString("base64")}`,
    },
    body: JSON.stringify({
      email_address: email,
      status: "subscribed",
    }),
  });

  const data = await response.json();

  // Already subscribed counts as success
  if (response.ok || data.title === "Member Exists") {
    return NextResponse.json({ success: true });
  }

  console.error("Mailchimp error:", data);
  return NextResponse.json(
    { error: "Registrierung fehlgeschlagen. Bitte versuche es später erneut." },
    { status: 500 }
  );
}
