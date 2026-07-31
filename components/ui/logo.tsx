"use client";

interface LogoProps {
  variant?: "full" | "compact" | "icon";
  dark?: boolean;
  className?: string;
}

export function Logo({ variant = "compact", dark = false, className = "" }: LogoProps) {
  return (
    <img
      src="/logo.png"
      alt="RJ RENOVA"
      className={`w-auto object-contain block ${className}`}
    />
  );
}
