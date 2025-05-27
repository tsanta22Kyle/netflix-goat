import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";

export const TrendingSection = () => {
  return (
    <section
      id="trending"
      className="relative w-full md:max-h-110 h-full max-md:h-fit overflow-hidden"
    >
      {/* <svg className="absolute top-0 left-0 w-full h-24 md:h-32 pointer-events-none z-10" viewBox="0 0 1440 160" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0,0 Q720,160 1440,0 L1440,0 L0,0 Z" fill="url(#arcGradient)" fillOpacity="0.5"/>
            <defs>
               <linearGradient id="arcGradient" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="hsl(228, 58%, 16%)" stopOpacity="0.8" />
                  <stop offset="100%" stopColor="hsl(228, 58%, 16%)" stopOpacity="0" />
               </linearGradient>
            </defs>
         </svg> */}
      <div className="wrapper relative z-20 w-full h-full max-md:h-fit max-md:space-y-8">
        <div className="heading md:h-20 h-12 flex items-end">
          <h2 className="text-2xl text-white -font-medium">Trending Now</h2>
        </div>

        <div id="carousel" className="w-full h-[calc(100%_-_3rem)] md:h-[calc(100%_-_5rem)]">
          <Carousel className="w-full h-full px-4 relative z-90">
            <CarouselContent className="-ml-1 w-full h-full gap-2 flex items-center">
              {Array.from({ length: 7 }).map((_, index) => (
                <CarouselItem key={index} className="pl-1 basis-1/2 md:basis-1/4 md:h-70 h-50 ">
                  <Card index={index} />
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="-left-2 h-1/2 bg-muted-foreground/30 border-none hover:bg-muted-foreground/40 z-99!" />
            <CarouselNext className="-right-2 h-1/2 bg-muted-foreground/30 border-none hover:bg-muted-foreground/40 z-99!" />
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
  return (
    <div className="relative p-1 w-full max-w-56 h-full! m-auto bg-slate-600 rounded-lg hover:scale-105 duration-400 transition-all">
      <Image
        width={30}
        height={30}
        src={"http://localhost:3000/img/Netflix_Symbol_RGB.png"}
        loading="lazy"
        alt="Netflix symbol"
        className="absolute top-0 left-1"
      />
      <div className="absolute -left-3 md:-left-4 lg:-left-6 bottom-4 flex items-center justify-center h-fit w-fit">
        <span className="relative text-6xl md:text-7xl lg:text-9xl text-stroke -font-black text-black">
          {index + 1}
        </span>
      </div>
    </div>
  );
};
