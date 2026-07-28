import { NextResponse } from "next/server";

const RUNTIME = process.env.CODEWORDS_RUNTIME_URI || "https://runtime.codewords.ai";
const API_KEY = process.env.CODEWORDS_API_KEY || "";
const RESEND_KEY = process.env.RESEND_API_KEY || "";

const FAQ_KNOWLEDGE = `
=== FAQ RJ RENOVA (Français) ===
Q: Quels services proposez-vous ?
R: 9 services : Mur Rideau, Bardage, Habillage Façade, Menuiserie Aluminium, Verrières, Pergolas, Garde-corps, Portes Aluminium, Fenêtres Aluminium.

Q: Quels sont vos délais ?
R: 4 à 8 semaines selon la complexité du projet. Devis gratuit sous 48h.

Q: Quelle est la durée de vie des installations ?
R: Plus de 30 ans avec entretien minimal. Garantie sur les profilés et le vitrage.

Q: Travaillez-vous dans tout le Maroc ?
R: Oui ! Agadir, Casablanca, Rabat, Marrakech, Tanger, Fès et toutes les grandes villes.

Q: Quels sont vos prix ?
R: Dépend du projet : petit (<100k MAD), moyen (100k-500k), grand (500k-2M), très grand (>2M).

Q: Proposez-vous un service de maintenance ?
R: Oui, suivi et maintenance de toutes nos installations.

Q: Quels types de vitrage pour les verrières ?
R: Vitrage contrôle solaire qui rejette 70% de la chaleur, idéal pour le climat marocain.

Q: Comment obtenir un devis ?
R: Via notre configurateur en ligne sur rjrenova.codewords.run/devis ou par téléphone.

Q: Quels matériaux utilisez-vous ?
R: Aluminium certifié, profilés à rupture de pont thermique, vitrage haute performance.

Q: Faites-vous des pergolas bioclimatiques ?
R: Oui, avec lames orientables, motorisation, éclairage LED.

=== RÈGLES DE ROUTAGE ===
1. Si la question est dans la FAQ ci-dessus → réponds directement et rapidement.
2. Si la question est complexe (devis détaillé, projet spécifique, surface, budget) → propose de remplir le formulaire de devis sur /devis ou d'appeler le (+212) 0660 006 757.
3. Si l'utilisateur demande explicitement à être recontacté, dis-lui que son message sera transmis à l'équipe.
4. Termine TOUJOURS par une proposition d'action : "Souhaitez-vous un devis ?" ou "Voulez-vous qu'on vous rappelle ?"
`;

export async function POST(req: Request) {
  const url = new URL(req.url);

  // Escalation endpoint: envoie un email avec la question complexe
  if (url.pathname.endsWith("/escalate")) {
    return handleEscalate(req);
  }

  // Chat stream endpoint
  return handleChatStream(req);
}

async function handleEscalate(req: Request) {
  try {
    const { question, userName, userEmail, userPhone } = await req.json();
    if (!question) return NextResponse.json({ error: "Question requise" }, { status: 400 });

    // Send email to admin via Resend
    if (RESEND_KEY) {
      try {
        await fetch("https://api.resend.com/emails", {
          method: "POST",
          headers: { Authorization: `Bearer ${RESEND_KEY}`, "Content-Type": "application/json" },
          body: JSON.stringify({
            from: "RJ RENOVA Chatbot <onboarding@resend.dev>",
            to: ["samir.hamouch@gmail.com"],
            subject: `🤖 Escalade chatbot - ${userName || "Anonyme"}`,
            html: `<h2>Question complexe du chatbot</h2>
<p><b>Question:</b> ${question}</p>
<p><b>Client:</b> ${userName || "N/A"} | ${userEmail || "N/A"} | ${userPhone || "N/A"}</p>
<p><i>Transmis automatiquement par le chatbot RJ RENOVA</i></p>`,
          }),
        });
      } catch {}
    }

    return NextResponse.json({ success: true, message: "Question transmise à notre équipe. Nous vous contacterons sous 24h." });
  } catch (e: any) {
    return NextResponse.json({ error: e?.message }, { status: 500 });
  }
}

async function handleChatStream(req: Request) {
  try {
    const { messages } = await req.json();

    const openaiMessages = [
      { role: "system", content: `Tu es l'assistant virtuel de RJ RENOVA (siège à Agadir, Maroc).\n\n${FAQ_KNOWLEDGE}\n\nRéponds dans la même langue que l'utilisateur (Français, English, العربية, ⵜⴰⵎⴰⵣⵉⵖⵜ). Sois chaleureux, concis (3-5 phrases max).` },
      ...(messages || []).map((m: any) => ({
        role: m.role === "user" ? "user" : "assistant",
        content: typeof m.content === "string" ? m.content : m.parts?.map((p: any) => p.text || "").join("") || "",
      })),
    ];

    const response = await fetch(`${RUNTIME}/run/openai/v1/chat/completions`, {
      method: "POST",
      headers: { "Content-Type": "application/json", Authorization: `Bearer ${API_KEY}` },
      body: JSON.stringify({ model: "gpt-4.1-mini", messages: openaiMessages, stream: true, max_tokens: 400 }),
    });

    if (!response.ok) {
      return NextResponse.json({ error: await response.text() }, { status: 500 });
    }

    const encoder = new TextEncoder();
    const stream = new ReadableStream({
      async start(controller) {
        const reader = response.body?.getReader();
        if (!reader) { controller.close(); return; }
        const decoder = new TextDecoder();
        let buffer = "";
        try {
          while (true) {
            const { done, value } = await reader.read();
            if (done) break;
            buffer += decoder.decode(value, { stream: true });
            const lines = buffer.split("\n");
            buffer = lines.pop() || "";
            for (const line of lines) {
              if (line.startsWith("data: ")) {
                const data = line.slice(6).trim();
                if (data === "[DONE]") { controller.close(); return; }
                try {
                  const content = JSON.parse(data).choices?.[0]?.delta?.content;
                  if (content) {
                    controller.enqueue(encoder.encode(`data: ${JSON.stringify({ choices: [{ delta: { content } }] })}\n\n`));
                  }
                } catch {}
              }
            }
          }
        } catch {}
        controller.close();
      },
    });

    return new Response(stream, {
      headers: { "Content-Type": "text/event-stream", "Cache-Control": "no-cache", Connection: "keep-alive" },
    });
  } catch (e: any) {
    return NextResponse.json({ error: e?.message }, { status: 500 });
  }
}

