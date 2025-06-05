
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { Card } from "./card";

export function CardList() {
  return (
    <div className="flex flex-col gap-5">
      <p className="text-2xl font-bold text-white">Popular on Netflix</p>
      <ScrollArea className="w-[95dvw]">
        <div className="w-max flex gap-3">
          <Card></Card>
          <Card></Card>
          <Card></Card>
          <Card></Card>
          <Card></Card>
          <Card></Card>
        </div>
        <ScrollBar orientation="horizontal"/>
      </ScrollArea>
    </div>
  );
}
