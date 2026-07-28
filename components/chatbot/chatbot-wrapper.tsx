"use client";

import { usePathname } from "next/navigation";
import { Chatbot } from "./chatbot";

export function ChatbotWrapper() {
  const pathname = usePathname();
  if (pathname?.startsWith("/admin")) return null;
  return <Chatbot />;
}

