import { NextResponse } from "next/server";

const RESEND_KEY = process.env.RESEND_API_KEY || "";

export async function POST(req: Request) {
  try {
    const { question, userName, userEmail, userPhone } = await req.json();
    if (!question) return NextResponse.json({ error: "Question requise" }, { status: 400 });

    if (RESEND_KEY) {
      try {
        await fetch("https://api.resend.com/emails", {
          method: "POST",
          headers: { Authorization: `Bearer ${RESEND_KEY}`, "Content-Type": "application/json" },
          body: JSON.stringify({
            from: "RJ RENOVA Chatbot <onboarding@resend.dev>",
            to: ["samir.hamouch@gmail.com"],
            subject: `🤖 Escalade chatbot - ${userName || "Anonyme"}`,
            html: `<h2>Question escaladée du chatbot</h2>
<p><b>Question:</b> ${question.replace(/</g,"&lt;")}</p>
<p><b>Client:</b> ${userName || "N/A"} | ${userEmail || "N/A"} | ${userPhone || "N/A"}</p>
<p><i>Transmis automatiquement par le chatbot RJ RENOVA</i></p>`,
          }),
        });
      } catch {}
    }

    return NextResponse.json({ success: true, message: "Votre question a été transmise. L'équipe vous répond sous 24h." });
  } catch (e: any) {
    return NextResponse.json({ error: e?.message }, { status: 500 });
  }
}

