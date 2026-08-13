export type TravelServiceItem = {
  title: string;
  desc: string;
};

export type TravelServiceSection = {
  id: string;
  title: string;
  summary: string;
  items: TravelServiceItem[];
};

export const travelIntro =
  "As an overseas education consulting company, Shakthi Academy can provide invaluable support to students in navigating the complexities of international travel. Here's how we help you every step of the way.";

export const travelClosing =
  "By offering these services, Shakthi Academy can significantly reduce the stress and hassle associated with international travel, allowing students to focus on their academic pursuits.";

export const travelSections: TravelServiceSection[] = [
  {
    id: "pre-travel",
    title: "Pre-Travel Assistance",
    summary: "Everything you need before you board your flight.",
    items: [
      {
        title: "Destination guidance",
        desc: "Providing information about your chosen destination, including climate, culture, cost of living, and safety.",
      },
      {
        title: "Travel itinerary planning",
        desc: "Assisting students in creating a travel itinerary based on their academic goals and personal interests.",
      },
      {
        title: "Flight booking",
        desc: "Offering guidance on flight options, booking, and baggage allowances.",
      },
      {
        title: "Accommodation arrangements",
        desc: "Helping students find suitable accommodation options, such as student housing or off-campus apartments.",
      },
      {
        title: "Travel insurance recommendations",
        desc: "Advising students on the importance of travel insurance and recommending suitable plans.",
      },
      {
        title: "Currency exchange guidance",
        desc: "Providing information on currency exchange rates and options.",
      },
    ],
  },
  {
    id: "travel-support",
    title: "Travel Support",
    summary: "Confident departure with the right documents and preparation.",
    items: [
      {
        title: "Visa and passport assistance",
        desc: "Ensuring students have the necessary documentation for their travel.",
      },
      {
        title: "Health and safety briefings",
        desc: "Providing information on health precautions, vaccinations, and emergency contacts.",
      },
      {
        title: "Packing advice",
        desc: "Offering tips on what to pack for their journey.",
      },
      {
        title: "Airport assistance",
        desc: "Providing guidance on airport procedures, check-in, and security.",
      },
    ],
  },
  {
    id: "post-travel",
    title: "Post-Travel Support",
    summary: "A smooth landing and a confident start abroad.",
    items: [
      {
        title: "Arrival assistance",
        desc: "Offering support upon arrival, such as airport pick-up or accommodation check-in.",
      },
      {
        title: "Orientation assistance",
        desc: "Helping students acclimate to their new environment through orientation programs or resources.",
      },
      {
        title: "Ongoing support",
        desc: "Providing continued support and guidance throughout their stay abroad.",
      },
    ],
  },
];
