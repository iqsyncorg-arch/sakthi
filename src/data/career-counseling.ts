import type { LucideIcon } from "lucide-react";
import { BarChart3, Compass, Mic, RefreshCw, Target } from "lucide-react";

export const careerChallengeDefs: { id: string; icon: LucideIcon }[] = [
  { id: "analysisParalysis", icon: Compass },
  { id: "roadmap", icon: Target },
  { id: "pivoting", icon: RefreshCw },
  { id: "marketIntelligence", icon: BarChart3 },
  { id: "narrative", icon: Mic },
];

export const careerImages = {
  hero: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=1600&q=80",
  philosophy: "https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&w=1200&q=80",
  roadmap: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1600&q=80",
  narrative: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1200&q=80",
} as const;
