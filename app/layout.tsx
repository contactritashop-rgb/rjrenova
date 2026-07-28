import { Manrope, Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";
import { MadeWithBadge } from "@/components/made-with-badge/made-with-badge";
import { metadata } from "@/components/root-metadata";
import { I18nProvider } from "@/lib/i18n/i18n-provider";
import { LocalBusinessSchema, FAQSchema, BreadcrumbSchema } from "@/components/seo/json-ld";
export { metadata };

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" suppressHydrationWarning>
      <body
        className={`${manrope.variable} ${inter.variable} ${spaceGrotesk.variable} font-sans antialiased bg-surface text-dark`}
      >
        <I18nProvider>
          {children}
        </I18nProvider>
        <ChatbotWrapper />
        <LocalBusinessSchema />
        <FAQSchema />
        <BreadcrumbSchema />
        <MadeWithBadge />
      </body>
    </html>
  );
}






