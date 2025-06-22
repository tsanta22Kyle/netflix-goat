import Image from "next/image";
import heroImg from "../../../public/img/hero_banner.jpg";
import heroTitle from "../../../public/assets/hero_title.png";
import { Button } from "@/components/ui/button";
import { Info, Play } from "lucide-react";
import { SwipeCards } from "./card-list";
import { moviesList } from "@/utils/data";
export const Hero = () => {
  return (
    <section className="flex flex-col  ml-[50px] relative ">
      <Image
        className={`w-full  mask-l-from-35%  z-3 `}
        src={heroImg}
        alt="hero"
        id="hero-image"
      />

      <div
        id="desc"
        className="absolute flex flex-col  z-4 w-full  top-[25%]  gap-20 "
      >
        <div className="flex flex-col  gap-4 w-1/2 h-[70vh]  ">
          <Image className="w-[75%] " src={heroTitle} alt="hero title"></Image>

        <p className="text-white">
          Discovering his ties to a secret ancient order, a young man living in
          modern Istanbul embarks on a quest to save the city from an immortal
          enemy.
        </p>
        <div className="flex gap-3">
          <Button  className="w-[100px] h-[40px] bg-white text-black flex hover:bg-gray-300 cursor-pointer">
            <Play fill="black"></Play>
            <p>Play</p>
          </Button>
          <Button className="h-[40px] w-[130px] bg-[rgba(255,255,255,0.23)] hover:bg-[rgba(255,255,255,0.16)] ">
            <Info></Info>
            <p>More info</p>
          </Button>
        </div>
        </div>
        <div className=" ">

        <SwipeCards  movies={moviesList} title="popular on netflix"></SwipeCards>
        </div>
      </div>
    </section>
  );
};
