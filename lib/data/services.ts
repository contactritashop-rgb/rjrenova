export interface ServiceData {
  slug: string;
  icon: string;
  title: { fr: string; en: string; ar: string };
  subtitle: { fr: string; en: string; ar: string };
  description: { fr: string; en: string; ar: string };
  heroImage: string;
  advantages: {
    title: { fr: string; en: string; ar: string };
    description: { fr: string; en: string; ar: string };
    icon: string;
  }[];
  process: {
    step: string;
    title: { fr: string; en: string; ar: string };
    description: { fr: string; en: string; ar: string };
     icon: string;
   }[];
   gallery: { src: string; alt: { fr: string; en: string; ar: string } }[];
   faq: { q: { fr: string; en: string; ar: string }; a: { fr: string; en: string; ar: string } }[];
   ctaTitle: { fr: string; en: string; ar: string };
 }

 const servicesData: Record<string, ServiceData> = {
   "mur-rideau": {
     slug: "mur-rideau",
     icon: "Cuboid",
     title: {
       fr: "Mur Rideau Aluminium",
       en: "Aluminum Curtain Wall",
       ar: "واجهات زجاجية من الألمنيوم",
     },
     subtitle: {
       fr: "Façades légères et transparentes pour une architecture moderne",
       en: "Lightweight, transparent facades for modern architecture",
       ar: "واجهات خفيفة وشفافة لعمارة عصرية",
     },
     description: {
       fr: "Le mur rideau est la signature architecturale des bâtiments contemporains. RJ RENOVA conçoit et installe des murs rideaux aluminium sur mesure, alliant performance thermique, étanchéité parfaite et esthétique minimaliste. Nos solutions s'adaptent à tous les types de projets : tours de bureaux, centres commerciaux, hôtels de luxe et bâtiments institutionnels.",
       en: "The curtain wall is the architectural signature of contemporary buildings. RJ RENOVA designs and installs custom aluminum curtain walls, combining thermal performance, perfect sealing, and minimalist aesthetics. Our solutions adapt to all project types: office towers, shopping centers, luxury hotels, and institutional buildings.",
       ar: "الواجهة الزجاجية هي التوقيع المعماري للمباني المعاصرة. تصمم وتركب RJ RENOVA واجهات زجاجية من الألمنيوم حسب الطلب، تجمع بين الأداء الحراري والإحكام المثالي والجمالية البسيطة. تتكيف حلولنا مع جميع أنواع المشاريع: أبراج المكاتب، المراكز التجارية، الفنادق الفاخرة والمباني المؤسساتية.",
     },
     heroImage: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1200&q=80",
     advantages: [
       { title: { fr: "Luminosité Maximale", en: "Maximum Light", ar: "إضاءة قصوى" }, description: { fr: "Jusqu'à 90% de surface vitrée pour des espaces baignés de lumière naturelle.", en: "Up to 90% glazed surface for spaces flooded with natural light.", ar: "حتى 90% من السطح مزجج لمساحات تغمرها الإضاءة الطبيعية." }, icon: "Sun" },
       { title: { fr: "Isolation Thermique", en: "Thermal Insulation", ar: "عزل حراري" }, description: { fr: "Rupture de pont thermique intégrée pour une performance énergétique optimale.", en: "Integrated thermal break for optimal energy performance.", ar: "قاطع حراري مدمج لأداء طاقي مثالي." }, icon: "Thermometer" },
       { title: { fr: "Étanchéité Parfaite", en: "Perfect Sealing", ar: "إحكام مثالي" }, description: { fr: "Système de drainage intégré et joints EPDM haute performance.", en: "Integrated drainage system and high-performance EPDM seals.", ar: "نظام تصريف مدمج ومانعات تسرب عالية الأداء." }, icon: "Shield" },
       { title: { fr: "Design Sur Mesure", en: "Custom Design", ar: "تصميم حسب الطلب" }, description: { fr: "Large choix de profilés, couleurs et finitions pour une identité unique.", en: "Wide choice of profiles, colors, and finishes for a unique identity.", ar: "تشكيلة واسعة من البروفيلات والألوان والتشطيبات لهوية فريدة." }, icon: "Palette" },
     ],
     process: [
       { step: "01", title: { fr: "Étude de Faisabilité", en: "Feasibility Study", ar: "دراسة الجدوى" }, description: { fr: "Analyse structurelle et thermique du bâtiment.", en: "Structural and thermal analysis of the building.", ar: "تحليل هيكلي وحراري للمبنى." }, icon: "ClipboardCheck" },
       { step: "02", title: { fr: "Conception 3D", en: "3D Design", ar: "تصميم ثلاثي الأبعاد" }, description: { fr: "Modélisation complète et validation des profilés.", en: "Complete modeling and profile validation.", ar: "نمذجة كاملة والتحقق من البروفيلات." }, icon: "PencilRuler" },
       { step: "03", title: { fr: "Fabrication", en: "Manufacturing", ar: "التصنيع" }, description: { fr: "Usinage de précision et contrôle qualité.", en: "Precision machining and quality control.", ar: "تصنيع دقيق ومراقبة الجودة." }, icon: "Factory" },
       { step: "04", title: { fr: "Installation", en: "Installation", ar: "التركيب" }, description: { fr: "Pose par équipes certifiées avec nacelles.", en: "Installation by certified teams with platforms.", ar: "تركيب من قبل فرق معتمدة بمنصات." }, icon: "Wrench" },
     ],
     gallery: [
       { src: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=600&q=80", alt: { fr: "Tour de bureaux", en: "Office tower", ar: "برج مكاتب" } },
       { src: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=600&q=80", alt: { fr: "Façade vitrée", en: "Glass facade", ar: "واجهة زجاجية" } },
       { src: "https://images.unsplash.com/photo-1464938050520-ef2270bb8ce8?w=600&q=80", alt: { fr: "Détail aluminium", en: "Aluminum detail", ar: "تفصيل ألمنيوم" } },
     ],
     faq: [
       { q: { fr: "Quelle est la durée de vie d'un mur rideau ?", en: "What is the lifespan of a curtain wall?", ar: "ما هو عمر الواجهة الزجاجية؟" }, a: { fr: "Nos murs rideaux sont conçus pour durer plus de 30 ans avec un entretien minimal.", en: "Our curtain walls are designed to last over 30 years with minimal maintenance.", ar: "صممت واجهاتنا الزجاجية لتدوم أكثر من 30 سنة مع صيانة بسيطة." } },
       { q: { fr: "Quels types de vitrage proposez-vous ?", en: "What types of glazing do you offer?", ar: "ما أنواع الزجاج التي تقترحونها؟" }, a: { fr: "Simple, double ou triple vitrage, avec options : contrôle solaire, autonettoyant, opacifiant, acoustique.", en: "Single, double, or triple glazing with options: solar control, self-cleaning, switchable, acoustic.", ar: "زجاج بسيط، مزدوج أو ثلاثي مع خيارات: تحكم شمسي، ذاتي التنظيف، قابل للتعتيم، صوتي." } },
     ],
     ctaTitle: { fr: "Prêt à illuminer votre bâtiment ?", en: "Ready to brighten your building?", ar: "مستعد لإضاءة مبناك؟" },
   },

   "bardage": {
     slug: "bardage",
     icon: "Layers",
     title: {
       fr: "Bardage Aluminium",
       en: "Aluminum Cladding",
       ar: "تكسية خارجية من الألمنيوم",
     },
     subtitle: {
       fr: "Revêtement extérieur alliant esthétique, isolation et protection durable",
       en: "Exterior cladding combining aesthetics, insulation, and lasting protection",
       ar: "تكسية خارجية تجمع بين الجمال والعزل والحماية الدائمة",
     },
     description: {
       fr: "Le bardage aluminium RJ RENOVA transforme l'apparence de vos bâtiments tout en améliorant leur performance énergétique. Disponible en de multiples finitions — laqué, anodisé, effet bois, perforé — notre bardage s'adapte à tous les styles architecturaux, du plus classique au plus contemporain.",
       en: "RJ RENOVA aluminum cladding transforms the appearance of your buildings while improving energy performance. Available in multiple finishes — lacquered, anodized, wood effect, perforated — our cladding adapts to all architectural styles, from classic to contemporary.",
       ar: "تحول التكسية الخارجية من RJ RENOVA مظهر مبانيها مع تحسين أدائها الطاقي. متوفرة بتشطيبات متعددة — مطلية، مؤكسدة، تأثير خشب، مثقبة — تتكيف تكسيتنا مع جميع الأساليب المعمارية.",
     },
     heroImage: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1200&q=80",
     advantages: [
       { title: { fr: "Protection Durable", en: "Lasting Protection", ar: "حماية دائمة" }, description: { fr: "Résistance exceptionnelle aux intempéries, UV et corrosion.", en: "Exceptional resistance to weather, UV, and corrosion.", ar: "مقاومة استثنائية للعوامل الجوية والأشعة فوق البنفسجية والتآكل." }, icon: "Shield" },
       { title: { fr: "Isolation Renforcée", en: "Enhanced Insulation", ar: "عزل معزز" }, description: { fr: "Réduction jusqu'à 30% des déperditions thermiques.", en: "Up to 30% reduction in thermal loss.", ar: "تقليص يصل إلى 30% من الفقدان الحراري." }, icon: "Thermometer" },
       { title: { fr: "Entretien Minimal", en: "Minimal Maintenance", ar: "صيانة بسيطة" }, description: { fr: "Aucun traitement requis, un simple nettoyage à l'eau suffit.", en: "No treatment required, a simple water cleaning is enough.", ar: "لا حاجة لأي معالجة، تنظيف بسيط بالماء يكفي." }, icon: "Sparkles" },
       { title: { fr: "Finitions Multiples", en: "Multiple Finishes", ar: "تشطيبات متعددة" }, description: { fr: "Plus de 200 couleurs RAL et finitions spéciales disponibles.", en: "Over 200 RAL colors and special finishes available.", ar: "أكثر من 200 لون وتشطيبات خاصة متوفرة." }, icon: "Palette" },
     ],
     process: [
       { step: "01", title: { fr: "Diagnostic", en: "Diagnosis", ar: "تشخيص" }, description: { fr: "Analyse de la façade existante et recommandations.", en: "Analysis of existing facade and recommendations.", ar: "تحليل الواجهة الحالية وتوصيات." }, icon: "ClipboardCheck" },
       { step: "02", title: { fr: "Design", en: "Design", ar: "تصميم" }, description: { fr: "Choix des finitions et modélisation.", en: "Choice of finishes and modeling.", ar: "اختيار التشطيبات والنمذجة." }, icon: "PencilRuler" },
       { step: "03", title: { fr: "Production", en: "Production", ar: "إنتاج" }, description: { fr: "Découpe et laquage en usine.", en: "Cutting and lacquering in factory.", ar: "تقطيع وطلاء في المصنع." }, icon: "Factory" },
       { step: "04", title: { fr: "Pose", en: "Installation", ar: "تركيب" }, description: { fr: "Fixation sur ossature avec isolation intégrée.", en: "Fixing on framework with integrated insulation.", ar: "تثبيت على هيكل مع عزل مدمج." }, icon: "Wrench" },
     ],
     gallery: [
       { src: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=600&q=80", alt: { fr: "Bardage moderne", en: "Modern cladding", ar: "تكسية عصرية" } },
       { src: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=600&q=80", alt: { fr: "Villa contemporaine", en: "Contemporary villa", ar: "فيلا عصرية" } },
       { src: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=600&q=80", alt: { fr: "Résidence bardée", en: "Clad residence", ar: "مسكن مكسو" } },
     ],
     faq: [
       { q: { fr: "Le bardage aluminium est-il adapté au climat marocain ?", en: "Is aluminum cladding suitable for the Moroccan climate?", ar: "هل التكسية مناسبة للمناخ المغربي؟" }, a: { fr: "Absolument. L'aluminium résiste parfaitement à la chaleur, au soleil intense et à l'air salin des zones côtières.", en: "Absolutely. Aluminum resists heat, intense sun, and saline air of coastal areas perfectly.", ar: "بالتأكيد. الألمنيوم يقاوم الحرارة والشمس القوية والهواء المالح للمناطق الساحلية." } },
     ],
     ctaTitle: { fr: "Transformez votre façade dès maintenant", en: "Transform your facade now", ar: "حول واجهتك الآن" },
   },

   "habillage-facade": {
     slug: "habillage-facade",
     icon: "PaintBucket",
     title: {
       fr: "Habillage de Façade",
       en: "Facade Dressing",
       ar: "تلبيس الواجهات",
     },
     subtitle: {
       fr: "Rénovation et embellissement de façades existantes avec des solutions aluminium",
       en: "Renovation and beautification of existing facades with aluminum solutions",
       ar: "تجديد وتجميل الواجهات القائمة بحلول الألمنيوم",
     },
     description: {
       fr: "L'habillage de façade RJ RENOVA donne une seconde vie à vos bâtiments. Sans démolir, nous transformons l'apparence et améliorons les performances énergétiques de vos façades existantes. Une solution rapide, économique et spectaculaire pour moderniser votre patrimoine immobilier.",
       en: "RJ RENOVA facade dressing gives a second life to your buildings. Without demolition, we transform the appearance and improve the energy performance of your existing facades. A fast, economical, and spectacular solution to modernize your real estate assets.",
       ar: "يمنح تلبيس الواجهات من RJ RENOVA حياة ثانية لمبانيها. بدون هدم، نحول المظهر ونحسن الأداء الطاقي لواجهاتكم الحالية. حل سريع واقتصادي ورائع لتحديث ممتلكاتكم العقارية.",
     },
     heroImage: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=1200&q=80",
     advantages: [
       { title: { fr: "Sans Démolition", en: "No Demolition", ar: "بدون هدم" }, description: { fr: "Intervention rapide sans gêne pour les occupants.", en: "Fast intervention without disturbance to occupants.", ar: "تدخل سريع دون إزعاج للسكان." }, icon: "Zap" },
       { title: { fr: "Économie d'Énergie", en: "Energy Savings", ar: "توفير الطاقة" }, description: { fr: "Amélioration thermique immédiate de votre bâtiment.", en: "Immediate thermal improvement of your building.", ar: "تحسين حراري فوري لمبناكم." }, icon: "Leaf" },
       { title: { fr: "Valorisation", en: "Added Value", ar: "زيادة القيمة" }, description: { fr: "Augmentation significative de la valeur du bien.", en: "Significant increase in property value.", ar: "زيادة كبيرة في قيمة العقار." }, icon: "TrendingUp" },
       { title: { fr: "Design Moderne", en: "Modern Design", ar: "تصميم عصري" }, description: { fr: "Métamorphose architecturale complète.", en: "Complete architectural metamorphosis.", ar: "تحول معماري كامل." }, icon: "Sparkles" },
     ],
     process: [
       { step: "01", title: { fr: "Audit", en: "Audit", ar: "تدقيق" }, description: { fr: "Inspection et diagnostic de la façade.", en: "Inspection and diagnosis of the facade.", ar: "فحص وتشخيص الواجهة." }, icon: "ClipboardCheck" },
       { step: "02", title: { fr: "Proposition", en: "Proposal", ar: "اقتراح" }, description: { fr: "Choix des matériaux et rendu 3D.", en: "Material selection and 3D rendering.", ar: "اختيار المواد وتصور ثلاثي الأبعاد." }, icon: "PencilRuler" },
       { step: "03", title: { fr: "Préparation", en: "Preparation", ar: "تحضير" }, description: { fr: "Nettoyage et préparation du support.", en: "Cleaning and surface preparation.", ar: "تنظيف وتحضير السطح." }, icon: "Factory" },
       { step: "04", title: { fr: "Habillage", en: "Dressing", ar: "تلبيس" }, description: { fr: "Pose des éléments aluminium sur ossature.", en: "Installation of aluminum elements on framework.", ar: "تركيب عناصر الألمنيوم على الهيكل." }, icon: "Wrench" },
     ],
     gallery: [
       { src: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=600&q=80", alt: { fr: "Rénovation façade", en: "Facade renovation", ar: "تجديد واجهة" } },
       { src: "https://images.unsplash.com/photo-1464938050520-ef2270bb8ce8?w=600&q=80", alt: { fr: "Avant/Après", en: "Before/After", ar: "قبل/بعد" } },
     ],
     faq: [
       { q: { fr: "Combien de temps dure un chantier d'habillage ?", en: "How long does a dressing project take?", ar: "كم يستغرق مشروع التلبيس؟" }, a: { fr: "En moyenne 2 à 4 semaines selon la surface, sans évacuation des lieux nécessaire.", en: "On average 2 to 4 weeks depending on surface area, no evacuation required.", ar: "في المتوسط 2 إلى 4 أسابيع حسب المساحة، دون الحاجة للإخلاء." } },
     ],
     ctaTitle: { fr: "Offrez un nouveau visage à votre bâtiment", en: "Give your building a new face", ar: "امنح مبناك وجهاً جديداً" },
   },

   "menuiserie-aluminium": {
     slug: "menuiserie-aluminium",
     icon: "LayoutGrid",
     title: {
       fr: "Menuiserie Aluminium",
       en: "Aluminum Joinery",
       ar: "نجارة الألمنيوم",
     },
     subtitle: {
       fr: "Fenêtres, portes et baies vitrées sur mesure alliant design et performance",
       en: "Custom windows, doors, and bay windows combining design and performance",
       ar: "نوافذ وأبواب وواجهات زجاجية حسب الطلب تجمع بين التصميم والأداء",
     },
     description: {
       fr: "La menuiserie aluminium RJ RENOVA incarne l'alliance parfaite entre esthétique contemporaine et performance technique. Nos menuiseries sur mesure s'intègrent harmonieusement à tous les styles architecturaux, offrant luminosité, isolation et sécurité pour votre habitat ou vos locaux professionnels.",
       en: "RJ RENOVA aluminum joinery embodies the perfect alliance between contemporary aesthetics and technical performance. Our custom joinery integrates harmoniously into all architectural styles, offering light, insulation, and security for your home or professional premises.",
       ar: "تجسد نجارة الألمنيوم من RJ RENOVA التحالف المثالي بين الجمالية العصرية والأداء التقني. تندمج نجارتنا حسب الطلب بتناغم مع جميع الأساليب المعمارية، وتوفر الإضاءة والعزل والأمان لمنزلكم أو مقركم المهني.",
     },
     heroImage: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1200&q=80",
     advantages: [
       { title: { fr: "Isolation Maximale", en: "Maximum Insulation", ar: "عزل أقصى" }, description: { fr: "Double vitrage à isolation renforcée, jusqu'à 44 dB d'affaiblissement acoustique.", en: "Double glazing with reinforced insulation, up to 44 dB acoustic reduction.", ar: "زجاج مزدوج بعزل معزز، حتى 44 ديسيبل من التوهين الصوتي." }, icon: "VolumeX" },
       { title: { fr: "Sécurité", en: "Security", ar: "أمان" }, description: { fr: "Ferrages multipoints et vitrage anti-effraction certifiés.", en: "Certified multi-point locking and anti-burglary glazing.", ar: "أقفال متعددة النقاط وزجاج مضاد للكسر معتمد." }, icon: "Lock" },
       { title: { fr: "Design Épuré", en: "Clean Design", ar: "تصميم نظيف" }, description: { fr: "Profilés fins pour un maximum de surface vitrée et de luminosité.", en: "Slim profiles for maximum glazed surface and light.", ar: "بروفيلات رفيعة لأقصى سطح مزجج وإضاءة." }, icon: "Eye" },
       { title: { fr: "Sur Mesure", en: "Custom Made", ar: "حسب الطلب" }, description: { fr: "Toutes dimensions, formes et couleurs disponibles.", en: "All dimensions, shapes, and colors available.", ar: "جميع الأحجام والأشكال والألوان متوفرة." }, icon: "Ruler" },
     ],
     process: [
       { step: "01", title: { fr: "Prise de Cotes", en: "Measurement", ar: "أخذ القياسات" }, description: { fr: "Relevé précis des dimensions par notre technicien.", en: "Precise measurement by our technician.", ar: "قياس دقيق للأبعاد من قبل تقنينا." }, icon: "ClipboardCheck" },
       { step: "02", title: { fr: "Devis 3D", en: "3D Quote", ar: "عرض سعر ثلاثي الأبعاد" }, description: { fr: "Visualisation de vos menuiseries avant fabrication.", en: "Visualization of your joinery before manufacturing.", ar: "تصور نجارتكم قبل التصنيع." }, icon: "PencilRuler" },
       { step: "03", title: { fr: "Fabrication", en: "Manufacturing", ar: "تصنيع" }, description: { fr: "Usinage CNC de précision en usine.", en: "Precision CNC machining in factory.", ar: "تصنيع دقيق باستخدام CNC في المصنع." }, icon: "Factory" },
       { step: "04", title: { fr: "Installation", en: "Installation", ar: "تركيب" }, description: { fr: "Pose soignée avec finitions impeccables.", en: "Careful installation with impeccable finishes.", ar: "تركيب دقيق بتشطيبات لا تشوبها شائبة." }, icon: "Wrench" },
     ],
     gallery: [
       { src: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=600&q=80", alt: { fr: "Baie vitrée", en: "Bay window", ar: "نافذة كبيرة" } },
       { src: "https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=600&q=80", alt: { fr: "Fenêtres aluminium", en: "Aluminum windows", ar: "نوافذ ألمنيوم" } },
     ],
     faq: [
       { q: { fr: "Quelle est la différence avec le PVC ?", en: "What is the difference with PVC?", ar: "ما الفرق مع PVC؟" }, a: { fr: "L'aluminium est plus résistant, plus fin (plus de vitrage), 100% recyclable et offre une durée de vie supérieure.", en: "Aluminum is stronger, thinner (more glass), 100% recyclable, and offers a longer lifespan.", ar: "الألمنيوم أقوى وأنحف (زجاج أكثر) وقابل للتدوير بنسبة 100% ويدوم طويلاً." } },
     ],
     ctaTitle: { fr: "Des menuiseries qui subliment vos espaces", en: "Joinery that enhances your spaces", ar: "نجارة تضفي جمالاً على مساحاتكم" },
   },
 };

 export default servicesData;
 export { servicesData };
 export const serviceSlugs = Object.keys(servicesData);

