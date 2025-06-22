import { NetflixBlack } from "@/components/common/fonts";
import { HeroCTA } from "./hero-cta";

export const HeroSection = () => {
  return (
    <section id="hero" className="relative h-screen w-full">
      <div className="hero-content  relative w-full h-full z-3 flex items-center justify-center">
        <div className="text-white w-full max-w-[38rem] flex flex-col items-center gap-4 md:gap-8">
          <div className="headline text-white flex flex-col items-center w-full gap-2 md:gap-4">
            <h1
              className={`text-2xl md:text-6xl ${NetflixBlack.className} text-center md:leading-18`}
            >
              Unlimited movies, TV shows, and more
            </h1>
            <span className="text-sm md:text-lg -font-medium">
              Starts at US$2.99. Cancel anytime.
            </span>
          </div>
          <HeroCTA id="membership_hero" centeredLayout />
        </div>
      </div>
    </section>
  );
};
