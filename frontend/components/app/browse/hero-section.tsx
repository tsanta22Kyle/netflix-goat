import Image from "next/image";
import heroImg from "../../../public/img/hero_banner.jpg";
import heroTitle from "../../../public/assets/hero_title.png";
import { Button } from "@/components/ui/button";
import { Info, Play } from "lucide-react";
import { SwipeCards } from "./card-list";
import { moviesList } from "@/utils/data";
export const Hero = () => {
  return (
    <section className="flex flex-col  sm:ml-[50px] relative overflow-x-hidden">
      <Image
        className={`w-full mask-l-from-35%  z-3 `}
        src={heroImg}
        alt="hero"
        height={0}
        width={0}

      />

      <div
        id="desc"
        className="absolute flex flex-col  z-4 w-full  md:top-[25%] max-sm:bottom-0  "
      >
        <div className="flex flex-col  gap-4 w-1/2 max-sm:w-3/4 h-[30%]  max-sm:h-auto p-5 ">
          <Image className="w-[35%] " src={heroTitle} alt="hero title"></Image>

        <p className="text-white max-sm:text-xs">
          Discovering his ties to a secret ancient order, a young man living in
          modern Istanbul embarks on a quest to save the city from an immortal
          enemy.
        </p>
        <div className="flex gap-3">
          <Button  className=" h-[4vh]  bg-white text-black flex hover:bg-gray-300 cursor-pointer">
            <Play fill="black"></Play>
            <p>Play</p>
          </Button>
          <Button className="h-[40px] max-sm:h-[4vh] w-[130px] bg-[rgba(255,255,255,0.23)] hover:bg-[rgba(255,255,255,0.16)] ">
            <Info></Info>
            <p>More info</p>
          </Button>
        </div>
        </div>
        <div className="max-md:hidden">

        <SwipeCards  movies={moviesList} title="popular on netflix"></SwipeCards>
        </div>
      </div>
        
    </section>
  );
};
