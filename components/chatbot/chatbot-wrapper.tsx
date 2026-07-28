"use client";

import dynamic from "next/dynamic";

const Chatbot = dynamic(() => import("@/components/chatbot/chatbot").then((m) => ({ default: m.Chatbot })), { ssr: false });

export function ChatbotWrapper() {
  return <Chatbot />;
}

