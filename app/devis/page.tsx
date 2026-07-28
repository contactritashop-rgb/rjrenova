// @ts-nocheck
"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, ArrowLeft, Check, Upload, MapPin, Building2, Ruler, Wallet, FileText, Send, Image as ImageIcon, Wrench } from "lucide-react";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { useI18n } from "@/lib/i18n/i18n-provider";

const buildingTypes = [
  { id: "residential", icon: "🏠", fr: "Résidentiel", en: "Residential", ar: "سكني", tzm: "ⴰⵙⴷⵔⴼⵉ" },
  { id: "commercial", icon: "🏢", fr: "Commercial", en: "Commercial", ar: "تجاري", tzm: "ⴰⵙⵏⵣⵉ" },
  { id: "industrial", icon: "🏭", fr: "Industriel", en: "Industrial", ar: "صناعي", tzm: "ⴰⵙⵏⴽⴰⵔⵉ" },
  { id: "hotel", icon: "🏨", fr: "Hôtelier", en: "Hotel", ar: "فندقي", tzm: "ⴰⵙⵏⵙⵉ" },
  { id: "institutional", icon: "🏛️", fr: "Institutionnel", en: "Institutional", ar: "مؤسساتي", tzm: "ⴰⵙⵏⵎⴰⵍⴰ" },
];

const serviceTypes = [
  { id: "mur-rideau", fr: "Mur Rideau", en: "Curtain Wall", ar: "واجهات زجاجية", tzm: "ⵉⵖⴼⴰⵡⵏ ⵏ ⵜⵣⴳⴰ" },
  { id: "bardage", fr: "Bardage", en: "Cladding", ar: "تكسية خارجية", tzm: "ⴰⵙⵙⵓⵎⵔ" },
  { id: "menuiserie", fr: "Menuiserie Aluminium", en: "Aluminum Joinery", ar: "نجارة الألمنيوم", tzm: "ⵜⴰⵡⵡⵓⵔⵉ" },
  { id: "verrieres", fr: "Verrières", en: "Canopies", ar: "مظلات زجاجية", tzm: "ⵜⵉⵎⴱⵡⴰⵢⵉⵏ" },
  { id: "pergolas", fr: "Pergolas", en: "Pergolas", ar: "برجولات", tzm: "ⵉⴱⵔⴰⵔⵏ" },
  { id: "garde-corps", fr: "Garde-corps", en: "Guardrails", ar: "درابزينات", tzm: "ⵉⵃⵟⵟⴰⵏ" },
  { id: "portes", fr: "Portes Aluminium", en: "Aluminum Doors", ar: "أبواب ألمنيوم", tzm: "ⵜⵉⴼⵍⵡⵉⵏ" },
  { id: "fenetres", fr: "Fenêtres Aluminium", en: "Aluminum Windows", ar: "نوافذ ألمنيوم", tzm: "ⵜⵉⵣⴳⴰⵔ" },
  { id: "habillage", fr: "Habillage de Façade", en: "Facade Dressing", ar: "تلبيس الواجهات", tzm: "ⴰⵙⵙⵓⵏ" },
  { id: "other", fr: "Autre", en: "Other", ar: "أخرى", tzm: "ⵡⴰⵅⴹⴰ" },
];

const cities = [
  { fr: "Casablanca", tzm: "ⴰⵏⴼⴰ" },
  { fr: "Rabat", tzm: "ⵕⵕⴱⴰⵟ" },
  { fr: "Marrakech", tzm: "ⵎⵕⵕⴰⴽⵛ" },
  { fr: "Tanger", tzm: "ⵟⴰⵏⵊⴰ" },
  { fr: "Agadir", tzm: "ⴰⴳⴰⴷⵉⵔ" },
  { fr: "Fès", tzm: "ⴼⴰⵙ" },
  { fr: "Meknès", tzm: "ⵎⴽⵏⴰⵙ" },
  { fr: "Oujda", tzm: "ⵡⵓⵊⴷⴰ" },
  { fr: "Tétouan", tzm: "ⵜⵉⵟⵟⴰⵡⵉⵏ" },
  { fr: "Autre", tzm: "ⵡⴰⵅⴹⴰ" },
];

const budgetRanges = [
  { id: "small", fr: "Moins de 100 000 MAD", en: "Under 100,000 MAD", ar: "أقل من 100,000 درهم", tzm: "ⴷⴷⴰⵡ 100 000 MAD" },
  { id: "medium", fr: "100 000 - 500 000 MAD", en: "100,000 - 500,000 MAD", ar: "100,000 - 500,000 درهم", tzm: "100 000 - 500 000 MAD" },
  { id: "large", fr: "500 000 - 2 000 000 MAD", en: "500,000 - 2,000,000 MAD", ar: "500,000 - 2,000,000 درهم", tzm: "500 000 - 2 000 000 MAD" },
  { id: "xlarge", fr: "Plus de 2 000 000 MAD", en: "Over 2,000,000 MAD", ar: "أكثر من 2,000,000 درهم", tzm: "ⵓⴳⴳⴰⵔ ⵏ 2 000 000 MAD" },
  { id: "unknown", fr: "Je ne sais pas encore", en: "I don't know yet", ar: "لا أعرف بعد", tzm: "ⵓⵔ ⵙⵙⵉⵏⵖ ⵖⵉⵍⴰⴷ" },
];

const stepLabels = [
  { fr: "Bâtiment", en: "Building", ar: "المبنى", tzm: "ⴰⵙⴽⴰ" },
  { fr: "Prestation", en: "Service", ar: "الخدمة", tzm: "ⵜⴰⵡⵓⵔⵉ" },
  { fr: "Surface", en: "Surface", ar: "المساحة", tzm: "ⵜⴰⵊⵓⵎⵎⴰ" },
  { fr: "Ville", en: "City", ar: "المدينة", tzm: "ⵜⴰⵖⵔⵎⵜ" },
  { fr: "Budget", en: "Budget", ar: "الميزانية", tzm: "ⴰⵣⵡⴰⵍ" },
  { fr: "Fichiers", en: "Files", ar: "الملفات", tzm: "ⵉⴼⵓⵢⵍⴰ" },
  { fr: "Contact", en: "Contact", ar: "الاتصال", tzm: "ⴰⵎⵢⴰⵡⴰⴹ" },
];

const stepIcons = [Building2, Wrench, Ruler, MapPin, Wallet, Upload, Send];

type FormData = {
  buildingType: string;
  serviceType: string;
  surface: string;
  city: string;
  budget: string;
  files: File[];
  name: string;
  email: string;
  phone: string;
  message: string;
};

export default function QuotePage() {
  const { t, locale } = useI18n();
  const loc = locale as "fr" | "en" | "ar" | "tzm";
  const [step, setStep] = useState(0);
  const [form, setForm] = useState<FormData>({ buildingType: "", serviceType: "", surface: "", city: "", budget: "", files: [], name: "", email: "", phone: "", message: "" });
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);
  const [captcha, setCaptcha] = useState({ q: "", a: "" });
  const [captchaInput, setCaptchaInput] = useState("");
  const fileInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const n1 = Math.floor(Math.random() * 10) + 1;
    const n2 = Math.floor(Math.random() * 10) + 1;
    setCaptcha({ q: `${n1} + ${n2}`, a: String(n1 + n2) });
  }, []);

  const update = (key: keyof FormData, value: any) => setForm((f) => ({ ...f, [key]: value }));
  const canNext = (): boolean => {
    if (step === 0) return !!form.buildingType;
    if (step === 1) return !!form.serviceType;
    if (step === 2) return !!form.surface;
    if (step === 3) return !!form.city;
    if (step === 4) return !!form.budget;
    if (step === 6) return !!form.name && !!form.email && !!form.phone && !!captchaInput;
    return true;
  };

  const handleSubmit = async () => {
    setSending(true);
    try {
      await fetch("/api/send-quote", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          phone: form.phone,
          buildingType: buildingTypes.find((b) => b.id === form.buildingType)?.[loc] || form.buildingType,
          serviceType: form.serviceType,
          serviceLabel: (serviceTypes.find((s:any) => s.id === form.serviceType) as any)?.[loc] || form.serviceType,
          surface: form.surface,
          city: form.city,
          budget: form.budget,
          budgetLabel: budgetRanges.find((b) => b.id === form.budget)?.[loc] || form.budget,
          message: form.message,
          filesCount: form.files.length,
          captchaQuestion: captcha.q,
          captchaAnswer: captchaInput,
        }),
      });
    } catch (e) {
      // email sending is best-effort; still show success
    }
    setSending(false);
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <>
        <Header />
        <main className="min-h-screen flex items-center justify-center section-padding">
          <motion.div initial={{ scale: 0.8, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} className="text-center max-w-lg">
            <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-accent/10 flex items-center justify-center">
              <Check size={40} className="text-accent" />
            </div>
            <h1 className="font-heading text-3xl md:text-4xl font-extrabold text-dark dark:text-white mb-4">
              {loc === "fr" ? "Merci !" : loc === "en" ? "Thank you!" : "شكراً !"}
            </h1>
            <p className="text-muted text-lg mb-8">
              {loc === "fr" ? "Votre demande a été envoyée. Réponse sous 48h." : loc === "en" ? "Your request has been sent. Response within 48h." : loc === "ar" ? "تم إرسال طلبكم." : "ⵜⵡⴰⵣⵏ ⵜⵓⵜⵜⵔⴰ. ⴰⵔ ⴰⵡⵏ ⵏⵜⵜⴰⵔⴰ."}
            </p>
            <a href="/" className="inline-flex items-center gap-2 px-6 py-3 bg-accent text-white font-semibold rounded-full hover:bg-accent-light transition-all">
              {t("nav.home")}
              <ArrowRight size={18} />
            </a>
          </motion.div>
        </main>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Header />
      <main className="min-h-screen pt-28 pb-20">
        <div className="container-custom px-6 lg:px-12 max-w-3xl mx-auto">
          <div className="mb-12 text-center">
            <h1 className="font-heading text-4xl md:text-5xl font-extrabold text-dark dark:text-white mb-4">
              {loc === "fr" ? "Configurateur de Devis" : loc === "en" ? "Quote Configurator" : loc === "ar" ? "مكون عرض السعر" : "ⴰⵎⵙⴽⴰⵔ ⵏ ⵓⵙⵡⵉⵔⵉ"}
            </h1>
            <p className="text-muted">
              {loc === "fr" ? "7 étapes pour obtenir votre devis personnalisé" : loc === "en" ? "7 steps to get your personalized quote" : "7 خطوات للحصول على عرض السعر المخصص"}
            </p>
          </div>

          <div className="flex items-center justify-center gap-1 mb-12 overflow-x-auto pb-2">
            {stepLabels.map((label, i) => (
              <button key={i} onClick={() => i < step && setStep(i)} className={`flex items-center gap-1.5 px-3 py-2 rounded-full text-xs font-medium transition-all whitespace-nowrap ${i === step ? "bg-accent text-white" : i < step ? "bg-accent/10 text-accent cursor-pointer" : "bg-surface-alt text-muted dark:bg-dark-alt"}`}>
                <span className={`w-5 h-5 rounded-full flex items-center justify-center text-[10px] font-bold ${i === step ? "bg-white text-accent" : i < step ? "bg-accent/20" : "bg-muted/20"}`}>{i < step ? "✓" : i + 1}</span>
                {label[loc]}
              </button>
            ))}
          </div>

          <AnimatePresence mode="wait">
            <motion.div key={step} initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} transition={{ duration: 0.3 }} className="bg-surface dark:bg-dark-alt rounded-2xl p-8 md:p-10 border border-border dark:border-white/5">
              {step === 0 && (
                <div>
                  <h2 className="font-heading text-2xl font-bold text-dark dark:text-white mb-6">{loc === "fr" ? "Type de bâtiment" : loc === "en" ? "Building type" : "نوع المبنى"}</h2>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                    {buildingTypes.map((bt) => (
                      <button key={bt.id} onClick={() => update("buildingType", bt.id)} className={`p-6 rounded-2xl border-2 text-center transition-all ${form.buildingType === bt.id ? "border-accent bg-accent/5" : "border-border hover:border-accent/30"}`}>
                        <span className="text-3xl block mb-2">{bt.icon}</span>
                        <span className="font-medium text-sm text-dark dark:text-white">{bt[loc]}</span>
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {step === 1 && (
                <div>
                  <h2 className="font-heading text-2xl font-bold text-dark dark:text-white mb-6">{loc === "fr" ? "Type de prestation" : loc === "en" ? "Service type" : "نوع الخدمة"}</h2>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                    {(serviceTypes as any[]).map((st: any) => (
                      <button key={st.id} onClick={() => update("serviceType", st.id)} className={`p-4 rounded-xl border-2 text-center text-sm font-medium transition-all ${form.serviceType === st.id ? "border-accent bg-accent/5 text-accent" : "border-border hover:border-accent/30 text-dark dark:text-white"}`}>{st[loc]}</button>
                    ))}
                  </div>
                </div>
              )}

              {step === 2 && (
                <div>
                  <h2 className="font-heading text-2xl font-bold text-dark dark:text-white mb-6">{loc === "fr" ? "Surface approximative" : loc === "en" ? "Approximate surface" : "المساحة التقريبية"}</h2>
                  <div className="relative">
                    <input type="number" value={form.surface} onChange={(e) => update("surface", e.target.value)} placeholder={loc === "fr" ? "Ex: 500 m²" : "E.g. 500 m²"} className="w-full px-6 py-5 rounded-xl border-2 border-border bg-transparent text-dark dark:text-white text-lg font-medium focus:border-accent outline-none transition-colors" />
                    <span className="absolute right-5 top-1/2 -translate-y-1/2 text-muted font-medium">m²</span>
                  </div>
                </div>
              )}

              {step === 3 && (
                <div>
                  <h2 className="font-heading text-2xl font-bold text-dark dark:text-white mb-6">{loc === "fr" ? "Ville du projet" : loc === "en" ? "Project city" : "مدينة المشروع"}</h2>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                    {cities.map((c) => (
                      <button key={c.fr} onClick={() => update("city", c.fr)} className={`p-4 rounded-xl border-2 text-center text-sm font-medium transition-all ${form.city === c.fr ? "border-accent bg-accent/5 text-accent" : "border-border hover:border-accent/30 text-dark dark:text-white"}`}>{locale === "tzm" ? c.tzm : c.fr}</button>
                    ))}
                  </div>
                </div>
              )}

              {step === 4 && (
                <div>
                  <h2 className="font-heading text-2xl font-bold text-dark dark:text-white mb-6">{loc === "fr" ? "Budget estimé" : loc === "en" ? "Estimated budget" : loc === "ar" ? "الميزانية المقدرة" : "ⴰⵣⵡⴰⵍ ⵉⵜⵜⵡⴰⵇⴷⴰⵔⵏ"}</h2>
                  <div className="space-y-3">
                    {budgetRanges.map((br) => (
                      <button key={br.id} onClick={() => update("budget", br.id)} className={`w-full p-5 rounded-xl border-2 text-left transition-all ${form.budget === br.id ? "border-accent bg-accent/5" : "border-border hover:border-accent/30"}`}>
                        <span className="font-medium text-dark dark:text-white">{br[loc]}</span>
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {step === 5 && (
                <div>
                  <h2 className="font-heading text-2xl font-bold text-dark dark:text-white mb-6">{loc === "fr" ? "Documents du projet (optionnel)" : loc === "en" ? "Project documents (optional)" : loc === "ar" ? "وثائق المشروع (اختياري)" : "ⵉⵎⵓⵀⵉⵍⵏ ⵏ ⵓⵙⵏⴼⴰⵔ (ⴱⵍⴰ ⵎⴰⵔⵔⴰ)"}</h2>
                  <div className="border-2 border-dashed border-border rounded-2xl p-10 text-center hover:border-accent/50 transition-colors cursor-pointer" onClick={() => fileInputRef.current?.click()}>
                    <Upload size={40} className="mx-auto mb-4 text-muted" />
                    <p className="font-medium text-dark dark:text-white mb-1">{loc === "fr" ? "Déposez vos fichiers ici" : loc === "en" ? "Drop your files here" : "أسقط ملفاتكم هنا"}</p>
                    <p className="text-muted text-sm">PDF, DWG, JPG, PNG - Max 10 Mo</p>
                    <input ref={fileInputRef} type="file" multiple accept=".pdf,.dwg,.jpg,.jpeg,.png" onChange={(e) => update("files", Array.from(e.target.files || []))} className="hidden" />
                  </div>
                  {form.files.length > 0 && (
                    <div className="mt-4 space-y-2">
                      {form.files.map((f, i) => (
                        <div key={i} className="flex items-center gap-3 p-3 bg-surface-alt dark:bg-dark rounded-xl text-sm">
                          {f.type.startsWith("image") ? <ImageIcon size={18} className="text-accent" /> : <FileText size={18} className="text-accent" />}
                          <span className="text-dark dark:text-white">{f.name}</span>
                          <span className="text-muted ml-auto">{(f.size / 1024 / 1024).toFixed(1)} Mo</span>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              )}

              {step === 6 && (
                <div>
                  <h2 className="font-heading text-2xl font-bold text-dark dark:text-white mb-2">{loc === "fr" ? "Vos coordonnées" : loc === "en" ? "Your contact info" : "معلومات الاتصال"}</h2>
                  <p className="text-muted text-sm mb-6">{loc === "fr" ? "Nous vous répondrons sous 48h." : loc === "en" ? "We will respond within 48 hours." : "سنرد عليكم في غضون 48 ساعة."}</p>
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-dark dark:text-white mb-1.5">{loc === "fr" ? "Nom complet" : loc === "en" ? "Full name" : "الاسم الكامل"} *</label>
                      <input type="text" value={form.name} onChange={(e) => update("name", e.target.value)} className="w-full px-4 py-3 rounded-xl border-2 border-border bg-transparent text-dark dark:text-white focus:border-accent outline-none transition-colors" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-dark dark:text-white mb-1.5">Email *</label>
                      <input type="email" value={form.email} onChange={(e) => update("email", e.target.value)} className="w-full px-4 py-3 rounded-xl border-2 border-border bg-transparent text-dark dark:text-white focus:border-accent outline-none transition-colors" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-dark dark:text-white mb-1.5">{loc === "fr" ? "Téléphone" : loc === "en" ? "Phone" : "الهاتف"} *</label>
                      <input type="tel" value={form.phone} onChange={(e) => update("phone", e.target.value)} className="w-full px-4 py-3 rounded-xl border-2 border-border bg-transparent text-dark dark:text-white focus:border-accent outline-none transition-colors" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-dark dark:text-white mb-1.5">{loc === "fr" ? "Message (optionnel)" : loc === "en" ? "Message (optional)" : "رسالة (اختياري)"}</label>
                      <textarea value={form.message} onChange={(e) => update("message", e.target.value)} rows={3} className="w-full px-4 py-3 rounded-xl border-2 border-border bg-transparent text-dark dark:text-white focus:border-accent outline-none transition-colors resize-none" />
                    </div>
                  </div>

                  <div className="mt-6 p-4 rounded-xl bg-surface-alt dark:bg-dark border border-border dark:border-white/5">
                    <p className="text-sm font-medium text-dark dark:text-white mb-2">🔐 Vérification anti-spam : {captcha.q} = ?</p>
                    <input type="text" value={captchaInput} onChange={(e) => setCaptchaInput(e.target.value)} placeholder="Votre réponse" className="w-full px-4 py-2.5 rounded-xl border-2 border-border bg-transparent text-dark dark:text-white focus:border-accent outline-none text-sm" />
                  </div>

                  <div className="mt-8 p-6 rounded-2xl bg-surface-alt dark:bg-dark border border-border dark:border-white/5">
                    <h3 className="font-heading font-bold text-dark dark:text-white mb-4">{loc === "fr" ? "Récapitulatif" : loc === "en" ? "Summary" : loc === "ar" ? "ملخص" : "ⴰⴳⵣⵓⵎ"}</h3>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between"><span className="text-muted">{loc === "fr" ? "Bâtiment" : "Building"}</span><span className="font-medium text-dark dark:text-white">{buildingTypes.find((b) => b.id === form.buildingType)?.[loc] || "-"}</span></div>
                      <div className="flex justify-between"><span className="text-muted">{loc === "fr" ? "Prestation" : "Service"}</span><span className="font-medium text-dark dark:text-white">{serviceTypes.find((s) => s.id === form.serviceType)?.[loc] || "-"}</span></div>
                      <div className="flex justify-between"><span className="text-muted">{loc === "fr" ? "Surface" : "Surface"}</span><span className="font-medium text-dark dark:text-white">{form.surface ? `${form.surface} m²` : "—"}</span></div>
                      <div className="flex justify-between"><span className="text-muted">{loc === "fr" ? "Ville" : "City"}</span><span className="font-medium text-dark dark:text-white">{form.city || "-"}</span></div>
                      <div className="flex justify-between"><span className="text-muted">{loc === "fr" ? "Budget" : "Budget"}</span><span className="font-medium text-dark dark:text-white">{(budgetRanges.find((b:any) => b.id === form.budget) as any)?.[loc] || "-"}</span></div>
                      <div className="flex justify-between"><span className="text-muted">{loc === "fr" ? "Fichiers" : "Files"}</span><span className="font-medium text-dark dark:text-white">{form.files.length > 0 ? `${form.files.length} fichier(s)` : "Aucun"}</span></div>
                    </div>
                  </div>
                </div>
              )}
            </motion.div>
          </AnimatePresence>

          <div className="flex items-center justify-between mt-8">
            <button onClick={() => setStep(Math.max(0, step - 1))} className={`inline-flex items-center gap-2 px-5 py-3 rounded-full font-medium transition-all ${step === 0 ? "invisible" : "hover:bg-surface-alt dark:hover:bg-dark-alt text-muted"}`}>
              <ArrowLeft size={18} />
              {loc === "fr" ? "Précédent" : loc === "en" ? "Previous" : "السابق"}
            </button>
            {step < 6 ? (
              <button onClick={() => setStep(step + 1)} disabled={!canNext()} className="inline-flex items-center gap-2 px-6 py-3 bg-accent text-white font-semibold rounded-full hover:bg-accent-light disabled:opacity-40 disabled:cursor-not-allowed transition-all">
                {loc === "fr" ? "Suivant" : loc === "en" ? "Next" : "التالي"}
                <ArrowRight size={18} />
              </button>
            ) : (
              <button onClick={handleSubmit} disabled={!canNext() || sending} className="inline-flex items-center gap-2 px-8 py-4 bg-accent text-white font-bold rounded-full hover:bg-accent-light disabled:opacity-40 disabled:cursor-not-allowed transition-all shadow-xl shadow-accent/25">
                {sending ? (
                  <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                ) : (
                  <Send size={20} />
                )}
                {sending ? (loc === "fr" ? "Envoi..." : loc === "en" ? "Sending..." : loc === "ar" ? "جاري الإرسال..." : "ⴰⵣⵏ...") : (loc === "fr" ? "Envoyer la demande" : loc === "en" ? "Send request" : loc === "ar" ? "إرسال الطلب" : "ⴰⵣⵏ ⵜⵓⵜⵜⵔⴰ")}
              </button>
            )}
          </div>

          <div className="mt-4 h-2 bg-surface-alt dark:bg-dark-alt rounded-full overflow-hidden">
            <motion.div className="h-full bg-accent rounded-full" animate={{ width: `${((step + 1) / 7) * 100}%` }} transition={{ duration: 0.3 }} />
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}








































