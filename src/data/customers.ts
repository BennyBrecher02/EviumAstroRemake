/**
 * Evium Customers — single source of truth.
 *
 * Source: CopyOfZippedEviumDataFromGoogleToInspect/
 *         "Copy of Evium Customer Reviews.xlsx", "Customer Review
 *         Edited" column. The xlsx had 17 rows total; this file
 *         keeps only the 10 that are real customers with a finished
 *         editorial pass on their review. Drafts that David flagged
 *         as not-actually-customers, prospects with no review, and
 *         partial leads are intentionally excluded — they're not
 *         shippable, so they don't belong here.
 *
 * Every entry below has been confirmed real via the source sheet.
 */

// ─────────────────────────────────────────────────────────────────
// Types
// ─────────────────────────────────────────────────────────────────

export interface CustomerInstall {
  address: string;
  propertyType: string;
}

export interface CustomerContact {
  name: string;
  title: string;
}

export interface Customer {
  /** kebab-case slug — stable key for routing / dedupe. */
  slug: string;
  company: string;
  website?: string;
  /** Headquarters / billing office (NOT necessarily where chargers live). */
  officeAddress?: string;
  /** Charger installs across all properties owned by this customer. */
  installs: CustomerInstall[];
  /** Primary point of contact at the company. */
  contact: CustomerContact;
  /** Final, editor-approved customer quote. */
  review: string;
}

// ─────────────────────────────────────────────────────────────────
// Data — 10 real customers with edited reviews
// ─────────────────────────────────────────────────────────────────

export const customers: Customer[] = [
  // 1. RJ Block Properties — largest customer in the sheet, 9
  //    multi-family installs across Newark, Bronx, Staten Island.
  {
    slug: 'rj-block-properties',
    company: 'RJ Block Properties',
    website: 'http://www.rjblock.com/',
    officeAddress: 'Monsey, New York, United States',
    installs: [
      { address: '352 Mt Prospect Ave, Newark, NJ, USA',           propertyType: 'Multi-Family' },
      { address: '402 Mt Prospect Ave, Newark, NJ, USA',           propertyType: 'Multi-Family' },
      { address: '380 Mt Prospect Ave, Newark, NJ, USA',           propertyType: 'Multi-Family' },
      { address: '1514 Sedgwick Avenue, The Bronx, Bronx, NY, USA', propertyType: 'Multi-Family' },
      { address: '800 Victory Blvd, Staten Island, NY, USA',       propertyType: 'Multi-Family' },
      { address: '555 Elizabeth Avenue, Newark, NJ, USA',          propertyType: 'Multi-Family' },
      { address: '1500 Noble Avenue, Bronx, NY, USA',              propertyType: 'Multi-Family' },
      { address: '1965 Lafayette Ave, Bronx, NY 10473',            propertyType: 'Multi-Family' },
      { address: '1240 Morrison Ave, The Bronx, Bronx, NY, USA',   propertyType: 'Multi-Family' },
    ],
    contact: { name: 'Yehuda Nadoff', title: 'Property Management' },
    review:
      "Evium has been instrumental in helping us navigate NYC's EV charging requirements across our multi-family properties in Newark and the Bronx. After disappointing experiences with two other EV charging providers, Evium's design expertise and service commitment stood out. Their team handled everything — from compliance and permits to installation and management — across nine initial locations. Their user interface and software management system is unmatched, making property management and billing seamless. They've truly taken the hassle out of EV charging infrastructure.",
  },

  // 2. Jones Street Investment Partners — 3 commercial / office
  //    sites across Maine and New Hampshire.
  {
    slug: 'jones-street-investment-partners',
    company: 'Jones Street Investment Partners',
    website: 'https://www.jonesstreet.com/',
    officeAddress: '100 Federal Street, Floor 20',
    installs: [
      { address: '75 Canal Street, Manchester, NH, USA',     propertyType: 'Commercial' },
      { address: 'Admiral Fitch Avenue, Brunswick, ME, USA', propertyType: 'Office'     },
      { address: '76 Dennett Road, Kittery, ME, USA',        propertyType: 'Commercial' },
    ],
    contact: { name: 'Vin Gureeno', title: 'CEO / Founder' },
    review:
      "As a commercial property investor and developer, we found Evium's collaborative approach exceptional. Their team worked directly with our engineers to develop optimal charging solutions across our Maine and New Hampshire locations. By creating a customized, cost-effective design, they saved us thousands on installation and development. Their deep understanding of commercial properties and consultative approach made the entire process seamless, delivering an impressively installed solution well below the competition's cost, enabling a solid ROI.",
  },

  // 3. Oakmark Management — single VA multi-family. Marquee story:
  //    secured 3 new tenants within a month of install.
  {
    slug: 'oakmark-management',
    company: 'Oakmark Management',
    website: 'https://oakmarkmanagement.com/',
    officeAddress: 'Boston, MA 02110',
    installs: [
      { address: '2 Wyndham Dr, Hampton, VA, 23666', propertyType: 'Multi-Family' },
    ],
    contact: { name: 'Mo Zaks', title: 'POC' },
    review:
      "Installing EV chargers at our Hampton property proved to be an incredible investment. Within just one month of installation, we secured three new tenants specifically because of our EV charging amenity. Evium's cost-effective solution and comprehensive support from planning to implementation made it possible. The low initial investment compared to the immediate return through new tenants made this decision a clear win. Having chargers installed 4 weeks from contract signing wasn't too shabby either.",
  },

  // 4. Sax Properties — single office install in Secaucus, NJ.
  //    Charger demand has 4x'ed since install.
  {
    slug: 'sax-properties',
    company: 'Sax Properties',
    website: 'https://www.saxproperties.com/',
    officeAddress: '1704 Minnesota Ave SE Suite #3, Washington, DC 20020',
    installs: [
      { address: '100 Plaza Drive, Secaucus, NJ 07094, USA', propertyType: 'Office' },
    ],
    contact: { name: 'Iris Sax', title: 'Senior Property Manager' },
    review:
      "Evium's office-focused EV charging solution at our Secaucus location has become a major tenant amenity. Their team's attention to detail during installation and ongoing support has been outstanding. The user-friendly management platform makes monitoring and maintenance incredibly simple. While we only had a few drivers with a need of chargers when we contacted Evium, it has now 4x'ed. The chargers work flawlessly.",
  },

  // 5. Cammbeys — Brooklyn mixed-use. Replaced 4 broken Tesla
  //    chargers with 8 Evium units; revenue-share success story.
  {
    slug: 'cammbeys',
    company: 'Cammbeys',
    website: 'https://cammebys.com/',
    officeAddress: '45 Broadway, New York, NY 10006, United States',
    installs: [
      { address: '532 Neptune Avenue, Brooklyn, NY, USA',  propertyType: 'Apartment Building' },
      { address: '532 Neptune Ave, Brooklyn, NY 11224, USA', propertyType: 'Retail Strip'    },
    ],
    contact: { name: 'Aaron Polinsky', title: 'POC' },
    review:
      "After struggling with unreliable Tesla chargers at our Brooklyn mixed-use property, Evium transformed our EV charging infrastructure. They replaced four broken chargers with eight of their own units, which have operated flawlessly since installation. Not only has the system been seamless, but it's also finally generating revenue for our property, far more than expected. Their no-cost, revenue-share model has been a dream for our busy management team and their expertise in mixed-use properties and reliable technology has made all the difference.",
  },

  // 6. MMPLA — three SoCal multi-family properties; emphasized
  //    Evium's creative design + construction project management.
  {
    slug: 'mmpla',
    company: 'MMPLA',
    website: 'https://www.mmpla.com/',
    officeAddress: '4221 Wilshire Blvd Suite 480 Los Angeles, CA 90010',
    installs: [
      { address: '2277 Harbor Blvd, Costa Mesa, CA 92626',                propertyType: 'Multi-Family' },
      { address: '218 South Occidental Boulevard, Los Angeles, CA, USA', propertyType: 'Multi-Family' },
      { address: '14611 Vincennes St., Panorama City, CA',               propertyType: 'Multi-Family' },
    ],
    contact: { name: 'Simcha Menlo', title: 'POC' },
    review:
      "Evium's expertise in California's EV charging requirements was invaluable for our multi-family properties. Their creative design solutions and construction project management across our Los Angeles and other SoCal locations were exceptional. From permits to implementation, their comprehensive management support and smart charging features have made operations effortless. Their team's innovative and detailed approach to construction challenges set them apart.",
  },

  // 7. Gene ID Labs — single office install in Montvale, NJ.
  {
    slug: 'gene-id-labs',
    company: 'Gene ID Labs',
    installs: [
      { address: '136 Summit Ave, Montvale, NJ 07645, USA', propertyType: 'Office' },
    ],
    contact: { name: 'Gavi Gordon', title: 'POC' },
    review:
      "The office EV charging installation by Evium has been a fantastic addition to our Montvale facility. Their team's professional approach and technical expertise made the entire process straightforward. The charging stations have become a valuable amenity for our employees and an added revenue stream.",
  },

  // 8. Tunic Group — two multi-family properties in Elizabeth, NJ.
  {
    slug: 'tunic-group',
    company: 'Tunic Group',
    website: 'https://www.tunicgroup.com/',
    officeAddress: '7 Glenwood Ave Orange, NJ 07017',
    installs: [
      { address: '710-720 Westfield Avenue, Elizabeth, NJ, USA', propertyType: 'Multi-Family' },
      { address: '331 Elmora Ave, Elizabeth, NJ 07208',          propertyType: 'Multi-Family' },
    ],
    contact: { name: 'Sam Miller', title: 'POC' },
    review:
      "Evium revolutionized our Elizabeth properties with state-of-the-art EV charging solutions. Their understanding of multi-family needs and local regulations was impressive. The seamless integration with our property management systems has made operations much more efficient.",
  },

  // 9. 601W Properties — two Ohio multi-family installs.
  {
    slug: '601w-properties',
    company: '601W Properties',
    website: 'https://601wcompanies.com/',
    installs: [
      { address: '3419 Cloveridge Ct, Fairborn, OH 45324', propertyType: 'Multi-Family' },
      { address: '10 Falls Blvd, Springboro, OH 45066',    propertyType: 'Multi-Family' },
    ],
    contact: { name: 'Dave Blumberg', title: 'POC' },
    review:
      "Our Ohio multi-family properties needed reliable EV charging solutions, and Evium delivered beyond expectations. Their team's expertise in multi-site implementations was evident throughout the project. The charging stations have become a major selling point for prospective tenants.",
  },

  // 10. Yakar Partners — single CT multi-family showcase install.
  {
    slug: 'yakar-partners',
    company: 'Yakar Partners',
    website: 'https://www.yakarpartners.com/',
    officeAddress: '429 Lenox Avenue, Miami Beach, Florida 33139',
    installs: [
      { address: '1 Maple Tree Ln, East Lyme, CT, USA', propertyType: 'Multi-Family' },
    ],
    contact: { name: 'Jacob Laster', title: 'Assistant VP' },
    review:
      "Working with Evium on our East Lyme property was an excellent decision. Their multi-family EV charging expertise and attention to detail made the installation process smooth. The advanced features and reliable performance have greatly enhanced our property's value. The installation looks fantastic and has become a showcase feature of our property.",
  },
];

// ─────────────────────────────────────────────────────────────────
// Derived helper — testimonial-card-ready view
// ─────────────────────────────────────────────────────────────────

export interface TestimonialView {
  slug: string;
  /** Raw review text (no surrounding quote glyphs). */
  quote: string;
  company: string;
  /** "Property Type · City, ST" — built from the first install. */
  meta: string;
  /** Customer's primary contact. */
  attribution?: string;
}

/** Flatten the customer list into testimonial-card props. Pass a
 *  filtered subset (e.g. by service vertical) when calling. */
export function asTestimonials(source: Customer[] = customers): TestimonialView[] {
  return source.map((c) => {
    const first = c.installs[0];
    let meta = '';
    if (first) {
      const parts = first.address.split(',').map((s) => s.trim());
      const last2 = parts.slice(-2).join(', ');
      meta = `${first.propertyType} · ${last2}`;
    }
    return {
      slug: c.slug,
      quote: c.review,
      company: c.company,
      meta,
      attribution: c.contact.name || undefined,
    };
  });
}
