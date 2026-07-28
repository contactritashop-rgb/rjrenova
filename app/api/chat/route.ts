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
R: 4 gammes : <100k MAD, 100k-500k, 500k-2M, >2M MAD. Devis gratuit.
Q: Proposez-vous un service de maintenance ?
R: Oui, suivi et maintenance de toutes nos installations.
Q: Quels types de vitrage pour les verrières ?
R: Vitrage contrôle solaire qui rejette 70% de la chaleur, idéal climat marocain.
Q: Comment obtenir un devis ?
R: Via rjrenova.codewords.run/devis ou par téléphone au (+212) 0660 006 757.
Q: Quels matériaux utilisez-vous ?
R: Aluminium certifié, rupture de pont thermique, vitrage haute performance.
Q: Faites-vous des pergolas bioclimatiques ?
R: Oui, lames orientables, motorisation, éclairage LED intégré.

=== INSTALLATION & DÉLAIS ===
Q: Combien de temps dure l'installation d'un mur rideau ?
R: 2 à 3 semaines pour une façade standard de 500m², pose comprise.
Q: Quel est le délai de fabrication en usine ?
R: 10 à 15 jours ouvrés après validation des plans.
Q: Intervenez-vous sur des chantiers occupés ?
R: Oui, nous travaillons par phases pour minimiser la gêne, y compris en milieu occupé.
Q: Quel est le délai pour une pergola bioclimatique ?
R: 1 à 2 semaines, de la prise de cotes à l'installation finale.
Q: Faut-il un permis de construire pour une façade ?
R: Cela dépend de la commune. Nous vous assistons dans les démarches administratives.
Q: Combien de temps pour des fenêtres sur mesure ?
R: 7 à 10 jours ouvrés fabrication + 1 jour pose par ouverture.

=== GARANTIE ===
Q: Quelle est la garantie sur vos profilés aluminium ?
R: Garantie 10 ans sur les profilés contre la corrosion et les défauts de fabrication.
Q: Quelle est la garantie sur le vitrage ?
R: Garantie 5 ans sur le vitrage, y compris le contrôle solaire et l'isolation thermique.
Q: La garantie couvre-t-elle la pose ?
R: Oui, garantie décennale sur la pose et l'étanchéité de nos installations.
Q: Que faire en cas de problème après installation ?
R: Appelez le (+212) 0660 006 757. Intervention sous 72h pour tout défaut signalé.
Q: Proposez-vous un contrat de maintenance annuel ?
R: Oui, contrat d'entretien annuel avec inspection, nettoyage et réglages inclus.

=== PAIEMENT ===
Q: Quels modes de paiement acceptez-vous ?
R: Virement bancaire, chèque, et paiement échelonné selon l'avancement du chantier.
Q: Quel est l'échéancier de paiement type ?
R: 30% à la commande, 40% à mi-chantier, 30% à la livraison.
Q: Acceptez-vous les paiements par carte bancaire ?
R: Oui, nous acceptons les cartes bancaires marocaines et internationales.
Q: Y a-t-il des frais cachés ?
R: Non, tous nos devis sont détaillés et incluent matériaux, main-d'œuvre et transport.
Q: Proposez-vous des facilités de paiement ?
R: Oui, possibilité de mensualités sur 3 à 6 mois pour les projets résidentiels.

=== CLIMAT & RÉGIONS ===
Q: Quel bardage pour une maison en bord de mer ?
R: Bardage aluminium avec traitement anti-corrosion renforcé, idéal pour l'air salin d'Agadir, Tanger, Casablanca.
Q: Quel vitrage pour les régions chaudes (Marrakech, Ouarzazate) ?
R: Double vitrage avec contrôle solaire renforcé, rejet jusqu'à 80% de la chaleur.
Q: Quel type de façade pour les zones de montagne (Ifrane, Azrou) ?
R: Mur rideau ou bardage avec isolation thermique renforcée, résistant au gel et aux écarts de température.
Q: Les pergolas résistent-elles au vent fort (Tanger, Essaouira) ?
R: Oui, fixation renforcée et lames orientables qui se ferment automatiquement par vent fort.
Q: Quel entretien en zone désertique (Ouarzazate, Errachidia) ?
R: Nettoyage trimestriel recommandé pour enlever le sable. Nos profilés résistent à l'abrasion.
Q: Les verrières sont-elles adaptées au climat d'Agadir ?
R: Parfaitement, avec vitrage anti-UV et contrôle solaire pour profiter du soleil sans surchauffe.
Q: Proposez-vous des solutions pour l'isolation thermique en été ?
R: Oui, double vitrage basse émissivité, stores intégrés, et vitrage à contrôle solaire.

=== English FAQ ===
Q: What services do you offer?
R: 9 services: Curtain Wall, Cladding, Facade Dressing, Aluminum Joinery, Canopies, Pergolas, Guardrails, Doors, Windows.
Q: What are your timelines?
R: 4-8 weeks depending on complexity. Free quote within 48h.
Q: What warranty do you provide?
R: 10 years on profiles, 5 years on glazing, 10-year installation warranty.
Q: Do you work nationwide in Morocco?
R: Yes, Agadir, Casablanca, Rabat, Marrakech, Tangier, Fez and all major cities.
Q: What payment methods do you accept?
R: Bank transfer, check, credit cards. 30% deposit, 40% mid-project, 30% on delivery.
Q: Which cladding for coastal areas?
R: Anti-corrosion treated aluminum cladding for saline air (Agadir, Tangier, Casablanca).
Q: What glazing for hot regions like Marrakech?
R: Double glazing with enhanced solar control, rejecting up to 80% of heat.
Q: What facade for mountain areas (Ifrane)?
R: Curtain wall or cladding with reinforced thermal insulation, frost-resistant.
Q: Do pergolas resist strong winds?
R: Yes, reinforced mounting with automatic blade closure in high winds.
Q: Maintenance in desert areas?
R: Quarterly cleaning recommended. Our profiles are abrasion-resistant.

=== الأسئلة الشائعة (العربية) ===
Q: ما هي خدماتكم؟
R: 9 خدمات: واجهات زجاجية، تكسية، تلبيس واجهات، نجارة ألمنيوم، مظلات، برجولات، درابزينات، أبواب، نوافذ.
Q: ما هي مدة التسليم؟
R: 4-8 أسابيع حسب التعقيد. عرض سعر مجاني خلال 48 ساعة.
Q: ما هو الضمان؟
R: 10 سنوات على البروفيلات، 5 سنوات على الزجاج، 10 سنوات على التركيب.
Q: هل تعملون في كل المغرب؟
R: نعم، أكادير، الدار البيضاء، الرباط، مراكش، طنجة، فاس وجميع المدن.
Q: ما هي طرق الدفع؟
R: تحويل بنكي، شيك، بطاقات. 30% عند الطلب، 40% منتصف المشروع، 30% عند التسليم.
Q: أي تكسية للمناطق الساحلية؟
R: تكسية ألمنيوم بمعالجة مضادة للتآكل للهواء المالح.
Q: أي زجاج للمناطق الحارة؟
R: زجاج مزدوج بتحكم شمسي يعزل حتى 80% من الحرارة.
Q: أي واجهة للمناطق الجبلية؟
R: واجهة زجاجية أو تكسية بعزل حراري معزز مقاوم للصقيع.
Q: هل البرجولات مقاومة للرياح؟
R: نعم، تثبيت معزز وإغلاق تلقائي للشرائح.
Q: الصيانة في المناطق الصحراوية؟
R: تنظيف كل 3 أشهر. بروفيلاتنا مقاومة للتآكل الرملي.

=== ⵜⴰⵎⴰⵣⵉⵖⵜ FAQ ===
Q: ⵎⴰⵏ ⵜⵉⵡⵓⵔⵉⵡⵉⵏ ⵏⵏⴰ ⴷⴰ ⵜⵎⵓⵏⵓⵎ?
R: 9 ⵜⵉⵡⵓⵔⵉⵡⵉⵏ : ⵉⵖⴼⴰⵡⵏ ⵏ ⵜⵣⴳⴰ, ⴰⵙⵙⵓⵎⵔ, ⴰⵙⵙⵓⵏ, ⵜⴰⵡⵡⵓⵔⵉ ⵏ ⵓⵍⵓⵎⵉⵏⵢⵓⵎ, ⵜⵉⵎⴱⵡⴰⵢⵉⵏ, ⵉⴱⵔⴰⵔⵏ, ⵉⵃⵟⵟⴰⵏ, ⵜⵉⴼⵍⵡⵉⵏ, ⵜⵉⵣⴳⴰⵔ.
Q: ⵎⴰⵏ ⴰⴽⵓⴷ ⵏ ⵜⵡⵓⵔⵉ?
R: 4-8 ⵉⵎⴰⵍⴰⵙⵙⵏ. ⴰⵙⵡⵉⵔⵉ ⵙ ⴱⴰⵟⵍ ⴳ 48ⵙⴰ.
Q: ⵎⴰⵏ ⵜⴰⵎⴰⵜⴰⵔⵜ ⵏ ⵓⴼⵓⵙⵉ?
R: 10 ⵉⵙⴳⴳⵯⴰⵙⵏ ⵖⴼ ⵓⵍⵓⵎⵉⵏⵢⵓⵎ, 5 ⵖⴼ ⵜⵣⴳⴰ.
Q: ⵎⴰⵏ ⵜⵉⵖⴰⵔⴰⵙⵉⵏ ⵏ ⵓⵙⵖⵣⵏ?
R: ⴰⵣⵣⵉⴳⵣ ⵙ ⵓⴱⴰⵏⴽ, ⵛⵛⵉⴽ, ⴽⴰⵔⵟⴰⵜ. 30% ⴳ ⵓⵙⵏⵓⴱⴳ.
Q: ⵎⴰ ⵉⵥⵉⵍⵏ ⵉ ⵜⵖⵔⵎⵉⵏ ⵏ ⵓⴼⵜⴰⵙ?
R: ⴰⵙⵙⵓⵎⵔ ⵙ ⵓⵙⴼⴰⵔ ⴰⵏⵜⵉ-ⴽⵓⵔⵓⵣⵢⵓⵏ ⵉ ⵡⴰⵥⵓ ⴰⵎⵔⵙⴰⵏ.

=== RÈGLES DE ROUTAGE ===
1. Si la question est dans la FAQ → réponds directement (3-5 phrases max).
2. Si question complexe (devis détaillé, mesures, projet spécifique) → propose /devis ou appeler (+212) 0660 006 757.
3. Si l'utilisateur veut être recontacté → dis-lui que l'équipe le contactera sous 24h.
4. Termine toujours par une proposition d'action.
5. Respecte la langue de l'utilisateur dans ta réponse.
`;

export async function POST(req: Request) {
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



