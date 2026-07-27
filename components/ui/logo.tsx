"use client";

interface LogoProps {
  variant?: "full" | "compact" | "icon";
  dark?: boolean;
  className?: string;
}

function LogoCompact({ dark, className }: { dark: boolean; className?: string }) {
  const tc = dark ? "#FFFFFF" : "#111827";
  return (
    <div className={`inline-flex items-baseline ${className ?? ""}`} aria-label="RJ RENOVA">
      <span style={{ fontFamily: "var(--font-space-grotesk), var(--font-manrope), sans-serif", fontWeight: 800, fontSize: "1.6rem", color: "#F28C28", letterSpacing: "-0.02em", lineHeight: 1 }}>RJ</span>
      <span style={{ fontFamily: "var(--font-space-grotesk), var(--font-manrope), sans-serif", fontWeight: 800, fontSize: "1.6rem", color: tc, letterSpacing: "-0.02em", lineHeight: 1, marginLeft: "0.3em" }}>RE</span>
      <span style={{ display: "inline-block", width: "1.15em", height: "1.6rem", position: "relative", margin: "0 0.05em", lineHeight: 1 }}>
        <svg viewBox="0 0 16 28" style={{ position: "absolute", inset: 0, width: "100%", height: "140%", top: "-20%" }}>
          <line x1="14" y1="26" x2="2" y2="2" stroke="#F28C28" strokeWidth="3.5" strokeLinecap="round" />
        </svg>
      </span>
      <span style={{ fontFamily: "var(--font-space-grotesk), var(--font-manrope), sans-serif", fontWeight: 800, fontSize: "1.6rem", color: tc, letterSpacing: "-0.02em", lineHeight: 1 }}>NOVA</span>
    </div>
  );
}

function LogoFull({ dark, className }: { dark: boolean; className?: string }) {
  const tc = dark ? "#FFFFFF" : "#111827";
  return (
    <div className={`inline-flex flex-col ${className ?? ""}`} aria-label="RJ RENOVA">
      <div className="inline-flex items-baseline">
        <span style={{ fontFamily: "var(--font-space-grotesk), var(--font-manrope), sans-serif", fontWeight: 800, fontSize: "1.8rem", color: "#F28C28", letterSpacing: "-0.02em", lineHeight: 1 }}>RJ</span>
        <span style={{ fontFamily: "var(--font-space-grotesk), var(--font-manrope), sans-serif", fontWeight: 800, fontSize: "1.8rem", color: tc, letterSpacing: "-0.02em", lineHeight: 1, marginLeft: "0.25em" }}>RE</span>
        <span style={{ display: "inline-block", width: "1.1em", height: "1.8rem", position: "relative", margin: "0 0.02em", lineHeight: 1 }}>
          <svg viewBox="0 0 16 28" style={{ position: "absolute", inset: 0, width: "100%", height: "140%", top: "-20%" }}>
            <line x1="14" y1="26" x2="2" y2="2" stroke="#F28C28" strokeWidth="3.5" strokeLinecap="round" />
          </svg>
        </span>
        <span style={{ fontFamily: "var(--font-space-grotesk), var(--font-manrope), sans-serif", fontWeight: 800, fontSize: "1.8rem", color: tc, letterSpacing: "-0.02em", lineHeight: 1 }}>NOVA</span>
      </div>
      <div style={{ marginLeft: "0.25em", marginTop: "0.15em" }}>
        <p style={{ fontFamily: "var(--font-inter), sans-serif", fontWeight: 700, fontSize: "0.58rem", color: "#F28C28", letterSpacing: "0.12em", fontStyle: "italic", lineHeight: 1.3, margin: 0, whiteSpace: "nowrap" }}>
          ALUMINIUM FAÇADES &amp; ARCHITECTURAL SOLUTIONS
        </p>
      </div>
    </div>
  );
}

function LogoIcon({ className }: { className?: string }) {
  return (
    <span className={className} style={{ fontFamily: "var(--font-space-grotesk), var(--font-manrope), sans-serif", fontWeight: 800, fontSize: "1.4rem", color: "#F28C28", letterSpacing: "-0.02em", lineHeight: 1 }} aria-label="RJ">RJ</span>
  );
}

export function Logo({ variant = "compact", dark = false, className = "" }: LogoProps) {
  if (variant === "icon") return <LogoIcon className={className} />;
  if (variant === "full") return <LogoFull dark={dark} className={className} />;
  return <LogoCompact dark={dark} className={className} />;
}

