import { areYouAnAlcoholic } from "./are-you-an-alcoholic";
import { coinToss } from "./coin-toss";
import { furnitureEcommerce } from "./furniture-ecommerce";
import { impactEventTracker } from "./impact-event-tracker";
import { infoStudentSocialLife } from "./info-student-social-life";
import { mapYourJourney } from "./map-your-journey";
import { markAndSnip } from "./mark-and-snip";
import type { CaseStudy } from "./types";

export const caseStudies: CaseStudy[] = [furnitureEcommerce, markAndSnip, coinToss, infoStudentSocialLife, impactEventTracker, areYouAnAlcoholic, mapYourJourney];

export const getCaseStudy = (slug: string) => caseStudies.find((c) => c.slug === slug);
