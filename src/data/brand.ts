export const COMPANY_NAME = "Shakthi Academy";
export const COMPANY_SHORT = "Shakthi Academy";
export const COMPANY_TAGLINE = "Inspiring Minds. Igniting Potential.";
export const ACRONYM = "Shakthi Academy";

/** Light sky — decorative / on dark backgrounds only */
export const BRAND_SKY = "#4DA8DA";
/** WCAG AA on white for small uppercase labels */
export const BRAND_SKY_ACCESSIBLE = "#0A3D62";
/** WCAG AA on dark backgrounds for small uppercase labels */
export const BRAND_SKY_ON_DARK = "#B8E6F7";

export const PARTNER_NOTE =
  "We serve only the direct partnered Universities and continue to add more. Please let us know your preferred country, university, and program, as we have extended outreach for highly reliable & fast services.";

export const SOCIAL_LINKS = {
  linkedin: "https://www.linkedin.com/company/104154651/admin/dashboard/",
  facebook: "https://www.facebook.com/Educellent",
  instagram: "https://www.instagram.com/educellent_global_education/",
  youtube: "https://www.youtube.com/channel/UC0Dv2mAXXzw20HU46n7YLqA",
} as const;

export const CONTACT_EMAIL = "info@shakthiacademy.com";

export type ContactPhone = { display: string; tel: string };

/** Add numbers here when ready to publish — currently withheld */
export const CONTACT_PHONES: ContactPhone[] = [];

export const CONTACT_PHONE_PRIMARY: ContactPhone | undefined = CONTACT_PHONES[0];
export const WHATSAPP_NUMBER = "";

export const CONTACT_LOCATION = {
  display: "Chennai, Tamil Nadu",
  city: "Chennai",
  state: "Tamil Nadu",
  pincode: "",
  addressLines: ["Chennai, Tamil Nadu"],
  officeArea: "Chennai, Tamil Nadu",
  areaDescription: "",
} as const;
