import { NextResponse } from "next/server";

const RUNTIME = process.env.CODEWORDS_RUNTIME_URI || "https://runtime.codewords.ai";
const API_KEY = process.env.CODEWORDS_API_KEY || "";

const SYSTEM_PROMPT = `Tu es l'assistant virtuel de RJ RENOVA, entreprise marocaine spécialisée en façades aluminium (siège à Agadir).

Services : Mur Rideau, Bardage, Habillage Façade, Menuiserie Aluminium, Verrières, Pergolas, Garde-corps, Portes Aluminium, Fenêtres Aluminium.
Contact : (+212) 0660 006 757 | contact@rjrenova.ma | rjrenova.codewords.run
Budget : <100k MAD (petit) à >2M MAD (très grand). Devis gratuit sous 48h.

Réponds dans la même langue que l'utilisateur (Français, English, العربية, ⵜⴰⵎⴰⵣⵉⵖⵜ).
Sois concis (2-4 phrases). Propose toujours un devis ou un appel.`;

export async function POST(req: Request) {
  try {
    const { messages } = await req.json();

    const openaiMessages = [
      { role: "system", content: SYSTEM_PROMPT },
      ...(messages || []).map((m: any) => ({
        role: m.role === "user" ? "user" : "assistant",
        content: typeof m.content === "string" ? m.content : m.parts?.map((p: any) => p.text || "").join("") || "",
      })),
    ];

    const response = await fetch(`${RUNTIME}/run/openai/v1/chat/completions`, {
      method: "POST",
      headers: { "Content-Type": "application/json", Authorization: `Bearer ${API_KEY}` },
      body: JSON.stringify({ model: "gpt-4.1-mini", messages: openaiMessages, stream: true }),
    });

    if (!response.ok) {
      const err = await response.text();
      return NextResponse.json({ error: err }, { status: 500 });
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
                  const parsed = JSON.parse(data);
                  const content = parsed.choices?.[0]?.delta?.content;
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

