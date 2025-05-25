import { ChevronRight } from "lucide-react";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { HeroCTA } from "./hero-cta";

export const HeroSection = () => {
  return (
    <section id="hero" className=" max-h-screen h-full w-full">
      <div className="hero-bg h-full w-full bg-cover bg-no-repeat bg-center absolute" />
      <div className="hero-content  relative w-full h-full z-3 flex items-center justify-center">
        <div className="text-white w-[calc(100%_-_2rem)] flex flex-col items-center gap-4">
          <div className="headline text-white flex flex-col items-center w-full gap-2">
            <h1 className="text-2xl md:text-5xl -font-medium text-center">
              Unlimited movies, TV shows, and more
            </h1>
            <span className="text-sm md:text-base">Starts at US$2.99. Cancel anytime</span>
          </div>
          <div className="cta flex flex-col items-center w-full gap-4">
            <label htmlFor="email" className="text-center text-sm md:text-base">
              Ready to watch? Enter your email to create or restart your
              membership
            </label>
            <HeroCTA />
          </div>
        </div>
      </div>
    </section>
  );
};
