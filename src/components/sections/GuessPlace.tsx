"use client";

import Image from "next/image";
import { useState } from "react";
import { Button, Text } from "@/components/ui";
import { playground } from "@/content/playground";
import { cn } from "@/lib/cn";

const { title, subline, photo, options, answer } = playground.quiz;

export function GuessPlace() {
  const [guess, setGuess] = useState<string>();
  const [revealed, setRevealed] = useState(false);

  const optionClass = (o: string) =>
    cn(
      "flex w-full items-center gap-md rounded-full border px-[18px] py-[14px] text-left transition-colors",
      revealed && o === answer
        ? "border-accent-strong bg-accent-muted"
        : o === guess
          ? "border-accent-strong bg-page"
          : "border-accent hover:bg-accent-muted/50",
      revealed && o !== answer && "opacity-60",
    );

  return (
    <div className="flex flex-col items-center gap-3xl rounded-xl bg-accent-soft p-xl md:flex-row md:gap-5xl md:p-4xl">
      <div className="relative aspect-square w-full max-w-120 shrink-0 overflow-hidden rounded-[16px]">
        <Image src={photo} alt="Mystery travel photo" fill sizes="480px" className="object-cover" />
      </div>
      <div className="flex w-full flex-1 flex-col items-start gap-[28px]">
        <div className="flex flex-col gap-[10px]">
          <Text as="h2" variant="h2-36">
            {title}
          </Text>
          <Text variant="body-18" tone="secondary">
            {revealed ? (guess === answer ? `Yes, it’s ${answer}!` : `It was ${answer}.`) : subline}
          </Text>
        </div>
        <div role="radiogroup" aria-label={title} className="flex w-full flex-col gap-sm">
          {options.map((o, i) => (
            <button key={o} type="button" role="radio" aria-checked={o === guess} disabled={revealed} onClick={() => setGuess(o)} className={optionClass(o)}>
              <span className="grid size-7 shrink-0 place-items-center rounded-full bg-accent-muted text-[13px] leading-none font-semibold text-accent-strong">
                {String.fromCharCode(65 + i)}
              </span>
              <span className="text-[17px] leading-[1.3] font-medium text-primary">{o}</span>
            </button>
          ))}
        </div>
        {revealed ? (
          <Button onClick={() => (setRevealed(false), setGuess(undefined))}>Play again</Button>
        ) : (
          <Button onClick={() => setRevealed(true)} disabled={!guess} className="disabled:opacity-50">
            Reveal the answer
          </Button>
        )}
      </div>
    </div>
  );
}
