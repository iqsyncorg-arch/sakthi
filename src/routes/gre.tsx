import { createFileRoute } from "@tanstack/react-router";
import { IndividualTestPage } from "../components/site/IndividualTestPage";

export const Route = createFileRoute("/gre")({
  head: () => ({
    meta: [
      { title: "GRE Test Preparation Classes | Shakthi Academy" },
      { name: "description", content: "Supercharge your MS, MBA or PhD admissions with GRE general test prep at Shakthi Academy. Comprehensive Quant lectures and high-frequency Verbal vocab." },
    ],
  }),
  component: GrePage,
});

function GrePage() {
  return <IndividualTestPage testId="gre" />;
}
