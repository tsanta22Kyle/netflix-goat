"use client"
import { movie } from "@/utils/types/movie";
import { Card } from "./card";
import { useRef } from "react";

interface SwipeCardsProps {
  movies : movie[],
  title : string
}


export function SwipeCards({movies,title}:SwipeCardsProps) {

  const swipeRef = useRef<HTMLDivElement>(null);

  return (
    <div className="flex flex-col gap-5 w-[99dvw] mt-20">
      <p className="text-3xl font-bold text-white tracking-wide capitalize sm:text-2xl">{title}</p>
        <div ref={swipeRef} onWheel={(e) => {
            if (Math.abs(e.deltaX) < 5) {
              e.preventDefault()
              swipeRef.current?.scrollBy({ left: e.deltaY, behavior: "smooth" })
            }
          }} className="w-full flex gap-2 overflow-scroll">
          {
            movies.map((movie,index)=>(
              
                <Card imgSrc={movie.image} key={index}></Card>
             
            ))
          }
        </div>
    </div>
  );
}
