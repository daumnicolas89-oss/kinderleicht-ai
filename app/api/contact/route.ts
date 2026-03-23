import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const { name, email, betreff, nachricht } = await req.json();

    // ── Validation ────────────────────────────────────────────────
    if (!email || typeof email !== "string" || !email.includes("@")) {
      return NextResponse.json(
        { error: "Bitte gib eine gueltige E-Mail-Adresse ein." },
        { status: 400 },
      );
    }
    if (!nachricht || typeof nachricht !== "string" || nachricht.trim().length < 5) {
      return NextResponse.json(
        { error: "Bitte gib eine Nachricht mit mindestens 5 Zeichen ein." },
        { status: 400 },
      );
    }

    const subject = betreff || "Kontaktanfrage";

    // ── Log the message (always, regardless of delivery method) ──
    console.log(
      "[contact-form]",
      JSON.stringify({ name, email, betreff: subject, nachricht, ts: new Date().toISOString() }),
    );

    // ── Try Resend if configured ──────────────────────────────────
    const resendKey = process.env.RESEND_API_KEY;
    if (resendKey) {
      const res = await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${resendKey}`,
        },
        body: JSON.stringify({
          from: "Kontaktformular <onboarding@resend.dev>",
          to: ["kontakt@kinderleicht.ai"],
          reply_to: email,
          subject: `[Kontakt] ${subject}`,
          text: `Name: ${name || "–"}\nE-Mail: ${email}\nBetreff: ${subject}\n\n${nachricht}`,
        }),
      });

      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        console.error("[contact-form] Resend error:", data);
        return NextResponse.json(
          { error: "Nachricht konnte nicht gesendet werden. Bitte versuche es spaeter erneut." },
          { status: 500 },
        );
      }

      return NextResponse.json({ success: true });
    }

    // ── Fallback: accept & log (no email service configured) ──────
    // The message is already logged above, so it won't be lost.
    // Operators can set up RESEND_API_KEY later for full delivery.
    console.warn("[contact-form] No email service configured – message logged only.");
    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("[contact-form] Unexpected error:", err);
    return NextResponse.json(
      { error: "Ein unerwarteter Fehler ist aufgetreten." },
      { status: 500 },
    );
  }
}
