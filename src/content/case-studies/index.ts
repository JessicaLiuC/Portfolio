import { coinToss } from "./coin-toss";
import type { CaseStudy } from "./types";

export const caseStudies: CaseStudy[] = [coinToss];

export const getCaseStudy = (slug: string) => caseStudies.find((c) => c.slug === slug);
