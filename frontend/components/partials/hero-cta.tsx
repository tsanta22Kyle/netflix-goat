"use client";

import { ChevronRight } from "lucide-react";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { useEffect, useRef } from "react";

export const HeroCTA = () => {
  const inputRef = useRef<HTMLInputElement | null>(null);

  useEffect(() => {
    inputRef.current?.focus();
  });

  return (
    <div className="w-full max-w-xl flex flex-col items-center gap-4 px-2">
      <Input
        ref={inputRef}
        id="email"
        placeholder="Email address"
        className="bg-black/30 border-border/40 placeholder:text-white/80 text-sm h-10"
      />
      <Button variant="destructive" className="h-10 text-base">
        <span>Get Started</span>
        <ChevronRight />
      </Button>
    </div>
  );
};
