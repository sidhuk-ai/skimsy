import CallToAction from "@/components/landing-page/cta";
import FeaturesSection from "@/components/landing-page/features";
import FooterSection from "@/components/landing-page/footer";
import { HeroHeader } from "@/components/landing-page/header";
import HeroSection from "@/components/landing-page/hero-section";
import IntegrationsSection from "@/components/landing-page/integrations";
import Pricing from "@/components/landing-page/pricing";
import WallOfLoveSection from "@/components/landing-page/testimonials";

export default function Home() {
  return (
    <>
      <HeroHeader />
      <HeroSection />
      <FeaturesSection />
      <WallOfLoveSection />
      <Pricing />
      <IntegrationsSection />
      <CallToAction />
      <FooterSection />
    </>
  );
}
