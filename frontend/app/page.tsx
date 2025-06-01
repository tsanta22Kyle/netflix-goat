import { Header } from "@/components/layout/header";
import { HeroCTA } from "@/components/app/home/hero-cta";
import { HeroSection } from "@/components/app/home/hero-section";
import { TrendingSection } from "@/components/app/home/trending-section";
import { BenefitsSection } from "@/components/app/home/benefits-section";
import { Footer } from "@/components/layout/footer";
import { QuestionSection } from "@/components/app/home/questions-section";

export default function Home() {
  return (
    <>
      <Header />
      <div className="hero-bg h-screen w-full bg-cover bg-no-repeat bg-top absolute top-0" />
      <div className="h-screen w-full">
        <HeroSection />
      </div>
      <TrendingSection />
      <BenefitsSection />
      <QuestionSection />
      <HeroCTA
        className="relative h-64"
        id="membership_page"
        centeredLayout={false}
      />
      {/*  <Footer /> */}
    </>
  );
}
