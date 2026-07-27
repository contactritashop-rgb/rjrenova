import { NextResponse } from "next/server";
import { Resend } from "resend";

const FROM = "RJ RENOVA <onboarding@resend.dev>";
const TO = "samir.hamouch@gmail.com";

export async function POST(request: Request) {
  try {
    const { name, email, phone, subject, message } = await request.json();
    if (!name || !email || !message) {
      return NextResponse.json({ error: "Champs requis" }, { status: 400 });
    }

    const resend = new Resend(process.env.RESEND_API_KEY);

    const html = `<h2>📬 Nouveau message de contact</h2>
<table style="border-collapse:collapse;font-size:14px">
<tr><td style="padding:6px 12px;font-weight:600">Nom</td><td>${name}</td></tr>
<tr><td style="padding:6px 12px;font-weight:600">Email</td><td>${email}</td></tr>
<tr><td style="padding:6px 12px;font-weight:600">Téléphone</td><td>${phone || "-"}</td></tr>
<tr><td style="padding:6px 12px;font-weight:600">Sujet</td><td>${subject || "-"}</td></tr>
<tr><td style="padding:6px 12px;font-weight:600">Message</td><td>${message}</td></tr>
</table>`;

    const { error } = await resend.emails.send({ from: FROM, to: [TO], subject: `📬 Contact de ${name} - ${subject || "Sans sujet"}`, html });
    if (error) return NextResponse.json({ error: "Échec envoi" }, { status: 500 });

    return NextResponse.json({ success: true });
  } catch (e: any) {
    return NextResponse.json({ error: e?.message }, { status: 500 });
  }
}

