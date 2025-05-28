import { Header } from "@/components/global/header";
import { HeroSection } from "@/components/partials/hero-section";
import { TrendingSection } from "@/components/partials/trending-section";

export default function Home() {
  return (
    <>
      <Header />
      <HeroSection />
      <TrendingSection/>
    </>
  );
}
