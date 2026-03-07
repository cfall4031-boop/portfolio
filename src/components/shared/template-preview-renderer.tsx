"use client";

import { SaasDark } from "@/components/templates/saas-dark";
import { StartupBold } from "@/components/templates/startup-bold";
import { AgencyCreative } from "@/components/templates/agency-creative";
import { MobileApp } from "@/components/templates/mobile-app";
import { PortfolioMinimal } from "@/components/templates/portfolio-minimal";
import { EcommerceProduct } from "@/components/templates/ecommerce-product";

const templateMap: Record<string, React.ComponentType> = {
  "saas-dark": SaasDark,
  "startup-bold": StartupBold,
  "agency-creative": AgencyCreative,
  "mobile-app": MobileApp,
  "portfolio-minimal": PortfolioMinimal,
  "ecommerce-product": EcommerceProduct,
};

export function TemplatePreviewRenderer({ slug }: { slug: string }) {
  const Component = templateMap[slug];
  if (!Component) return null;
  return <Component />;
}
