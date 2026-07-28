export default function NotFound() {
  return (
    <html lang="fr">
      <body style={{ fontFamily: "Manrope, sans-serif", background: "#FAFAF8", margin: 0, display: "flex", alignItems: "center", justifyContent: "center", height: "100vh" }}>
        <div style={{ textAlign: "center" }}>
          <h1 style={{ fontSize: 72, fontWeight: 800, color: "#143A5E", margin: 0 }}>404</h1>
          <p style={{ color: "#64748b", fontSize: 18 }}>Page introuvable</p>
          <a href="/" style={{ display: "inline-block", marginTop: 16, padding: "12px 32px", background: "#F28C28", color: "#fff", borderRadius: 50, fontWeight: 700, textDecoration: "none" }}>Retour à l'accueil</a>
        </div>
      </body>
    </html>
  );
}

