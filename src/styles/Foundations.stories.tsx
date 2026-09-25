import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import type { ReactNode } from "react";
import { Text, textVariants } from "@/components/ui";

/** Reads the resolved value of a token from tokens.css, so this page never drifts from it. */
const resolve = (v: string) => getComputedStyle(document.documentElement).getPropertyValue(v).trim();

const ramps = ["nude-sand", "grey-sage", "desert-clay", "muted-forest"];
const steps = [50, 100, 200, 300, 400, 500, 600, 700, 800, 900];

const semantic = {
  Background: ["page", "surface", "surface-strong", "sage", "accent-soft", "accent-muted", "accent-swatch", "accent", "inverse", "inverse-strong"].map((n) => [`bg-${n}`, `--background-color-${n}`]),
  Text: ["primary", "body", "secondary", "muted", "inverse", "inverse-soft", "inverse-muted", "inverse-subtle", "accent", "accent-strong", "dev"].map((n) => [`text-${n}`, `--text-color-${n}`]),
  Border: ["hairline", "strong", "accent", "accent-strong", "inverse"].map((n) => [`border-${n}`, `--border-color-${n}`]),
};

const spacing = ["2xs", "xs", "sm", "md", "lg", "xl", "2xl", "3xl", "4xl", "5xl", "6xl", "gutter", "section"];
const radii = ["sm", "md", "lg", "xl", "full"];

function Section({ title, children }: { title: string; children: ReactNode }) {
  return (
    <section className="flex flex-col gap-lg">
      <Text as="h2" variant="h3-28">
        {title}
      </Text>
      {children}
    </section>
  );
}

const meta = { title: "Foundations", parameters: { layout: "fullscreen" } } satisfies Meta;
export default meta;
type Story = StoryObj<typeof meta>;

export const Colors: Story = {
  render: () => (
    <div className="flex flex-col gap-5xl p-5xl">
      <Section title="Semantic colors">
        {Object.entries(semantic).map(([group, tokens]) => (
          <div key={group} className="flex flex-col gap-sm">
            <Text variant="label-14" tone="muted">
              {group}
            </Text>
            <div className="grid grid-cols-[repeat(auto-fill,minmax(180px,1fr))] gap-md">
              {tokens.map(([name, v]) => (
                <div key={name} className="flex flex-col gap-xs">
                  <div className="h-16 rounded-[10px] border border-hairline" style={{ background: `var(${v})` }} />
                  <Text variant="label-13">{name}</Text>
                  <Text variant="body-13" tone="muted">
                    {resolve(v)}
                  </Text>
                </div>
              ))}
            </div>
          </div>
        ))}
      </Section>
      <Section title="Primitives (Foundation ramps)">
        {ramps.map((ramp) => (
          <div key={ramp} className="flex flex-col gap-2xs">
            <Text variant="label-13" tone="muted">
              {ramp}
            </Text>
            <div className="grid grid-cols-10 gap-2xs">
              {steps.map((s) => (
                <div key={s} className="flex flex-col gap-2xs">
                  <div className="h-12 rounded-sm" style={{ background: `var(--color-${ramp}-${s})` }} />
                  <Text variant="body-13" tone="muted">
                    {s}
                  </Text>
                </div>
              ))}
            </div>
          </div>
        ))}
      </Section>
    </div>
  ),
};

export const Typography: Story = {
  render: () => (
    <div className="p-5xl">
      <Section title="Typography (Montserrat)">
        <div>
          {textVariants.map((v) => (
            <div key={v} className="flex items-center gap-2xl border-t border-hairline py-sm">
              <Text variant="label-13" tone="muted" className="w-50 shrink-0">
                {v}
              </Text>
              <Text variant={v} className="min-w-0 flex-1 truncate">
                {v.startsWith("stat") ? "4/6" : v.startsWith("wordmark") ? "Chien-Chi Liu" : "Creative like designer, logical like dev"}
              </Text>
            </div>
          ))}
        </div>
      </Section>
    </div>
  ),
};

export const SpacingRadiusShadow: Story = {
  name: "Spacing, radius, shadow",
  render: () => (
    <div className="grid gap-5xl p-5xl md:grid-cols-3">
      <Section title="Spacing">
        <div className="flex flex-col gap-[10px]">
          {spacing.map((s) => (
            <div key={s} className="flex items-center gap-md">
              <Text variant="label-13" tone="muted" className="w-30">
                {s} {resolve(`--spacing-${s}`)}
              </Text>
              <div className="h-3.5 rounded-[3px] bg-accent" style={{ width: `var(--spacing-${s})` }} />
            </div>
          ))}
        </div>
      </Section>
      <Section title="Radius">
        <div className="flex flex-wrap gap-md">
          {radii.map((r) => (
            <div key={r} className="flex flex-col gap-xs">
              <div className="h-18 w-24 bg-surface-strong" style={{ borderRadius: `var(--radius-${r})` }} />
              <Text variant="label-13" tone="muted">
                {r} {resolve(`--radius-${r}`)}
              </Text>
            </div>
          ))}
        </div>
      </Section>
      <Section title="Shadow">
        <div className="h-30 w-50 rounded-[12px] bg-page shadow-card" />
        <Text variant="label-13" tone="muted">
          shadow-card 0 10 28 nude-sand-900 @16%
        </Text>
      </Section>
    </div>
  ),
};
