/**
 * Single source of truth for Evium's state presence + installations.
 *
 * The locations map, every state page, and any "X states / Y installs"
 * stat on the site should read from here. Update counts & coverage by
 * editing this file, not the map SVG or individual pages.
 */

export interface Installation {
  slug: string;
  title: string;
  city: string;
  photoCount: number;
  /** Folder under /public/images/installations/<slug>/; images named 01.jpg, 02.jpg… */
  photoDir: string;
}

export interface StateEntry {
  abbr: string;
  name: string;
  slug: string;
  active: boolean;
  installations: Installation[];
}

const inst = (
  slug: string,
  title: string,
  city: string,
  photoCount: number,
): Installation => ({
  slug,
  title,
  city,
  photoCount,
  photoDir: `/images/installations/${slug}`,
});

export const STATES: StateEntry[] = [
  {
    abbr: 'CA',
    name: 'California',
    slug: 'california',
    active: true,
    installations: [],
  },
  {
    abbr: 'OR',
    name: 'Oregon',
    slug: 'oregon',
    active: true,
    installations: [],
  },
  {
    abbr: 'WA',
    name: 'Washington',
    slug: 'washington',
    active: true,
    installations: [],
  },
  {
    abbr: 'CO',
    name: 'Colorado',
    slug: 'colorado',
    active: true,
    installations: [],
  },
  {
    abbr: 'NM',
    name: 'New Mexico',
    slug: 'new-mexico',
    active: true,
    installations: [],
  },
  {
    abbr: 'TX',
    name: 'Texas',
    slug: 'texas',
    active: true,
    installations: [],
  },
  {
    abbr: 'IL',
    name: 'Illinois',
    slug: 'illinois',
    active: true,
    installations: [],
  },
  {
    abbr: 'OH',
    name: 'Ohio',
    slug: 'ohio',
    active: true,
    installations: [
      inst('settlers-walk-falls', 'The Falls at Settlers Walk', 'Springboro, OH', 3),
    ],
  },
  {
    abbr: 'NY',
    name: 'New York',
    slug: 'new-york',
    active: true,
    installations: [
      inst('rockaway-beach', '101-19 Rockaway Beach Blvd', 'Queens, NY', 6),
      inst('brooklyn-weirfield', '391 Weirfield St', 'Brooklyn, NY', 8),
      inst('coney-island-neptune', '532 Neptune Ave', 'Coney Island, NY', 9),
      inst('brockport-autumn-woods', 'Autumn Woods', 'Brockport, NY', 31),
      inst('broadway-25', '25 Broadway', 'New York, NY', 3),
      inst('staten-island-victory', '800 Victory Blvd', 'Staten Island, NY', 4),
    ],
  },
  {
    abbr: 'NH',
    name: 'New Hampshire',
    slug: 'new-hampshire',
    active: true,
    installations: [],
  },
  {
    abbr: 'ME',
    name: 'Maine',
    slug: 'maine',
    active: true,
    installations: [
      inst('atlantic-pointe', 'Atlantic Pointe', 'Old Orchard Beach, ME', 2),
      inst('seacoast-kittery', 'Seacoast', 'Kittery, ME', 5),
    ],
  },
  {
    abbr: 'MA',
    name: 'Massachusetts',
    slug: 'massachusetts',
    active: true,
    installations: [],
  },
  {
    abbr: 'NJ',
    name: 'New Jersey',
    slug: 'new-jersey',
    active: true,
    installations: [
      inst('montvale-summit-ave', '136 Summit Ave', 'Montvale, NJ', 8),
      inst('elizabeth-elmora', '331 Elmora', 'Elizabeth, NJ', 8),
      inst('elizabeth-westfield', '710–720 Westfield', 'Elizabeth, NJ', 5),
      inst('secaucus-plaza', '100 Plaza Dr', 'Secaucus, NJ', 16),
      inst('livingston-1460', '1460 Livingston', 'Livingston, NJ', 9),
      inst('manchester-catherines-way', '30 Catherines Way', 'Manchester, NJ', 13),
      inst('morrison-1240', '1240 Morrison', 'New Jersey', 3),
      inst('the-caroline', 'The Caroline', 'New Jersey', 3),
    ],
  },
  {
    abbr: 'DE',
    name: 'Delaware',
    slug: 'delaware',
    active: true,
    installations: [],
  },
  {
    abbr: 'CT',
    name: 'Connecticut',
    slug: 'connecticut',
    active: true,
    installations: [
      inst('east-lyme-maple-tree', '1 Maple Tree Drive', 'East Lyme, CT', 41),
    ],
  },
  {
    abbr: 'VA',
    name: 'Virginia',
    slug: 'virginia',
    active: true,
    installations: [],
  },
  {
    abbr: 'NC',
    name: 'North Carolina',
    slug: 'north-carolina',
    active: true,
    installations: [],
  },
  {
    abbr: 'FL',
    name: 'Florida',
    slug: 'florida',
    active: true,
    installations: [],
  },
];

export const STATE_BY_ABBR: Record<string, StateEntry> = Object.fromEntries(
  STATES.map((s) => [s.abbr, s]),
);

export const STATE_BY_SLUG: Record<string, StateEntry> = Object.fromEntries(
  STATES.map((s) => [s.slug, s]),
);

export const TOTAL_INSTALLATIONS = STATES.reduce(
  (sum, s) => sum + s.installations.length,
  0,
);

export const STATES_WITH_PROJECTS = STATES.filter(
  (s) => s.installations.length > 0,
).length;
