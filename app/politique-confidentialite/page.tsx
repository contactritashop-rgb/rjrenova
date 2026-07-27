"use client";

import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { useI18n } from "@/lib/i18n/i18n-provider";

const content = {
  fr: {
    title: "Politique de Confidentialité",
    update: "Dernière mise à jour : Juillet 2026",
    s1t: "1. Collecte des données",
    s1b: "RJ RENOVA collecte les données personnelles que vous nous fournissez volontairement via nos formulaires de contact et de devis : nom, email, téléphone, et informations relatives à votre projet.",
    s2t: "2. Utilisation des données",
    s2b: "Vos données sont utilisées exclusivement pour traiter vos demandes, établir des devis, et assurer le suivi de nos prestations. Elles ne sont jamais vendues ni cédées à des tiers.",
    s3t: "3. Conservation",
    s3b: "Vos données sont conservées pendant la durée nécessaire à la relation commerciale, et au maximum 5 ans après le dernier contact.",
    s4t: "4. Vos droits",
    s4b: "Conformément à la loi 09-08, vous disposez d'un droit d'accès, de rectification et de suppression de vos données. Contactez-nous à contact@rjrenova.ma pour exercer ces droits.",
    s5t: "5. Cookies",
    s5b: "Notre site utilise des cookies techniques nécessaires à son fonctionnement. Aucun cookie publicitaire n'est déposé sans votre consentement.",
  },
  en: {
    title: "Privacy Policy",
    update: "Last updated: July 2026",
    s1t: "1. Data Collection",
    s1b: "RJ RENOVA collects personal data that you voluntarily provide through our contact and quote forms: name, email, phone number, and project-related information.",
    s2t: "2. Data Usage",
    s2b: "Your data is used exclusively to process your requests, prepare quotes, and follow up on our services. It is never sold or shared with third parties.",
    s3t: "3. Data Retention",
    s3b: "Your data is retained for the duration necessary for the business relationship, up to a maximum of 5 years after the last contact.",
    s4t: "4. Your Rights",
    s4b: "In accordance with Law 09-08, you have the right to access, rectify, and delete your data. Contact us at contact@rjrenova.ma to exercise these rights.",
    s5t: "5. Cookies",
    s5b: "Our site uses technical cookies necessary for its operation. No advertising cookies are placed without your consent.",
  },
  ar: {
    title: "سياسة الخصوصية",
    update: "آخر تحديث : يوليو 2026",
    s1t: "1. جمع البيانات",
    s1b: "تجمع RJ RENOVA البيانات الشخصية التي تقدمونها طواعية عبر نماذج الاتصال وطلب العروض : الاسم، البريد الإلكتروني، الهاتف، ومعلومات عن مشروعكم.",
    s2t: "2. استخدام البيانات",
    s2b: "تُستخدم بياناتكم حصريًا لمعالجة طلباتكم، إعداد عروض الأسعار، ومتابعة خدماتنا. لا تُباع ولا تُنقل لأطراف ثالثة.",
    s3t: "3. الاحتفاظ بالبيانات",
    s3b: "تُحفظ بياناتكم للمدة اللازمة للعلاقة التجارية، وبحد أقصى 5 سنوات بعد آخر اتصال.",
    s4t: "4. حقوقكم",
    s4b: "وفقًا للقانون 09-08، لكم الحق في الوصول إلى بياناتكم وتصحيحها وحذفها. اتصلوا بنا على contact@rjrenova.ma لممارسة هذه الحقوق.",
    s5t: "5. ملفات تعريف الارتباط",
    s5b: "يستخدم موقعنا ملفات تعريف ارتباط تقنية ضرورية لتشغيله. لا تُودع أي ملفات إعلانية دون موافقتكم.",
  },
  tzm: {
    title: "ⵜⴰⵙⵔⵜⵉⵜ ⵏ ⵜⵉⵏⵏⵓⵜⵍⴰ",
    update: "ⴰⵙⴳⴳⵯⴰⵙ ⴰⵎⴳⴳⴰⵔⵓ : ⵢⵓⵍⵢⵓⵣ 2026",
    s1t: "1. ⴰⵙⵎⵓⵏ ⵏ ⵉⵙⴼⴽⴰ",
    s1b: "RJ RENOVA ⴷⴰ ⵜⵙⵎⵓⵏ ⵉⵙⴼⴽⴰ ⵉⵎⵙⵏⴼⵍⵓⵍⵏ ⵏⵏⴰ ⵜⵎⵓⴷⴷⵓⵎ ⵙ ⵍⵅⵉⵕ ⵙⴳ ⵜⴼⵍⵡⵉⵏ ⵏ ⵓⵎⵢⴰⵡⴰⴹ ⴷ ⵓⵙⵡⵉⵔⵉ : ⵉⵙⵎ, ⵉⵎⴰⵢⵍ, ⵜⵉⵍⵉⴼⵓⵏ, ⴷ ⵉⵏⵖⵎⵉⵙⵏ ⵅⴼ ⵓⵙⵏⴼⴰⵔ.",
    s2t: "2. ⴰⵙⵙⵓⵎⵔ ⵏ ⵉⵙⴼⴽⴰ",
    s2b: "ⵉⵙⴼⴽⴰ ⵏⵏⴽ ⴷⴰ ⵙⵙⵓⵎⵔⵏ ⵖⴰⵙ ⴰⴷ ⵜⵜⵡⴰⵙⴽⴰⵔⵏ ⵜⵓⵜⵜⵔⵉⵏ, ⴰⴷ ⵜⵜⵡⴰⵙⵏⴼⵍⵓⵍⵏ ⵉⵙⵡⵉⵔⵉⵢⵏ, ⴷ ⵓⵙⵖⵣⵏ ⵏ ⵜⵡⵓⵔⵉⵡⵉⵏ. ⵓⵔ ⴷⴰ ⵜⵜⵡⴰⵣⵏⵣⴰⵏ ⵏⵖ ⵜⵜⵡⴰⵣⴰⵏ ⵉ ⵡⵉⵢⵢⴰⴹ.",
    s3t: "3. ⵓⵙⵖⵣⵏ ⵏ ⵉⵙⴼⴽⴰ",
    s3b: "ⵉⵙⴼⴽⴰ ⵏⵏⴽ ⴷⴰ ⵜⵜⵡⴰⵃⵟⵟⴰⵏ ⴰⵍ ⵜⴰⴳⴰⵔⴰ ⵏ ⵜⵣⴷⴰⵢⵜ ⵜⴰⵙⴱⴱⴰⴱⵜ, ⵓⵔ ⵉⵣⵔⵉ 5 ⵉⵙⴳⴳⵯⴰⵙⵏ ⴷⴼⴼⵉⵔ ⵓⵎⵢⴰⵡⴰⴹ ⴰⵎⴳⴳⴰⵔⵓ.",
    s4t: "4. ⵉⵣⵔⴼⴰⵏ ⵏⵏⴽ",
    s4b: "ⴳ ⵓⵙⵔⵓⵙ ⵏ ⵓⵣⵔⴼ 09-08, ⵖⵓⵔⴽ ⴰⵣⵔⴼ ⴰⴷ ⵜⵥⵕⴷ, ⴰⴷ ⵜⵙⵏⴼⵍⴷ, ⴷ ⴰⴷ ⵜⴽⴽⵙⴷ ⵉⵙⴼⴽⴰ ⵏⵏⴽ. ⴰⵡⵙ ⴰⵖ ⵖⵔ contact@rjrenova.ma.",
    s5t: "5. ⵉⴽⵓⴽⵉⵢⵏ",
    s5b: "ⵡⴰⵏⵜⵉⵔⵏⵉⵜ ⵏⵏⵖ ⴷⴰ ⵉⵙⵙⵓⵎⵔ ⵉⴽⵓⴽⵉⵢⵏ ⵉⵜⵉⴽⵏⵉⵢⵏ ⵉⵇⵇⵏⵏ ⵖⵔ ⵜⵡⵓⵔⵉ ⵏⵏⵙ. ⵓⵔ ⴷⴰ ⵉⵜⵜⵡⴰⵙⵔⵙ ⴽⵔⴰ ⵏ ⵓⴽⵓⴽⵉ ⴰⴷⵍⴰⵏ ⴱⵍⴰ ⵎⴰⵔⵔⴰ ⵜⵎⵓⴷⴷⵓⵎ ⵍⵇⴱⵓⵍ.",
  },
};

export default function PrivacyPage() {
  const { locale } = useI18n();
  const l = (locale === "tzm" ? "tzm" : locale) as "fr" | "en" | "ar" | "tzm";
  const t = content[l] || content.fr;

  return (
    <>
      <Header />
      <main className="pt-28 pb-20 section-padding">
        <div className="container-custom px-6 lg:px-12 max-w-3xl mx-auto">
          <h1 className="font-heading text-4xl font-extrabold text-dark dark:text-white mb-4">{t.title}</h1>
          <p className="text-muted mb-10">{t.update}</p>
          <section className="mb-8"><h2 className="font-heading text-2xl font-bold text-dark dark:text-white mb-3">{t.s1t}</h2><p className="text-dark/70 dark:text-white/70 leading-relaxed">{t.s1b}</p></section>
          <section className="mb-8"><h2 className="font-heading text-2xl font-bold text-dark dark:text-white mb-3">{t.s2t}</h2><p className="text-dark/70 dark:text-white/70 leading-relaxed">{t.s2b}</p></section>
          <section className="mb-8"><h2 className="font-heading text-2xl font-bold text-dark dark:text-white mb-3">{t.s3t}</h2><p className="text-dark/70 dark:text-white/70 leading-relaxed">{t.s3b}</p></section>
          <section className="mb-8"><h2 className="font-heading text-2xl font-bold text-dark dark:text-white mb-3">{t.s4t}</h2><p className="text-dark/70 dark:text-white/70 leading-relaxed">{t.s4b}</p></section>
          <section className="mb-8"><h2 className="font-heading text-2xl font-bold text-dark dark:text-white mb-3">{t.s5t}</h2><p className="text-dark/70 dark:text-white/70 leading-relaxed">{t.s5b}</p></section>
        </div>
      </main>
      <Footer />
    </>
  );
}

