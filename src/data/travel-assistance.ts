import type { LucideIcon } from "lucide-react";
import {
  Building2,
  Car,
  Coins,
  Compass,
  FileCheck2,
  Globe2,
  Headphones,
  HeartPulse,
  Home as HomeIcon,
  Luggage,
  Map,
  Package,
  Plane,
  Shield,
} from "lucide-react";

export type TravelSectionDef = {
  id: string;
  itemIds: string[];
};

export const travelSectionDefs: TravelSectionDef[] = [
  {
    id: "pre-travel",
    itemIds: [
      "destinationGuidance",
      "itineraryPlanning",
      "flightBooking",
      "accommodation",
      "travelInsurance",
      "currencyExchange",
    ],
  },
  {
    id: "travel-support",
    itemIds: ["visaPassport", "healthSafety", "packingAdvice", "airportAssistance"],
  },
  {
    id: "post-travel",
    itemIds: ["arrivalAssistance", "orientation", "ongoingSupport"],
  },
];

export const travelItemIcons: Record<string, LucideIcon> = {
  destinationGuidance: Globe2,
  itineraryPlanning: Map,
  flightBooking: Plane,
  accommodation: HomeIcon,
  travelInsurance: Shield,
  currencyExchange: Coins,
  visaPassport: FileCheck2,
  healthSafety: HeartPulse,
  packingAdvice: Package,
  airportAssistance: Building2,
  arrivalAssistance: Car,
  orientation: Compass,
  ongoingSupport: Headphones,
};

export const travelSectionIcons: Record<string, LucideIcon> = {
  "pre-travel": Map,
  "travel-support": Plane,
  "post-travel": Luggage,
};
