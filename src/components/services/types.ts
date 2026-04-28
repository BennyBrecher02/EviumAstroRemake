/**
 * Shared types for the v2 service-page template
 * (ServicePageV2.astro).
 *
 * Kept in a plain .ts file so both the template component AND
 * each per-service page can import the types via `import type`
 * — Astro frontmatter doesn't reliably re-export complex type
 * unions across .astro file boundaries.
 */

export interface Cta {
  label: string;
  href: string;
}

export interface Stat {
  value: string;
  label: string;
  /* Optional anchor href. When provided on hero stats, the stat
     renders as an <a> button that scrolls to the linked page
     section instead of a static stat tile. Used to convert the
     hero's stat strip into a quick-nav row of page-section
     shortcuts (instead of generic "500+ chargers" stats). */
  href?: string;
  /* Optional leading icon. Renders inside a small green-tinted
     rounded square at the left of the button — paired with
     `href` to make each shortcut tile read as an icon-led
     section signpost. */
  icon?: IconName;
}

export interface PainPoint {
  problem: string;
  solution: string;
}

export interface NarrativeHighlight {
  icon?: IconName;
  title: string;
  body: string;
}

export type IconName =
  | 'check'
  | 'x'
  | 'bolt'
  | 'shield'
  | 'clock'
  | 'chart'
  | 'wrench'
  | 'hammer'
  | 'spark'
  | 'coin'
  | 'users'
  | 'gear'
  | 'pin'
  | 'map'
  | 'trend'
  | 'search'
  | 'compass'
  | 'arrow'
  | 'info'
  | 'stack'
  | 'phone'
  | 'user'
  | 'building'
  | 'home';

export interface ScopeItem {
  title: string;
  body: string;
  icon?: IconName;
}

export interface HardwareItem {
  name: string;
  image?: string;
  imageAlt?: string;
  features: string[];
  tier?: 'l2' | 'l3';
}

export interface FinancialModel {
  name: string;
  tagline: string;
  body: string;
  /* Supporting points rendered as a check-tick list under the
     body copy. Optional — cards without bullets still render. */
  bullets?: string[];
  /* Glassy info-box callout rendered at the bottom of the card.
     Typically used on the featured option as a single strong
     recommendation line; renders below the bullets if both are
     present so the highlight reads as the closing punch line. */
  highlight?: string;
  badge?: string;
  featured?: boolean;
  icon?: IconName;
}

export interface SoftwareConfig {
  intro: string;
  portalTitle?: string;
  portalFeatures: string[];
  appTitle?: string;
  /* Small subtitle under the app title — e.g. "iOS & Android" —
     used in the v1-style sw card head where the app name sits
     above a muted platform line. */
  appSubtitle?: string;
  /* Short paragraph rendered above the app feature list inside
     the Driver App card. Distinct from `intro`, which lives in
     the section's left column. */
  appBody?: string;
  appFeatures: string[];
  support?: { title: string; body: string };
}

export interface Testimonial {
  quote: string;
  attribution: string;
  role?: string;
  company?: string;
}

export interface Callout {
  title: string;
  body: string;
}

export interface SocialProofConfig {
  stats: Stat[];
  testimonial?: Testimonial;
  callout?: Callout;
}

export interface FaqItem {
  q: string;
  a: string;
}

export type Section =
  | {
      /* Narrative / market-context section. Sits between hero and
         deeper content (pain points, scope, etc.) as a short
         "here's why this matters" explainer. Optional `highlights`
         render as a 3-up grid of icon + title + body cards
         beneath the lead copy. Section head is left-aligned to
         differentiate it from the centered detail-section heads. */
      type: 'narrative';
      eyebrow: string;
      title: string;
      subhead?: string;
      highlights?: NarrativeHighlight[];
      anchor?: string;
    }
  | {
      type: 'painPoints';
      eyebrow: string;
      title: string;
      subhead?: string;
      cta?: Cta; /* optional "Talk to our team"-style CTA in the section head */
      items: PainPoint[];
      anchor?: string;
    }
  | { type: 'scope'; eyebrow: string; title: string; subhead?: string; items: ScopeItem[]; anchor?: string }
  | {
      type: 'hardware';
      eyebrow: string;
      title: string;
      subhead?: string;
      items: HardwareItem[];
      seeAllLink?: Cta; /* e.g. "View all Level 2 products → /products/level-2" */
      anchor?: string;
    }
  | {
      type: 'financialModels';
      eyebrow: string;
      title: string;
      subhead?: string;
      models: FinancialModel[];
      /* Optional muted footer line below the cards — e.g.
         "Leasing options also available. Speak with our team
         to find the right structure for your portfolio." The
         link slots inline between `before` and `after`. */
      footnote?: { before?: string; link?: Cta; after?: string };
      anchor?: string;
    }
  | { type: 'software'; eyebrow: string; title: string; subhead?: string; config: SoftwareConfig; anchor?: string }
  | { type: 'socialProof'; eyebrow: string; title: string; subhead?: string; config: SocialProofConfig; anchor?: string }
  | { type: 'faq'; eyebrow: string; title: string; subhead?: string; items: FaqItem[]; anchor?: string };

export interface ServicePageConfig {
  meta: { title: string; description: string };
  hero: {
    eyebrow: string;
    headline: string;
    subhead: string;
    primaryCta: Cta;
    secondaryCta?: Cta;
    image?: { src: string; alt: string };
    stats?: Stat[];
  };
  sections: Section[];
  finalCta: {
    eyebrow?: string;
    headline: string;
    subhead?: string;
    primaryCta: Cta;
    secondaryCta?: Cta;
    footnote?: string;
  };
}
