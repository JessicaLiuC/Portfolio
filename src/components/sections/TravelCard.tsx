import { Button, Polaroid, Text } from "@/components/ui";
import { about } from "@/content/about";

const { title, subline, cta } = about.travel;

/** Mini polaroids: 130px rescales of the master, placed by their Figma centres in a 220×240 box. */
const minis = [
  { caption: "Paris", src: about.photos.paris, rotate: 6, className: "top-[42px] left-[-3px]" },
  { caption: "Tokyo", src: about.photos.tokyo, rotate: -5, className: "top-[58px] left-[103px]" },
];

export function TravelCard() {
  return (
    <div className="flex flex-1 items-center gap-xl rounded-xl bg-accent-soft py-3xl pr-2xl pl-3xl">
      <div className="flex flex-1 flex-col justify-between gap-2xl self-stretch">
        <div className="flex flex-col gap-xs">
          <Text as="h3" variant="h3-28">
            {title}
          </Text>
          <Text variant="body-17" tone="secondary">
            {subline}
          </Text>
        </div>
        <Button size="sm" href={cta.href} className="self-start">
          {cta.label}
        </Button>
      </div>
      <div className="relative hidden h-60 w-55 shrink-0 sm:block">
        {minis.map(({ className, ...p }) => (
          <Polaroid key={p.caption} {...p} className={`absolute w-[130px] ${className}`} />
        ))}
      </div>
    </div>
  );
}
