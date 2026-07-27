"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Clock, Send, Check } from "lucide-react";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { useI18n } from "@/lib/i18n/i18n-provider";

const info = {
  fr: { title: "Contactez-nous", subtitle: "Une question, un projet ? Notre équipe est à votre écoute.", address: "Siège social : Agadir, Maroc", phone: "(+212) 0660 006 757", email: "contact@rjrenova.ma", hours: "Lun-Ven: 8h-18h / Sam: 9h-13h" },
  en: { title: "Contact Us", subtitle: "A question, a project? Our team is here to listen.", address: "Head office: Agadir, Morocco", phone: "(+212) 0660 006 757", email: "contact@rjrenova.ma", hours: "Mon-Fri: 8AM-6PM / Sat: 9AM-1PM" },
  ar: { title: "اتصل بنا", subtitle: "سؤال، مشروع؟ فريقنا في خدمتكم.", address: "المقر الاجتماعي : أكادير، المغرب", phone: "(+212) 0660 006 757", email: "contact@rjrenova.ma", hours: "الإثنين-الجمعة: 8-18 / السبت: 9-13" },
};

export default function ContactPage() {
  const { locale } = useI18n();
  const l = locale as "fr" | "en" | "ar";
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", phone: "", subject: "", message: "" });

  return (
    <>
      <Header />
      <main>
        <section className="relative h-[35vh] min-h-[300px] flex items-center justify-center bg-dark">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/40 to-dark" />
          <div className="relative z-10 text-center px-6">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
              <h1 className="font-heading text-4xl md:text-6xl font-extrabold text-white mb-4">{info[l].title}</h1>
              <p className="text-white/60 text-lg">{info[l].subtitle}</p>
            </motion.div>
          </div>
        </section>

        <section className="section-padding">
          <div className="container-custom px-6 lg:px-12 max-w-5xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
              <div className="lg:col-span-2">
                {sent ? (
                  <motion.div initial={{ scale: 0.9 }} animate={{ scale: 1 }} className="text-center py-16">
                    <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-accent/10 flex items-center justify-center"><Check size={32} className="text-accent" /></div>
                    <h2 className="font-heading text-2xl font-bold text-dark dark:text-white mb-2">{l === "fr" ? "Message envoyé !" : l === "en" ? "Message sent!" : "تم الإرسال !"}</h2>
                    <p className="text-muted">{l === "fr" ? "Nous vous répondrons sous 24h." : l === "en" ? "We will respond within 24h." : "سنرد عليكم في غضون 24 ساعة."}</p>
                  </motion.div>
                ) : (
                  <form onSubmit={(e) => { e.preventDefault(); setSent(true); }} className="space-y-5">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                      <div><label className="block text-sm font-medium text-dark dark:text-white mb-1.5">{l === "fr" ? "Nom" : l === "en" ? "Name" : "الاسم"} *</label><input required value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} className="w-full px-4 py-3 rounded-xl border-2 border-border bg-transparent text-dark dark:text-white focus:border-accent outline-none transition-colors" /></div>
                      <div><label className="block text-sm font-medium text-dark dark:text-white mb-1.5">Email *</label><input required type="email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} className="w-full px-4 py-3 rounded-xl border-2 border-border bg-transparent text-dark dark:text-white focus:border-accent outline-none transition-colors" /></div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                      <div><label className="block text-sm font-medium text-dark dark:text-white mb-1.5">{l === "fr" ? "Téléphone" : l === "en" ? "Phone" : "الهاتف"}</label><input value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} className="w-full px-4 py-3 rounded-xl border-2 border-border bg-transparent text-dark dark:text-white focus:border-accent outline-none transition-colors" /></div>
                      <div><label className="block text-sm font-medium text-dark dark:text-white mb-1.5">{l === "fr" ? "Sujet" : l === "en" ? "Subject" : "الموضوع"}</label><input value={form.subject} onChange={(e) => setForm({ ...form, subject: e.target.value })} className="w-full px-4 py-3 rounded-xl border-2 border-border bg-transparent text-dark dark:text-white focus:border-accent outline-none transition-colors" /></div>
                    </div>
                    <div><label className="block text-sm font-medium text-dark dark:text-white mb-1.5">{l === "fr" ? "Message" : l === "en" ? "Message" : "الرسالة"} *</label><textarea required rows={5} value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} className="w-full px-4 py-3 rounded-xl border-2 border-border bg-transparent text-dark dark:text-white focus:border-accent outline-none transition-colors resize-none" /></div>
                    <button type="submit" className="inline-flex items-center gap-2 px-8 py-4 bg-accent text-white font-bold rounded-full hover:bg-accent-light transition-all shadow-xl shadow-accent/25"><Send size={20} />{l === "fr" ? "Envoyer" : l === "en" ? "Send" : "إرسال"}</button>
                  </form>
                )}
              </div>

              <div className="space-y-6">
                <div className="p-6 rounded-2xl bg-surface-alt dark:bg-dark-alt">
                  <div className="flex items-center gap-3 mb-4"><MapPin size={20} className="text-accent" /><span className="font-semibold text-dark dark:text-white">{info[l].address}</span></div>
                  <div className="flex items-center gap-3 mb-4"><Phone size={20} className="text-accent" /><span className="text-dark dark:text-white">{info[l].phone}</span></div>
                  <div className="flex items-center gap-3 mb-4"><Mail size={20} className="text-accent" /><span className="text-dark dark:text-white">{info[l].email}</span></div>
                  <div className="flex items-center gap-3"><Clock size={20} className="text-accent" /><span className="text-muted text-sm">{info[l].hours}</span></div>
                </div>
                <a href="https://wa.me/212XXXXXXXXX" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 w-full p-4 rounded-2xl bg-green-500 text-white font-semibold hover:bg-green-600 transition-all">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
                  WhatsApp
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}


