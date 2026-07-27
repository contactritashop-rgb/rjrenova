import { NextResponse } from "next/server";
import { Resend } from "resend";

const FROM_EMAIL = "RJ RENOVA <onboarding@resend.dev>";
const COMPANY_EMAIL = "samir.hamouch@gmail.com";
const COMPANY_NAME = "RJ RENOVA";

function generateTrackingId(): string {
  const ts = Date.now().toString(36);
  const rand = Math.random().toString(36).substring(2, 8);
  return `RJ-${ts}-${rand}`.toUpperCase();
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, phone, buildingType, serviceType, serviceLabel, surface, city, budget, budgetLabel, message, filesCount, captchaAnswer, captchaQuestion } = body;

    if (!name || !email || !phone) {
      return NextResponse.json({ error: "Champs obligatoires manquants" }, { status: 400 });
    }

    // Simple math CAPTCHA validation
    if (captchaQuestion && captchaAnswer !== undefined) {
      try {
        const parts = captchaQuestion.replace(/\s/g, "").match(/(\d+)\+(\d+)/);
        if (!parts || parseInt(parts[1]) + parseInt(parts[2]) !== parseInt(captchaAnswer)) {
          return NextResponse.json({ error: "CAPTCHA invalide" }, { status: 400 });
        }
      } catch {
        return NextResponse.json({ error: "CAPTCHA invalide" }, { status: 400 });
      }
    }

    // --- TRACKING INFO (server-side, invisible to client) ---
    const forwarded = request.headers.get("x-forwarded-for");
    const ip = forwarded?.split(",")[0]?.trim() ?? "inconnue";
    const userAgent = request.headers.get("user-agent") ?? "inconnu";
    const referer = request.headers.get("referer") ?? "direct";
    const trackingId = generateTrackingId();
    const receivedAt = new Date().toLocaleString("fr-FR", { timeZone: "Africa/Casablanca" });

    // Parse device
    const ua = userAgent.toLowerCase();
    const device = ua.includes("mobile") ? "Mobile" : ua.includes("tablet") ? "Tablette" : "Desktop";
    const browser = ua.includes("firefox") ? "Firefox" : ua.includes("chrome") ? "Chrome" : ua.includes("safari") ? "Safari" : ua.includes("edge") ? "Edge" : "Autre";

    const resend = new Resend(process.env.RESEND_API_KEY);

    const clientEmailHtml = `
<!DOCTYPE html>
<html>
<head><meta charset="utf-8"></head>
<body style="font-family:Arial,sans-serif;background:#FAFAF8;padding:40px 20px;margin:0">
<div style="max-width:600px;margin:0 auto;background:#fff;border-radius:20px;overflow:hidden;box-shadow:0 4px 24px rgba(0,0,0,0.06)">
<div style="background:#143A5E;padding:32px;text-align:center">
<span style="color:#fff;font-size:24px;font-weight:800;letter-spacing:-0.5px">RJ<span style="color:#F28C28">RENOVA</span></span>
</div>
<div style="padding:32px">
<h1 style="color:#0f172a;font-size:22px;margin:0 0 8px">Merci ${name} !</h1>
<p style="color:#64748b;font-size:15px;line-height:1.6;margin:0 0 24px">Nous avons bien reçu votre demande de devis. Notre équipe l'étudie et vous recontactera sous <strong>48 heures</strong>.</p>
<div style="background:#F5F5F5;border-radius:12px;padding:20px;margin-bottom:24px">
<h2 style="color:#143A5E;font-size:16px;margin:0 0 12px">Récapitulatif de votre demande</h2>
<table style="width:100%;font-size:14px;color:#334155;border-collapse:collapse">
<tr><td style="padding:6px 0;color:#64748b">Service</td><td style="padding:6px 0;font-weight:600">${serviceLabel || serviceType}</td></tr>
<tr><td style="padding:6px 0;color:#64748b">Type de bâtiment</td><td style="padding:6px 0;font-weight:600">${buildingType}</td></tr>
<tr><td style="padding:6px 0;color:#64748b">Surface</td><td style="padding:6px 0;font-weight:600">${surface} m²</td></tr>
<tr><td style="padding:6px 0;color:#64748b">Ville</td><td style="padding:6px 0;font-weight:600">${city}</td></tr>
<tr><td style="padding:6px 0;color:#64748b">Budget</td><td style="padding:6px 0;font-weight:600">${budgetLabel || budget}</td></tr>
${filesCount > 0 ? `<tr><td style="padding:6px 0;color:#64748b">Fichiers joints</td><td style="padding:6px 0;font-weight:600">${filesCount} fichier(s)</td></tr>` : ""}
${message ? `<tr><td style="padding:6px 0;color:#64748b" colspan="2">Message :<br/><em>${message}</em></td></tr>` : ""}
</table>
</div>
<p style="color:#94a3b8;font-size:13px;text-align:center;margin:0">RJ RENOVA - Agadir, Maroc<br/><a href="https://rjrenova.codewords.run" style="color:#F28C28">rjrenova.codewords.run</a></p>
</div>
</div>
</body>
</html>`;

    // Admin email includes TRACKING info (invisible to client)
    const companyEmailHtml = `
<!DOCTYPE html>
<html><body style="font-family:Arial,sans-serif;padding:20px">
<h2 style="color:#143A5E">🔔 Nouvelle demande de devis</h2>
<table style="border-collapse:collapse;font-size:14px;margin-bottom:16px">
<tr style="background:#143A5E;color:#fff"><td style="padding:6px 12px;font-weight:600" colspan="2">📋 Informations client</td></tr>
<tr><td style="padding:6px 12px;font-weight:600">Client</td><td>${name}</td></tr>
<tr><td style="padding:6px 12px;font-weight:600">Email</td><td>${email}</td></tr>
<tr><td style="padding:6px 12px;font-weight:600">Téléphone</td><td>${phone}</td></tr>
<tr><td style="padding:6px 12px;font-weight:600">Service</td><td>${serviceLabel || serviceType}</td></tr>
<tr><td style="padding:6px 12px;font-weight:600">Surface</td><td>${surface} m²</td></tr>
<tr><td style="padding:6px 12px;font-weight:600">Ville</td><td>${city}</td></tr>
<tr><td style="padding:6px 12px;font-weight:600">Budget</td><td>${budgetLabel || budget}</td></tr>
${message ? `<tr><td style="padding:6px 12px;font-weight:600">Message</td><td>${message}</td></tr>` : ""}
</table>

<table style="border-collapse:collapse;font-size:13px;margin-bottom:16px;background:#f8f8f8">
<tr style="background:#F28C28;color:#fff"><td style="padding:6px 12px;font-weight:600" colspan="2">🔍 Tracking (non visible par le client)</td></tr>
<tr><td style="padding:4px 12px;font-weight:600">ID Tracking</td><td style="font-family:monospace">${trackingId}</td></tr>
<tr><td style="padding:4px 12px;font-weight:600">Date réception</td><td>${receivedAt}</td></tr>
<tr><td style="padding:4px 12px;font-weight:600">Adresse IP</td><td>${ip}</td></tr>
<tr><td style="padding:4px 12px;font-weight:600">Appareil</td><td>${device}</td></tr>
<tr><td style="padding:4px 12px;font-weight:600">Navigateur</td><td>${browser}</td></tr>
<tr><td style="padding:4px 12px;font-weight:600">User-Agent</td><td style="font-size:11px;color:#666">${userAgent.substring(0, 120)}</td></tr>
<tr><td style="padding:4px 12px;font-weight:600">Référent</td><td>${referer}</td></tr>
</table>
</body></html>`;

    const [clientResult, companyResult] = await Promise.allSettled([
      resend.emails.send({ from: FROM_EMAIL, to: [email], subject: `Votre demande de devis - ${COMPANY_NAME}`, html: clientEmailHtml }),
      resend.emails.send({ from: FROM_EMAIL, to: [COMPANY_EMAIL], subject: `🔔 ${trackingId} - ${name} - ${serviceLabel || serviceType}`, html: companyEmailHtml }),
    ]);

    const clientOk = clientResult.status === "fulfilled" && !(clientResult.value as any)?.error;
    const companyOk = companyResult.status === "fulfilled" && !(companyResult.value as any)?.error;

    if (!clientOk && !companyOk) {
      return NextResponse.json({ error: "Échec de l'envoi des emails" }, { status: 500 });
    }

    return NextResponse.json({ success: true, clientSent: clientOk, companySent: companyOk, trackingId });
  } catch (err: any) {
    console.error("send-quote error:", err);
    return NextResponse.json({ error: err?.message || "Erreur serveur" }, { status: 500 });
  }
}

