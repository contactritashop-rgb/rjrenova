"use client";

interface LogoProps {
  variant?: "full" | "compact" | "icon";
  dark?: boolean;
  className?: string;
}

function LogoCompact({ dark, className }: { dark: boolean; className?: string }) {
  const tc = dark ? "#FFFFFF" : "#111827";
  const or = "#F28C28";
  return (
    <svg viewBox="0 0 290 40" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} aria-label="RJ RENOVA" role="img">
      <text x="0" y="34" fontFamily="'Manrope','Space Grotesk',sans-serif" fontWeight="800" fontSize="38" fill={or} letterSpacing="-0.5">RJ</text>
      <text x="68" y="34" fontFamily="'Manrope','Space Grotesk',sans-serif" fontWeight="800" fontSize="38" fill={tc} letterSpacing="-0.5">RE</text>
      <line x1="138" y1="40" x2="152" y2="4" stroke={or} strokeWidth="5" strokeLinecap="round" />
      <text x="154" y="34" fontFamily="'Manrope','Space Grotesk',sans-serif" fontWeight="800" fontSize="38" fill={tc} letterSpacing="-0.5">NOVA</text>
    </svg>
  );
}

function LogoFull({ dark, className }: { dark: boolean; className?: string }) {
  const tc = dark ? "#FFFFFF" : "#111827";
  const or = "#F28C28";
  return (
    <svg viewBox="0 0 300 72" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} aria-label="RJ RENOVA" role="img">
      <text x="0" y="34" fontFamily="'Manrope','Space Grotesk',sans-serif" fontWeight="800" fontSize="38" fill={or} letterSpacing="-0.5">RJ</text>
      <text x="68" y="34" fontFamily="'Manrope','Space Grotesk',sans-serif" fontWeight="800" fontSize="38" fill={tc} letterSpacing="-0.5">RE</text>
      <line x1="138" y1="40" x2="152" y2="4" stroke={or} strokeWidth="5" strokeLinecap="round" />
      <text x="154" y="34" fontFamily="'Manrope','Space Grotesk',sans-serif" fontWeight="800" fontSize="38" fill={tc} letterSpacing="-0.5">NOVA</text>
      <text x="68" y="54" fontFamily="'Manrope','Inter',sans-serif" fontWeight="700" fontSize="10" fill={or} letterSpacing="2" fontStyle="italic">ALUMINIUM FAÇADES &amp;</text>
      <text x="68" y="67" fontFamily="'Manrope','Inter',sans-serif" fontWeight="700" fontSize="10" fill={or} letterSpacing="2" fontStyle="italic">ARCHITECTURAL SOLUTIONS</text>
    </svg>
  );
}

function LogoIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 55 40" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} aria-label="RJ" role="img">
      <text x="0" y="34" fontFamily="'Manrope','Space Grotesk',sans-serif" fontWeight="800" fontSize="38" fill="#F28C28" letterSpacing="-0.5">RJ</text>
    </svg>
  );
}

/**
 * RJ RENOVA brand logo — text-based SVG.
 * variant="full"    – RJ + RE/NOVA + tagline (footer, login)
 * variant="compact" – RJ + RE/NOVA only (header)
 * variant="icon"    – RJ only (favicon)
 */
export function Logo({ variant = "compact", dark = false, className = "" }: LogoProps) {
  if (variant === "icon") return <LogoIcon className={className} />;
  if (variant === "full") return <LogoFull dark={dark} className={className} />;
  return <LogoCompact dark={dark} className={className} />;
}

