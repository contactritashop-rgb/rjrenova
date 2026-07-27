"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { Building2, Users, Trophy, MapPin } from "lucide-react";
import { useI18n } from "@/lib/i18n/i18n-provider";

const stats = [
  { key: "stats.projects" as const, value: 250, suffix: "+", icon: Building2 },
  { key: "stats.clients" as const, value: 180, suffix: "+", icon: Users },
  { key: "stats.years" as const, value: 15, suffix: "", icon: Trophy },
  { key: "stats.cities" as const, value: 12, suffix: "", icon: MapPin },
];

function AnimatedCounter({ target, suffix }: { target: number; suffix: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  useEffect(() => {
    if (!inView) return;
    const duration = 2000;
    const steps = 60;
    const increment = target / steps;
    let current = 0;
    const timer = setInterval(() => {
      current += increment;
      if (current >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, duration / steps);
    return () => clearInterval(timer);
  }, [inView, target]);

  return (
    <span ref={ref}>
      {count}
      {suffix}
    </span>
  );
}

export function Stats() {
  const { t } = useI18n();

  return (
    <section className="relative -mt-20 z-30 section-padding pt-0">
      <div className="container-custom px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6"
        >
          {stats.map((stat, i) => (
            <motion.div
              key={stat.key}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="glass-heavy rounded-2xl p-6 lg:p-8 text-center group hover:border-accent/30 transition-all duration-500 hover:shadow-xl"
            >
              <div className="w-12 h-12 mx-auto mb-4 rounded-xl bg-accent/10 flex items-center justify-center group-hover:bg-accent/20 transition-colors duration-500">
                <stat.icon className="text-accent" size={24} />
              </div>
              <div className="font-heading text-3xl lg:text-4xl xl:text-5xl font-extrabold text-dark dark:text-white mb-1">
                <AnimatedCounter target={stat.value} suffix={stat.suffix} />
              </div>
              <div className="text-muted text-sm font-medium">{t(stat.key)}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

