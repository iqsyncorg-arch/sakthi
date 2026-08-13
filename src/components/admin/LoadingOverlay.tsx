import { Loader2 } from "lucide-react";

export function PageLoader({ label = "Loading dashboard…" }: { label?: string }) {
  return (
    <div className="flex flex-col items-center justify-center py-24 gap-3">
      <Loader2 className="h-8 w-8 text-[#4DA8DA] animate-spin" />
      <p className="text-sm font-semibold text-slate-500">{label}</p>
    </div>
  );
}

export function PanelLoader() {
  return (
    <div className="absolute inset-0 z-10 flex items-center justify-center bg-white/70 backdrop-blur-[1px] rounded-3xl">
      <Loader2 className="h-7 w-7 text-[#0A3D62] animate-spin" />
    </div>
  );
}
