export interface ServiceData {
  slug: string;
  icon: string;
  title: { fr: string; en: string; ar: string; tzm: string };
  subtitle: { fr: string; en: string; ar: string; tzm: string };
  description: { fr: string; en: string; ar: string; tzm: string };
  heroImage: string;
  advantages: { title: { fr: string; en: string; ar: string; tzm: string }; description: { fr: string; en: string; ar: string; tzm: string }; icon: string }[];
  process: { step: string; title: { fr: string; en: string; ar: string; tzm: string }; description: { fr: string; en: string; ar: string; tzm: string }; icon: string }[];
  gallery: { src: string; alt: { fr: string; en: string; ar: string; tzm: string } }[];
  faq: { q: { fr: string; en: string; ar: string; tzm: string }; a: { fr: string; en: string; ar: string; tzm: string } }[];
  ctaTitle: { fr: string; en: string; ar: string; tzm: string };
}

function s(slug: string, icon: string, tfr: string, ten: string, tar: string, sfr: string, sen: string, sar: string, dfr: string, den: string, dar: string, hero: string, adv: any[], proc: any[], gal: any[], faq: any[], ctafr: string, ctaen: string, ctaar: string, ttzm?: string, stzm?: string, dtzm?: string, ctatzm?: string): ServiceData {
  return { slug, icon, title: { fr: tfr, en: ten, ar: tar, tzm: ttzm || tfr }, subtitle: { fr: sfr, en: sen, ar: sar, tzm: stzm || sfr }, description: { fr: dfr, en: den, ar: dar, tzm: dtzm || dfr }, heroImage: hero, advantages: adv, process: proc, gallery: gal, faq, ctaTitle: { fr: ctafr, en: ctaen, ar: ctaar, tzm: ctatzm || ctafr } };
}

export const servicesData: Record<string, ServiceData> = {
  "mur-rideau": s("mur-rideau", "Cuboid", "Mur Rideau Aluminium", "Aluminum Curtain Wall", "واجهات زجاجية",
    "Façades légères et transparentes", "Lightweight transparent facades", "واجهات خفيفة وشفافة",
    "Le mur rideau est la signature architecturale des bâtiments contemporains. RJ RENOVA conçoit et installe des murs rideaux aluminium sur mesure, alliant performance thermique, étanchéité parfaite et esthétique minimaliste.",
    "The curtain wall is the architectural signature of contemporary buildings. RJ RENOVA designs and installs custom aluminum curtain walls, combining thermal performance, perfect sealing, and minimalist aesthetics.",
    "الواجهة الزجاجية هي التوقيع المعماري للمباني المعاصرة. تصمم RJ RENOVA واجهات زجاجية من الألمنيوم حسب الطلب.",
    "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1200&q=80",
    [{ title: { fr: "Luminosité Maximale", en: "Maximum Light", ar: "إضاءة قصوى" }, description: { fr: "Jusqu'à 90% de surface vitrée.", en: "Up to 90% glazed surface.", ar: "حتى 90% سطح مزجج." }, icon: "Sun" }, { title: { fr: "Isolation Thermique", en: "Thermal Insulation", ar: "عزل حراري" }, description: { fr: "Rupture de pont thermique intégrée.", en: "Integrated thermal break.", ar: "قاطع حراري مدمج." }, icon: "Thermometer" }, { title: { fr: "Étanchéité Parfaite", en: "Perfect Sealing", ar: "إحكام مثالي" }, description: { fr: "Joints EPDM haute performance.", en: "High-performance EPDM seals.", ar: "مانعات تسرب عالية الأداء." }, icon: "Shield" }, { title: { fr: "Design Sur Mesure", en: "Custom Design", ar: "تصميم حسب الطلب" }, description: { fr: "Large choix de profilés et couleurs.", en: "Wide choice of profiles and colors.", ar: "تشكيلة واسعة من البروفيلات." }, icon: "Palette" }],
    [{ step: "01", title: { fr: "Étude", en: "Study", ar: "دراسة" }, description: { fr: "Analyse structurelle et thermique.", en: "Structural and thermal analysis.", ar: "تحليل هيكلي وحراري." }, icon: "ClipboardCheck" }, { step: "02", title: { fr: "Conception 3D", en: "3D Design", ar: "تصميم ثلاثي الأبعاد" }, description: { fr: "Modélisation et validation.", en: "Modeling and validation.", ar: "نمذجة وتحقق." }, icon: "PencilRuler" }, { step: "03", title: { fr: "Fabrication", en: "Manufacturing", ar: "تصنيع" }, description: { fr: "Usinage de précision.", en: "Precision machining.", ar: "تصنيع دقيق." }, icon: "Factory" }, { step: "04", title: { fr: "Installation", en: "Installation", ar: "تركيب" }, description: { fr: "Pose par équipes certifiées.", en: "Installation by certified teams.", ar: "تركيب من فرق معتمدة." }, icon: "Wrench" }],
    [{ src: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=600&q=80", alt: { fr: "Tour de bureaux", en: "Office tower", ar: "برج مكاتب" } }, { src: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=600&q=80", alt: { fr: "Façade vitrée", en: "Glass facade", ar: "واجهة زجاجية" } }],
    [{ q: { fr: "Quelle est la durée de vie ?", en: "What is the lifespan?", ar: "ما هو العمر الافتراضي؟" }, a: { fr: "Plus de 30 ans avec entretien minimal.", en: "Over 30 years with minimal maintenance.", ar: "أكثر من 30 سنة بصيانة بسيطة." } }, { q: { fr: "Quels types de vitrage ?", en: "What types of glazing?", ar: "ما أنواع الزجاج؟" }, a: { fr: "Simple, double, triple avec contrôle solaire, autonettoyant, acoustique.", en: "Single, double, triple with solar control, self-cleaning, acoustic.", ar: "بسيط، مزدوج، ثلاثي مع تحكم شمسي." } }],
    "Prêt à illuminer votre bâtiment ?", "Ready to brighten your building?", "مستعد لإضاءة مبناك؟",
    "ⵉⵖⴼⴰⵡⵏ ⵏ ⵜⵣⴳⴰ", "ⵉⵖⴼⴰⵡⵏ ⵉⴼⵙⵙⴰⵙⵏ", "ⵉⵖⴼⴰⵡⵏ ⵏ ⵓⵍⵓⵎⵉⵏⵢⵓⵎ ⵙ ⵓⴽⵜⵜⵓⵔ", "ⵉⵙ ⵜⵓⵙⵉⴷ ⴰⴷ ⵜⵙⴼⴰⵡⴷ ⴰⵙⴽⴰ ⵏⵏⴽ ?"
  ),

  "bardage": s("bardage", "Layers", "Bardage Aluminium", "Aluminum Cladding", "تكسية خارجية",
    "Revêtement esthétique et protecteur", "Aesthetic and protective cladding", "تكسية جمالية وواقية",
    "Le bardage aluminium RJ RENOVA transforme l'apparence de vos bâtiments tout en améliorant leur performance énergétique. Multiples finitions : laqué, anodisé, effet bois, perforé.",
    "RJ RENOVA aluminum cladding transforms building appearance while improving energy performance. Multiple finishes available.",
    "تحول التكسية الخارجية من RJ RENOVA مظهر المباني مع تحسين الأداء الطاقي.",
    "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1200&q=80",
    [{ title: { fr: "Protection Durable", en: "Lasting Protection", ar: "حماية دائمة" }, description: { fr: "Résistance intempéries, UV, corrosion.", en: "Weather, UV, corrosion resistance.", ar: "مقاومة للعوامل الجوية." }, icon: "Shield" }, { title: { fr: "Isolation Renforcée", en: "Enhanced Insulation", ar: "عزل معزز" }, description: { fr: "-30% de déperditions thermiques.", en: "-30% thermal loss.", ar: "-30% من الفقدان الحراري." }, icon: "Thermometer" }, { title: { fr: "Entretien Zéro", en: "Zero Maintenance", ar: "صفر صيانة" }, description: { fr: "Un simple nettoyage à l'eau.", en: "Simple water cleaning only.", ar: "تنظيف بسيط بالماء فقط." }, icon: "Sparkles" }, { title: { fr: "200+ Couleurs", en: "200+ Colors", ar: "+200 لون" }, description: { fr: "Toutes les couleurs RAL disponibles.", en: "All RAL colors available.", ar: "جميع ألوان RAL متوفرة." }, icon: "Palette" }],
    [{ step: "01", title: { fr: "Diagnostic", en: "Diagnosis", ar: "تشخيص" }, description: { fr: "Analyse de la façade existante.", en: "Analysis of existing facade.", ar: "تحليل الواجهة الحالية." }, icon: "ClipboardCheck" }, { step: "02", title: { fr: "Design", en: "Design", ar: "تصميم" }, description: { fr: "Choix des finitions.", en: "Finish selection.", ar: "اختيار التشطيبات." }, icon: "PencilRuler" }, { step: "03", title: { fr: "Production", en: "Production", ar: "إنتاج" }, description: { fr: "Découpe et laquage.", en: "Cutting and lacquering.", ar: "تقطيع وطلاء." }, icon: "Factory" }, { step: "04", title: { fr: "Pose", en: "Installation", ar: "تركيب" }, description: { fr: "Fixation avec isolation.", en: "Fixing with insulation.", ar: "تثبيت مع عزل." }, icon: "Wrench" }],
    [{ src: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=600&q=80", alt: { fr: "Bardage moderne", en: "Modern cladding", ar: "تكسية عصرية" } }],
    [{ q: { fr: "Adapté au climat marocain ?", en: "Suitable for Morocco?", ar: "مناسب للمناخ المغربي؟" }, a: { fr: "Oui, résiste chaleur, soleil et air salin.", en: "Yes, resists heat, sun, and saline air.", ar: "نعم، يقاوم الحرارة والشمس والهواء المالح." } }],
    "Transformez votre façade maintenant", "Transform your facade now", "حول واجهتك الآن",
    "ⴰⵙⵙⵓⵎⵔ ⵏ ⵓⵍⵓⵎⵉⵏⵢⵓⵎ", "ⴰⵙⵙⵓⵎⵔ ⴰⵙⵜⵀⵉⵜⵉⴽ", "ⴰⵙⵙⵓⵎⵔ ⵏ ⵓⵍⵓⵎⵉⵏⵢⵓⵎ ⵙ ⵜⵓⵙⵙⵏⴰ", "ⵙⵙⵏⴼⵍ ⵜⴰⵡⵡⵓⵏⴽⵜ ⵏⵏⴽ ⵖⵉⵍⴰⴷ"
  ),

  "habillage-facade": s("habillage-facade", "PaintBucket", "Habillage de Façade", "Facade Dressing", "تلبيس الواجهات",
    "Rénovation sans démolition", "Renovation without demolition", "تجديد بدون هدم",
    "L'habillage de façade donne une seconde vie à vos bâtiments sans démolir. Solution rapide, économique et spectaculaire.",
    "Facade dressing gives a second life to buildings without demolition. Fast, economical, and spectacular.",
    "يمنح تلبيس الواجهات حياة ثانية للمباني بدون هدم. حل سريع واقتصادي ورائع.",
    "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=1200&q=80",
    [{ title: { fr: "Sans Démolition", en: "No Demolition", ar: "بدون هدم" }, description: { fr: "Intervention rapide sans gêne.", en: "Fast, no disturbance.", ar: "سريع، بدون إزعاج." }, icon: "Zap" }, { title: { fr: "Économie d'Énergie", en: "Energy Savings", ar: "توفير الطاقة" }, description: { fr: "Amélioration thermique immédiate.", en: "Immediate thermal improvement.", ar: "تحسين حراري فوري." }, icon: "Leaf" }, { title: { fr: "Valorisation", en: "Added Value", ar: "زيادة القيمة" }, description: { fr: "Augmentation valeur du bien.", en: "Property value increase.", ar: "زيادة قيمة العقار." }, icon: "TrendingUp" }, { title: { fr: "Design Moderne", en: "Modern Design", ar: "تصميم عصري" }, description: { fr: "Métamorphose architecturale.", en: "Architectural metamorphosis.", ar: "تحول معماري." }, icon: "Sparkles" }],
    [{ step: "01", title: { fr: "Audit", en: "Audit", ar: "تدقيق" }, description: { fr: "Inspection et diagnostic.", en: "Inspection and diagnosis.", ar: "فحص وتشخيص." }, icon: "ClipboardCheck" }, { step: "02", title: { fr: "Proposition", en: "Proposal", ar: "اقتراح" }, description: { fr: "Choix matériaux et 3D.", en: "Material selection and 3D.", ar: "اختيار المواد و3D." }, icon: "PencilRuler" }, { step: "03", title: { fr: "Préparation", en: "Preparation", ar: "تحضير" }, description: { fr: "Nettoyage du support.", en: "Surface cleaning.", ar: "تنظيف السطح." }, icon: "Factory" }, { step: "04", title: { fr: "Habillage", en: "Dressing", ar: "تلبيس" }, description: { fr: "Pose éléments aluminium.", en: "Aluminum element installation.", ar: "تركيب عناصر الألمنيوم." }, icon: "Wrench" }],
    [{ src: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=600&q=80", alt: { fr: "Rénovation", en: "Renovation", ar: "تجديد" } }],
    [{ q: { fr: "Durée d'un chantier ?", en: "Project duration?", ar: "مدة المشروع؟" }, a: { fr: "2 à 4 semaines selon surface.", en: "2-4 weeks depending on area.", ar: "2-4 أسابيع حسب المساحة." } }],
    "Offrez un nouveau visage à votre bâtiment", "Give your building a new face", "امنح مبناك وجهاً جديداً"
  ),

  "menuiserie-aluminium": s("menuiserie-aluminium", "LayoutGrid", "Menuiserie Aluminium", "Aluminum Joinery", "نجارة الألمنيوم",
    "Fenêtres et portes sur mesure", "Custom windows and doors", "نوافذ وأبواب حسب الطلب",
    "La menuiserie aluminium RJ RENOVA incarne l'alliance parfaite entre esthétique contemporaine et performance technique. Fenêtres, portes et baies vitrées sur mesure.",
    "RJ RENOVA aluminum joinery embodies the perfect alliance between contemporary aesthetics and technical performance.",
    "تجسد نجارة الألمنيوم من RJ RENOVA التحالف المثالي بين الجمالية العصرية والأداء التقني.",
    "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1200&q=80",
    [{ title: { fr: "Isolation Maximale", en: "Maximum Insulation", ar: "عزل أقصى" }, description: { fr: "Jusqu'à 44 dB acoustique.", en: "Up to 44 dB acoustic.", ar: "حتى 44 ديسيبل." }, icon: "VolumeX" }, { title: { fr: "Sécurité A2P", en: "A2P Security", ar: "أمان A2P" }, description: { fr: "Ferrages multipoints certifiés.", en: "Certified multi-point locking.", ar: "أقفال متعددة النقاط." }, icon: "Lock" }, { title: { fr: "Design Épuré", en: "Clean Design", ar: "تصميم نظيف" }, description: { fr: "Profilés fins, plus de vitrage.", en: "Slim profiles, more glass.", ar: "بروفيلات رفيعة، زجاج أكثر." }, icon: "Eye" }, { title: { fr: "Sur Mesure", en: "Custom Made", ar: "حسب الطلب" }, description: { fr: "Toutes dimensions, formes, couleurs.", en: "All sizes, shapes, colors.", ar: "جميع الأحجام والأشكال." }, icon: "Ruler" }],
    [{ step: "01", title: { fr: "Prise de Cotes", en: "Measurement", ar: "أخذ القياسات" }, description: { fr: "Relevé précis des dimensions.", en: "Precise measurement.", ar: "قياس دقيق." }, icon: "ClipboardCheck" }, { step: "02", title: { fr: "Devis 3D", en: "3D Quote", ar: "عرض سعر 3D" }, description: { fr: "Visualisation avant fabrication.", en: "Visualization before manufacturing.", ar: "تصور قبل التصنيع." }, icon: "PencilRuler" }, { step: "03", title: { fr: "Fabrication", en: "Manufacturing", ar: "تصنيع" }, description: { fr: "Usinage CNC de précision.", en: "Precision CNC machining.", ar: "تصنيع CNC دقيق." }, icon: "Factory" }, { step: "04", title: { fr: "Installation", en: "Installation", ar: "تركيب" }, description: { fr: "Pose soignée et finitions.", en: "Careful installation.", ar: "تركيب دقيق." }, icon: "Wrench" }],
    [{ src: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=600&q=80", alt: { fr: "Baie vitrée coulissante design", en: "Design sliding bay window", ar: "نافذة كبيرة منزلقة" } }, { src: "https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=600&q=80", alt: { fr: "Fenêtres aluminium haute performance", en: "High-performance aluminum windows", ar: "نوافذ ألمنيوم عالية الأداء" } }, { src: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=600&q=80", alt: { fr: "Porte-fenêtre aluminium minimaliste", en: "Minimalist aluminum French door", ar: "باب فرنسي ألمنيوم" } }, { src: "https://images.unsplash.com/photo-1600566753086-00f18f6b0050?w=600&q=80", alt: { fr: "Menuiserie aluminium sur mesure", en: "Custom aluminum joinery", ar: "نجارة ألمنيوم حسب الطلب" } }],
    [{ q: { fr: "Aluminium vs PVC ?", en: "Aluminum vs PVC?", ar: "الألمنيوم أم PVC؟" }, a: { fr: "Plus résistant, plus fin, 100% recyclable, durée de vie supérieure.", en: "Stronger, thinner, 100% recyclable, longer lifespan.", ar: "أقوى، أنحف، قابل للتدوير 100%." } }],
    "Des menuiseries qui subliment vos espaces", "Joinery that enhances your spaces", "نجارة تضفي جمالاً",
    "ⵜⴰⵡⵡⵓⵔⵉ ⵏ ⵓⵍⵓⵎⵉⵏⵢⵓⵎ", "ⵜⵉⵣⴳⴰⵔ ⴷ ⵜⵉⴼⵍⵡⵉⵏ ⵙ ⵓⴽⵜⵜⵓⵔ", "ⵜⴰⵡⵡⵓⵔⵉ ⵏ ⵓⵍⵓⵎⵉⵏⵢⵓⵎ ⵙ ⵜⵓⵙⵙⵏⴰ", "ⵜⴰⵡⵡⵓⵔⵉ ⵏ ⵓⵍⵓⵎⵉⵏⵢⵓⵎ ⵏⵏⴰ ⵉⵙⴼⴰⵍⴽⵉⵏ"
  ),

  "verrieres": s("verrieres", "Sun", "Verrières Aluminium", "Aluminum Canopies", "مظلات زجاجية",
    "Structures vitrées élégantes", "Elegant glass structures", "هياكل زجاجية أنيقة",
    "Nos verrières aluminium apportent luminosité et élégance. Vérandas, verrières d'atelier, toitures vitrées - des structures sur mesure pour agrandir visuellement vos espaces.",
    "Our aluminum canopies bring light and elegance. Custom structures that visually enlarge your spaces.",
    "تضفي مظلاتنا الزجاجية إضاءة وأناقة. هياكل حسب الطلب توسع المساحات بصريًا.",
    "https://images.unsplash.com/photo-1600566753086-00f18f6b0050?w=1200&q=80",
    [{ title: { fr: "Luminosité Naturelle", en: "Natural Light", ar: "إضاءة طبيعية" }, description: { fr: "Apport maximal de lumière.", en: "Maximum natural light.", ar: "إضاءة طبيعية قصوى." }, icon: "Sun" }, { title: { fr: "Espace de Vie +", en: "Extra Space", ar: "مساحة إضافية" }, description: { fr: "Pièce supplémentaire utilisable.", en: "Extra usable room.", ar: "غرفة إضافية." }, icon: "Home" }, { title: { fr: "Design Personnalisé", en: "Custom Design", ar: "تصميم مخصص" }, description: { fr: "Formes et finitions sur mesure.", en: "Custom shapes and finishes.", ar: "أشكال وتشطيبات حسب الطلب." }, icon: "Palette" }, { title: { fr: "Isolation Performante", en: "High-Performance", ar: "عزل عالي" }, description: { fr: "Vitrage contrôle solaire.", en: "Solar control glazing.", ar: "زجاج تحكم شمسي." }, icon: "Thermometer" }],
    [{ step: "01", title: { fr: "Relevé", en: "Survey", ar: "مسح" }, description: { fr: "Prise de cotes et étude.", en: "Measurement and study.", ar: "قياس ودراسة." }, icon: "ClipboardCheck" }, { step: "02", title: { fr: "Conception", en: "Design", ar: "تصميم" }, description: { fr: "Plans 3D et matériaux.", en: "3D plans and materials.", ar: "مخططات 3D." }, icon: "PencilRuler" }, { step: "03", title: { fr: "Fabrication", en: "Manufacturing", ar: "تصنيع" }, description: { fr: "Usinage et préparation.", en: "Machining and preparation.", ar: "تصنيع وتحضير." }, icon: "Factory" }, { step: "04", title: { fr: "Installation", en: "Installation", ar: "تركيب" }, description: { fr: "Montage et étanchéité.", en: "Assembly and sealing.", ar: "تجميع وإحكام." }, icon: "Wrench" }],
    [{ src: "https://images.unsplash.com/photo-1600566753086-00f18f6b0050?w=600&q=80", alt: { fr: "Verrière design avec contrôle solaire - rejette 70% de la chaleur", en: "Design canopy with solar control - rejects 70% of heat", ar: "مظلة عصرية مع تحكم شمسي - ترفض 70% من الحرارة" } }, { src: "https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=600&q=80", alt: { fr: "Atrium vitré lumineux sans surchauffe", en: "Bright glass atrium without overheating", ar: "بهو زجاجي مضيء بدون حرارة زائدة" } }, { src: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=600&q=80", alt: { fr: "Espace de vie baigné de lumière naturelle", en: "Living space flooded with natural light", ar: "مساحة معيشة تغمرها الإضاءة الطبيعية" } }, { src: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=600&q=80", alt: { fr: "Verrière aluminium contemporaine", en: "Contemporary aluminum canopy", ar: "مظلة ألمنيوم عصرية" } }, { src: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=600&q=80", alt: { fr: "Toiture vitrée architecturale - performance thermique", en: "Architectural glass roof - thermal performance", ar: "سقف زجاجي معماري - أداء حراري" } }, { src: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=600&q=80", alt: { fr: "Espace véranda toute saison - confort garanti", en: "All-season conservatory - guaranteed comfort", ar: "شرفة زجاجية لكل الفصول - راحة مضمونة" } }],
    [{ q: { fr: "Chauffe en été ?", en: "Overheats in summer?", ar: "تسخن صيفاً؟" }, a: { fr: "Non, vitrage contrôle solaire rejette 70% de la chaleur.", en: "No, solar control glass rejects 70% of heat.", ar: "لا، زجاج التحكم يرفض 70% من الحرارة." } }],
    "Créez votre espace de vie idéal", "Create your ideal living space", "اصنع مساحة معيشتك المثالية"
  ),

  "pergolas": s("pergolas", "Umbrella", "Pergolas Aluminium", "Aluminum Pergolas", "برجولات",
    "Pergolas bioclimatiques haut de gamme", "Premium bioclimatic pergolas", "برجولات مناخية فاخرة",
    "Les pergolas RJ RENOVA transforment vos espaces extérieurs en lieux de vie. Lames orientables, contrôle naturel de l'ensoleillement, motorisation intelligente.",
    "RJ RENOVA pergolas transform your outdoor spaces. Adjustable blades, natural sunlight control, intelligent motorization.",
    "تحول برجولات RJ RENOVA المساحات الخارجية. شرائح قابلة للتوجيه، تحكم طبيعي بالإضاءة.",
    "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=1200&q=80",
    [{ title: { fr: "Lames Orientables", en: "Adjustable Blades", ar: "شرائح متحركة" }, description: { fr: "Contrôle total de la lumière.", en: "Total light control.", ar: "تحكم كامل بالإضاءة." }, icon: "Sliders" }, { title: { fr: "Protection Pluie", en: "Rain Protection", ar: "حماية من المطر" }, description: { fr: "Étanchéité en position fermée.", en: "Sealing when closed.", ar: "إحكام عند الإغلاق." }, icon: "CloudRain" }, { title: { fr: "Éclairage LED", en: "LED Lighting", ar: "إضاءة LED" }, description: { fr: "Ambiance pour vos soirées.", en: "Ambiance for your evenings.", ar: "أجواء لأمسياتكم." }, icon: "Lightbulb" }, { title: { fr: "Motorisation", en: "Motorization", ar: "تحريك آلي" }, description: { fr: "Commande à distance.", en: "Remote control.", ar: "تحكم عن بعد." }, icon: "Zap" }],
    [{ step: "01", title: { fr: "Étude", en: "Study", ar: "دراسة" }, description: { fr: "Analyse de votre espace.", en: "Space analysis.", ar: "تحليل المساحة." }, icon: "ClipboardCheck" }, { step: "02", title: { fr: "Design 3D", en: "3D Design", ar: "تصميم 3D" }, description: { fr: "Visualisation réaliste.", en: "Realistic visualization.", ar: "تصور واقعي." }, icon: "PencilRuler" }, { step: "03", title: { fr: "Fabrication", en: "Manufacturing", ar: "تصنيع" }, description: { fr: "Production sur mesure.", en: "Custom production.", ar: "إنتاج حسب الطلب." }, icon: "Factory" }, { step: "04", title: { fr: "Installation", en: "Installation", ar: "تركيب" }, description: { fr: "Montage et réglages.", en: "Assembly and adjustment.", ar: "تجميع وضبط." }, icon: "Wrench" }],
    [{ src: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=600&q=80", alt: { fr: "Pergola", en: "Pergola", ar: "برجولة" } }],
    [{ q: { fr: "Différence pergola vs bioclimatique ?", en: "Difference vs bioclimatic?", ar: "الفرق عن المناخية؟" }, a: { fr: "La bioclimatique a des lames orientables pour le contrôle climatique.", en: "Bioclimatic has adjustable blades for climate control.", ar: "المناخية لها شرائح قابلة للتوجيه." } }],
    "Vivez l'extérieur toute l'année", "Live outdoors all year round", "عش في الهواء الطلق"
  ),

  "garde-corps": s("garde-corps", "Shield", "Garde-corps Aluminium", "Aluminum Guardrails", "درابزينات",
    "Protection et design pour vos espaces", "Protection and design", "حماية وتصميم",
    "Les garde-corps RJ RENOVA allient sécurité et esthétique. Aluminium, inox ou verre, nos garde-corps sur mesure s'intègrent parfaitement à votre architecture.",
    "RJ RENOVA guardrails combine safety and aesthetics. Custom-designed to integrate perfectly with your architecture.",
    "تجمع درابزينات RJ RENOVA بين الأمان والجمالية. مصممة حسب الطلب.",
    "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1200&q=80",
    [{ title: { fr: "Sécurité Normée", en: "Standard Safety", ar: "أمان معياري" }, description: { fr: "Conforme aux normes.", en: "Standards compliant.", ar: "مطابق للمعايير." }, icon: "Shield" }, { title: { fr: "Design Minimaliste", en: "Minimalist Design", ar: "تصميم بسيط" }, description: { fr: "Profilés fins, transparence.", en: "Slim profiles, transparency.", ar: "بروفيلات رفيعة." }, icon: "Eye" }, { title: { fr: "Résistance", en: "Durability", ar: "متانة" }, description: { fr: "Anti-corrosion, zéro entretien.", en: "Anti-corrosion, zero maintenance.", ar: "مضاد للتآكل." }, icon: "ShieldCheck" }, { title: { fr: "Personnalisation", en: "Customization", ar: "تخصيص" }, description: { fr: "Verre, barreaux ou panneaux.", en: "Glass, bars, or panels.", ar: "زجاج، قضبان، ألواح." }, icon: "Palette" }],
    [{ step: "01", title: { fr: "Métrage", en: "Measurement", ar: "قياس" }, description: { fr: "Relevé sur site.", en: "On-site measurement.", ar: "قياس في الموقع." }, icon: "ClipboardCheck" }, { step: "02", title: { fr: "Design", en: "Design", ar: "تصميم" }, description: { fr: "Modèles et finitions.", en: "Models and finishes.", ar: "نماذج وتشطيبات." }, icon: "PencilRuler" }, { step: "03", title: { fr: "Fabrication", en: "Manufacturing", ar: "تصنيع" }, description: { fr: "Découpe et assemblage.", en: "Cutting and assembly.", ar: "تقطيع وتجميع." }, icon: "Factory" }, { step: "04", title: { fr: "Pose", en: "Installation", ar: "تركيب" }, description: { fr: "Fixation sécurisée.", en: "Secure fixing.", ar: "تثبيت آمن." }, icon: "Wrench" }],
    [{ src: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=600&q=80", alt: { fr: "Garde-corps", en: "Guardrail", ar: "درابزين" } }],
    [{ q: { fr: "Hauteur réglementaire ?", en: "Regulatory height?", ar: "الارتفاع القانوني؟" }, a: { fr: "1 mètre minimum, adaptable à votre projet.", en: "1 meter minimum, adaptable.", ar: "1 متر كحد أدنى." } }],
    "Sécurisez vos espaces avec style", "Secure your spaces with style", "أمّن مساحاتكم بأناقة"
  ),

  "portes-aluminium": s("portes-aluminium", "DoorOpen", "Portes Aluminium", "Aluminum Doors", "أبواب ألمنيوم",
    "Portes d'entrée et intérieures design", "Design entrance and interior doors", "أبواب مدخل وداخلية",
    "Les portes aluminium RJ RENOVA sont la première impression de votre habitat. Robustes, isolantes et design, sur mesure pour sécurité et esthétique.",
    "RJ RENOVA aluminum doors are the first impression of your home. Robust, insulating, and stylish.",
    "أبواب RJ RENOVA هي الانطباع الأول عن منزلكم. قوية وعازلة وأنيقة.",
    "https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=1200&q=80",
    [{ title: { fr: "Haute Sécurité", en: "High Security", ar: "أمان عالٍ" }, description: { fr: "Serrures A2P, anti-effraction.", en: "A2P locks, anti-burglary.", ar: "أقفال A2P." }, icon: "Lock" }, { title: { fr: "Isolation", en: "Insulation", ar: "عزل" }, description: { fr: "Rupture pont thermique.", en: "Thermal break.", ar: "قاطع حراري." }, icon: "Thermometer" }, { title: { fr: "Design Premium", en: "Premium Design", ar: "تصميم ممتاز" }, description: { fr: "Finitions et accessoires.", en: "Finishes and accessories.", ar: "تشطيبات وإكسسوارات." }, icon: "Palette" }, { title: { fr: "Motorisation", en: "Motorization", ar: "تحريك آلي" }, description: { fr: "Ouverture automatique.", en: "Automatic opening.", ar: "فتح آلي." }, icon: "Zap" }],
    [{ step: "01", title: { fr: "Prise de Cotes", en: "Measurement", ar: "قياس" }, description: { fr: "Relevé précis.", en: "Precise measurement.", ar: "قياس دقيق." }, icon: "ClipboardCheck" }, { step: "02", title: { fr: "Choix Design", en: "Design", ar: "تصميم" }, description: { fr: "Modèle, couleur, accessoires.", en: "Model, color, accessories.", ar: "نموذج، لون." }, icon: "PencilRuler" }, { step: "03", title: { fr: "Fabrication", en: "Manufacturing", ar: "تصنيع" }, description: { fr: "Assemblage et contrôle.", en: "Assembly and QC.", ar: "تجميع ومراقبة." }, icon: "Factory" }, { step: "04", title: { fr: "Installation", en: "Installation", ar: "تركيب" }, description: { fr: "Pose avec réglage.", en: "Installation with adjustment.", ar: "تركيب مع ضبط." }, icon: "Wrench" }],
    [{ src: "https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=600&q=80", alt: { fr: "Porte", en: "Door", ar: "باب" } }],
    [{ q: { fr: "Résistantes aux effractions ?", en: "Burglar resistant?", ar: "مقاومة للكسر؟" }, a: { fr: "Oui, serrures A2P et vitrage anti-effraction.", en: "Yes, A2P locks and anti-burglary glazing.", ar: "نعم، أقفال A2P وزجاج مضاد." } }],
    "Une porte à votre image", "A door in your image", "باب على صورتكم"
  ),

  "fenetres-aluminium": s("fenetres-aluminium", "AppWindow", "Fenêtres Aluminium", "Aluminum Windows", "نوافذ ألمنيوم",
    "Fenêtres haute performance", "High-performance windows", "نوافذ عالية الأداء",
    "Les fenêtres RJ RENOVA redéfinissent le confort. Rupture de pont thermique, double vitrage, isolation exceptionnelle et maximisation de la surface vitrée.",
    "RJ RENOVA windows redefine comfort. Thermal break, double glazing, exceptional insulation, and maximized glazed surface.",
    "تعيد نوافذ RJ RENOVA تعريف الراحة. قاطع حراري، زجاج مزدوج، عزل استثنائي.",
    "https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=1200&q=80",
    [{ title: { fr: "Performance Thermique", en: "Thermal Performance", ar: "أداء حراري" }, description: { fr: "-60% sur la climatisation.", en: "-60% on air conditioning.", ar: "-60% على التكييف." }, icon: "Thermometer" }, { title: { fr: "Isolation Acoustique", en: "Acoustic Insulation", ar: "عزل صوتي" }, description: { fr: "-44 dB de bruit extérieur.", en: "-44 dB external noise.", ar: "-44 ديسيبل." }, icon: "VolumeX" }, { title: { fr: "Profilés Fins", en: "Slim Profiles", ar: "بروفيلات رفيعة" }, description: { fr: "Plus de vitrage, plus de lumière.", en: "More glass, more light.", ar: "زجاج أكثر، إضاءة أكثر." }, icon: "Eye" }, { title: { fr: "Entretien Zéro", en: "Zero Maintenance", ar: "صفر صيانة" }, description: { fr: "Ne rouille pas, ne se déforme pas.", en: "No rust, no warping.", ar: "لا يصدأ، لا يتشوه." }, icon: "Sparkles" }],
    [{ step: "01", title: { fr: "Métrage", en: "Measurement", ar: "قياس" }, description: { fr: "Relevé des ouvertures.", en: "Opening measurement.", ar: "قياس الفتحات." }, icon: "ClipboardCheck" }, { step: "02", title: { fr: "Configuration", en: "Configuration", ar: "تهيئة" }, description: { fr: "Type, vitrage, finition.", en: "Type, glazing, finish.", ar: "نوع، زجاج، تشطيب." }, icon: "PencilRuler" }, { step: "03", title: { fr: "Fabrication", en: "Manufacturing", ar: "تصنيع" }, description: { fr: "Production avec contrôle.", en: "Production with QC.", ar: "إنتاج مع مراقبة." }, icon: "Factory" }, { step: "04", title: { fr: "Installation", en: "Installation", ar: "تركيب" }, description: { fr: "Pose et étanchéité.", en: "Installation and sealing.", ar: "تركيب وإحكام." }, icon: "Wrench" }],
    [{ src: "https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=600&q=80", alt: { fr: "Fenêtre coulissante haute performance", en: "High-performance sliding window", ar: "نافذة منزلقة عالية الأداء" } }, { src: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=600&q=80", alt: { fr: "Baie vitrée panoramique", en: "Panoramic bay window", ar: "نافذة بانورامية كبيرة" } }, { src: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=600&q=80", alt: { fr: "Fenêtre aluminium design contemporain", en: "Contemporary design aluminum window", ar: "نافذة ألمنيوم بتصميم عصري" } }, { src: "https://images.unsplash.com/photo-1600566753086-00f18f6b0050?w=600&q=80", alt: { fr: "Chambre baignée de lumière naturelle", en: "Bedroom flooded with natural light", ar: "غرفة نوم تغمرها الإضاءة الطبيعية" } }],
    [{ q: { fr: "Aluminium ou PVC ?", en: "Aluminum or PVC?", ar: "ألمنيوم أم PVC؟" }, a: { fr: "Aluminium : plus résistant, plus fin, 40+ ans vs 20-25 pour le PVC.", en: "Aluminum: stronger, thinner, 40+ years vs 20-25 for PVC.", ar: "ألمنيوم: أقوى، 40+ سنة." } }],
    "Offrez la meilleure vue à votre intérieur", "Give your interior the best view", "امنح داخلك أفضل إطلالة"
  ),
};

export default servicesData;
export const serviceSlugs = Object.keys(servicesData);

























