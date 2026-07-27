import { servicesData, serviceSlugs } from "@/lib/data/services";
import type { Metadata } from "next";
import { ServicePageClient } from "./service-page-client";

export function generateStaticParams() {
  return serviceSlugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const service = servicesData[slug];
  if (!service) return {};
  const desc = service.description.fr.substring(0, 160);
  return {
    title: `${service.title.fr} | RJ RENOVA`,
    description: desc,
    openGraph: { title: service.title.fr, description: desc },
  };
}

export default async function ServicePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  return <ServicePageClient slug={slug} />;
}

