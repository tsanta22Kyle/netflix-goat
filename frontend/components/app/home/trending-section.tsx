"use client";
import { NetflixBlack, NetflixMedium } from "@/components/common/fonts";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";
import { TrendingModal } from "./trending-modal";
import { useState } from "react";

export const TrendingSection = () => {
  return (
    <section
      id="trending"
      className="relative lg:h-110 my-10! h-fit max-md:h-fit overflow-hidden"
    >
      {/* ici la decoration */}
      <div className="wrapper relative z-20 w-full h-full max-md:h-fit max-md:space-y-8">
        <div className="heading md:h-20 h-12 flex items-end">
          <h2 className={`text-2xl text-white ${NetflixMedium.className}`}>
            Trending Now
          </h2>
        </div>

        <div id="carousel" className="w-full h-fit relative my-8">
          <Carousel className="w-full h-full pl-8 md:px-8 relative z-90">
            <CarouselContent className="relative -ml-1 w-full h-full gap-2 flex items-center">
              {Array.from({ length: 7 }).map((_, index) => (
                <CarouselItem
                  key={index}
                  className="pl-1 basis-1/2 md:basis-1/4 h-fit"
                >
                  <Card index={index} />
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="-left-0 h-1/2 bg-muted-foreground/30 border-none hover:bg-muted-foreground/40 z-99!" />
            <CarouselNext className="-right-0 h-1/2 bg-muted-foreground/30 border-none hover:bg-muted-foreground/40 z-99!" />
          </Carousel>
        </div>
      </div>
    </section>
  );
};

type CardProps = {
  index: number;
  imgUrl?: string;
};

const Card = ({ index }: CardProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const showDescription = () => setIsOpen(!isOpen);
  return (
    <div
      className="relative w-28 h-40 lg:w-35 xl:w-50 lg:h-50 xl:h-64 m-auto bg-white/10 rounded-lg hover:scale-105 duration-400 transition-all"
      onClick={showDescription}
    >
      <Image
        width={30}
        height={30}
        src={"http://localhost:3000/img/Netflix_Symbol_RGB.png"}
        loading="lazy"
        alt="Netflix symbol"
        className="absolute top-0 left-1"
      />
      <div className="absolute -left-3 md:-left-4 lg:-left-6 bottom-4 flex items-center justify-center h-fit w-fit">
        <span
          className={`relative text-6xl md:text-7xl lg:text-8xl text-stroke text-black ${NetflixBlack.className}`}
        >
          {index + 1}
        </span>
      </div>

      {isOpen && <TrendingModal setIsOpen={setIsOpen} id={index + 1} />}
    </div>
  );
};
