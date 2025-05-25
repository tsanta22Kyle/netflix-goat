import { ChevronRight } from "lucide-react";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { HeroCTA } from "./hero-cta";

export const HeroSection = () => {
  return (
    <section
      id="hero"
      className="relative max-h-screen h-[calc(100%_-_5.5rem)] w-full top-22"
    >
      <div className="hero-content  relative w-full h-full z-3 flex items-center justify-center">
        <div className="text-white w-[calc(100%)] max-w-[calc(624px)] flex flex-col items-center gap-4 md:gap-10">
          <div className="headline text-white flex flex-col items-center w-full gap-2 md:gap-4">
            <h1 className="text-2xl md:text-6xl -font-black text-center">
              Unlimited movies, TV shows, and more
            </h1>
            <span className="text-sm md:text-lg md:font-medium">
              Starts at US$2.99. Cancel anytime.
            </span>
          </div>
          <div className="cta flex flex-col items-center w-full gap-4">
            <label htmlFor="email" className="text-center text-sm md:text-lg">
              Ready to watch? Enter your email to create or restart your
              membership.
            </label>
            <HeroCTA />
          </div>
        </div>
      </div>
    </section>
  );
};
