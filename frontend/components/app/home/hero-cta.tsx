"use client";

import Form from "next/form";
import { ChevronRight } from "lucide-react";
import { Button } from "../../ui/button";
import { Input } from "../../ui/input";
import { useEffect, useRef } from "react";
import { ClassValue } from "clsx";
import { cn } from "@/lib/utils";

type CTAProps = {
  className?: ClassValue;
  id: string;
  centeredLayout: boolean;
};

export const HeroCTA = ({ className, id, centeredLayout }: CTAProps) => {
  const inputRef = useRef<HTMLInputElement | null>(null);

  useEffect(() => {
    inputRef.current?.focus();
  });
  const submit = (/*payload: FormData*/) => {
    console.log(inputRef.current?.value);
  };

  return (
    <div
      className={cn([
        className ?? "",
        "cta flex flex-col items-center justify-center w-full gap-4",
      ])}
    >
      <label
        htmlFor={id}
        className={`relative ${centeredLayout ? `text-center` : `text-left`} text-white flex items-center text-sm md:text-base h-1/3`}
      >
        Ready to watch? Enter your email to create or restart your membership.
      </label>
      <div className="w-full h-2/3">
        <Form
          action={submit}
          className={`w-full flex max-md:flex-col ${centeredLayout ? `items-center` : `items-start`} gap-4 md:h-14`}
        >
          <Input
            ref={inputRef}
            id={id}
            type="email"
            placeholder="Email address"
            className="bg-black/10! border-border/40 placeholder:text-white/80! text-white text-sm md:text-lg h-10 md:h-full md:w-3/5"
            required
          />
          <Button
            type="submit"
            variant="default"
            className="h-10 text-base md:text-xl md:h-full md:px-8 md:w-2/5 tracking-wide hover:bg-destructive/80 bg-destructive"
          >
            <span>Get Started</span>
            <ChevronRight />
          </Button>
        </Form>
      </div>
    </div>
  );
};
