import { Header } from "@/components/global/header";
import { HeroSection } from "@/components/partials/hero-section";

export default function Home() {
  return (
    <>
      <Header />
      <div className="hero-bg h-screen w-full bg-cover bg-no-repeat bg-top absolute top-0" />
      <HeroSection />
    </>
  );
}
