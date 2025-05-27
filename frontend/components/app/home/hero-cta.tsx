"use client";

import Form from "next/form";
import { ChevronRight } from "lucide-react";
import { Button } from "../../ui/button";
import { Input } from "../../ui/input";
import { useEffect, useRef } from "react";

export const HeroCTA = () => {
  const inputRef = useRef<HTMLInputElement | null>(null);

  useEffect(() => {
    inputRef.current?.focus();
  });
  const submit = (payload: FormData) => {
    console.log(inputRef.current?.value);
  };

  return (
    <div className="w-full">
      <Form action={submit} className="w-full flex max-md:flex-col items-center gap-4 px-2 md:h-14">
        <Input
          ref={inputRef}
          id="email"
          type="email"
          placeholder="Email address"
          className="bg-black/30 border-border/40 placeholder:text-white/80 text-sm md:text-lg h-10 md:h-full md:w-3/5"
          required
        />
        <Button
          type="submit"
          variant="destructive"
          className="h-10 text-lg md:text-xl md:h-full md:px-8 md:w-2/5 tracking-wide hover:bg-destructive/80"
        >
          <span>Get Started</span>
          <ChevronRight />
        </Button>
      </Form>
    </div>
  );
};
