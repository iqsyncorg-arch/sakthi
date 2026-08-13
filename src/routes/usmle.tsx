import { createFileRoute } from "@tanstack/react-router";
import { IndividualTestPage } from "../components/site/IndividualTestPage";

export const Route = createFileRoute("/usmle")({
  head: () => ({
    meta: [
      { title: "USMLE Prep & US Residency Roadmap | Shakthi Academy" },
      { name: "description", content: "Navigate your USMLE Steps and secure a matched US residency slot. ECFMG credentials registration and high-yield system reviews with experts." },
    ],
  }),
  component: UsmlePage,
});

function UsmlePage() {
  return <IndividualTestPage testId="usmle" />;
}
