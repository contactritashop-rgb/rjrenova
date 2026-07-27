import React from "react";

interface LogoProps {
  variant?: "full" | "compact" | "icon";
  /** on dark backgrounds use white for dark parts */
  dark?: boolean;
  className?: string;
}

/**
 * RJ RENOVA brand logo.
 * variant="full"    – RJ + RE/NOVA + tagline (footer, login)
 * variant="compact" – RJ + RE/NOVA only (header desktop)
 * variant="icon"    – RJ mark only (favicon / mobile)
 */
export function Logo({ variant = "compact", dark = false, className = "" }: LogoProps) {
  const textColor = dark ? "#FFFFFF" : "#111827";
  const orange = "#F28C28";

  if (variant === "icon") {
    return (
      <svg
        viewBox="0 0 60 48"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={className}
        aria-label="RJ RENOVA"
        role="img"
      >
        <text x="0" y="38" fontFamily="'Manrope', 'Space Grotesk', sans-serif" fontWeight="800" fontSize="42" fill={orange} letterSpacing="-1">RJ</text>
      </svg>
    );
  }

  if (variant === "compact") {
    return (
      <svg
        viewBox="0 0 320 48"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={className}
        aria-label="RJ RENOVA"
        role="img"
      >
        {/* RJ */}
        <text x="0" y="38" fontFamily="'Manrope', 'Space Grotesk', sans-serif" fontWeight="800" fontSize="42" fill={orange} letterSpacing="-1">RJ</text>
        {/* RE */}
        <text x="76" y="38" fontFamily="'Manrope', 'Space Grotesk', sans-serif" fontWeight="800" fontSize="42" fill={textColor} letterSpacing="-1">RE</text>
        {/* slash diagonal */}
        <line x1="148" y1="48" x2="162" y2="0" stroke={orange} strokeWidth="5" strokeLinecap="round" />
        {/* NOVA */}
        <text x="164" y="38" fontFamily="'Manrope', 'Space Grotesk', sans-serif" fontWeight="800" fontSize="42" fill={textColor} letterSpacing="-1">NOVA</text>
      </svg>
    );
  }

  // variant === "full"
  return (
    <svg
      viewBox="0 0 320 72"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-label="RJ RENOVA – Aluminium Facades & Architectural Solutions"
      role="img"
    >
      {/* RJ */}
      <text x="0" y="38" fontFamily="'Manrope', 'Space Grotesk', sans-serif" fontWeight="800" fontSize="42" fill={orange} letterSpacing="-1">RJ</text>
      {/* RE */}
      <text x="76" y="38" fontFamily="'Manrope', 'Space Grotesk', sans-serif" fontWeight="800" fontSize="42" fill={textColor} letterSpacing="-1">RE</text>
      {/* slash diagonal */}
      <line x1="148" y1="48" x2="162" y2="0" stroke={orange} strokeWidth="5" strokeLinecap="round" />
      {/* NOVA */}
      <text x="164" y="38" fontFamily="'Manrope', 'Space Grotesk', sans-serif" fontWeight="800" fontSize="42" fill={textColor} letterSpacing="-1">NOVA</text>
      {/* tagline line 1 */}
      <text x="76" y="57" fontFamily="'Manrope', 'Inter', sans-serif" fontWeight="700" fontSize="10" fill={orange} letterSpacing="2.5" fontStyle="italic">ALUMINIUM FAÇADES &amp;</text>
      {/* tagline line 2 */}
      <text x="76" y="70" fontFamily="'Manrope', 'Inter', sans-serif" fontWeight="700" fontSize="10" fill={orange} letterSpacing="2.5" fontStyle="italic">ARCHITECTURAL SOLUTIONS</text>
    </svg>
  );
}

