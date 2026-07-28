"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, X, Send, Loader2 } from "lucide-react";
import { useChat } from "@ai-sdk/react";
import { useI18n } from "@/lib/i18n/i18n-provider";

const greetings: Record<string, string> = {
  fr: "👋 Bonjour ! Je suis l'assistant RJ RENOVA. Comment puis-je vous aider ?",
  en: "👋 Hello! I'm the RJ RENOVA assistant. How can I help you?",
  ar: "👋 مرحباً ! أنا مساعد RJ RENOVA. كيف يمكنني مساعدتكم؟",
  tzm: "👋 ⴰⵣⵓⵍ ! ⵏⴽⴽⵉ ⴷ ⴰⵎⴰⵡⴰⵙ ⵏ RJ RENOVA. ⵎⴰⵏⵉⴽ ⴰⵖ ⵜⵣⵎⵔⴷ ⴰⴷ ⴰⴽ ⴰⵡⵙⵖ?",
};

const placeholders: Record<string, string> = {
  fr: "Écrivez votre message...",
  en: "Type your message...",
  ar: "اكتب رسالتك...",
  tzm: "ⴰⵔⵓ ⵜⵓⵣⵉⵏ ⵏⵏⴽ...",
};

export function Chatbot() {
  const { locale } = useI18n();
  const l = (locale === "tzm" ? "tzm" : locale) as "fr" | "en" | "ar" | "tzm";
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState("");
  const scrollRef = useRef<HTMLDivElement>(null);
  const { messages, sendMessage, status } = useChat({ api: "/api/chat" });

  useEffect(() => {
    if (scrollRef.current) scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
  }, [messages]);

  const handleSend = () => {
    if (!input.trim() || status !== "ready") return;
    sendMessage({ text: input });
    setInput("");
  };

  return (
    <>
      <button
        onClick={() => setOpen(!open)}
        className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full bg-accent text-white shadow-2xl shadow-accent/30 hover:bg-accent-light hover:scale-110 transition-all duration-300 flex items-center justify-center"
        aria-label="Chat"
      >
        {open ? <X size={24} /> : <MessageCircle size={24} />}
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="fixed bottom-24 right-6 z-50 w-[380px] max-w-[calc(100vw-3rem)] h-[550px] max-h-[70vh] bg-surface dark:bg-dark-alt rounded-2xl shadow-2xl border border-border dark:border-white/10 flex flex-col overflow-hidden"
          >
            <div className="bg-primary p-4 flex items-center gap-3 shrink-0">
              <div className="w-9 h-9 rounded-full bg-accent flex items-center justify-center text-white font-bold text-sm">RJ</div>
              <div>
                <div className="text-white font-heading font-bold text-sm">RJ RENOVA</div>
                <div className="text-white/60 text-xs">Assistant virtuel</div>
              </div>
            </div>

            <div ref={scrollRef} className="flex-1 overflow-y-auto p-4 space-y-4">
              {messages.length === 0 && (
                <div className="flex gap-3">
                  <div className="w-8 h-8 rounded-full bg-accent/20 flex items-center justify-center text-accent shrink-0 text-xs font-bold">RJ</div>
                  <div className="bg-surface-alt dark:bg-dark rounded-2xl rounded-tl-sm px-4 py-3 text-sm text-dark dark:text-white leading-relaxed max-w-[85%]">
                    {greetings[l] || greetings.fr}
                  </div>
                </div>
              )}

              {messages.map((m) => (
                <div key={m.id} className={`flex gap-3 ${m.role === "user" ? "flex-row-reverse" : ""}`}>
                  {m.role !== "user" && (
                    <div className="w-8 h-8 rounded-full bg-accent/20 flex items-center justify-center text-accent shrink-0 text-xs font-bold">RJ</div>
                  )}
                  <div className={`rounded-2xl px-4 py-3 text-sm leading-relaxed max-w-[85%] ${
                    m.role === "user"
                      ? "bg-accent text-white rounded-tr-sm"
                      : "bg-surface-alt dark:bg-dark text-dark dark:text-white rounded-tl-sm"
                  }`}>
                    {m.parts
                      .filter((p) => p.type === "text")
                      .map((p, i) => <span key={i}>{p.text}</span>)}
                    {m.parts.some((p) => p.type?.startsWith("tool-")) && (
                      <div className="text-xs text-accent mt-1 animate-pulse">⚙️ Traitement en cours...</div>
                    )}
                  </div>
                </div>
              ))}
            </div>

            <form
              onSubmit={(e) => { e.preventDefault(); handleSend(); }}
              className="p-4 border-t border-border dark:border-white/5 flex gap-2 shrink-0 bg-surface dark:bg-dark-alt"
            >
              <input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder={placeholders[l] || placeholders.fr}
                disabled={status !== "ready"}
                className="flex-1 px-4 py-2.5 rounded-xl border-2 border-border bg-transparent text-dark dark:text-white text-sm focus:border-accent outline-none disabled:opacity-50"
              />
              <button
                type="submit"
                disabled={status !== "ready" || !input.trim()}
                className="w-10 h-10 rounded-xl bg-accent text-white flex items-center justify-center hover:bg-accent-light disabled:opacity-40 transition-all shrink-0"
              >
                {status !== "ready" ? <Loader2 size={18} className="animate-spin" /> : <Send size={18} />}
              </button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

