import { createFileRoute } from "@tanstack/react-router";
import { IndividualTestPage } from "../components/site/IndividualTestPage";

export const Route = createFileRoute("/neet")({
  head: () => ({
    meta: [
      { title: "NEET Eligibility Coaching & MBBS Abroad | Shakthi Academy" },
      { name: "description", content: "Qualify NEET to pursue your MBBS degree abroad. Complete guidance on top NMC approved universities in Georgia, Europe, and Russia." },
    ],
  }),
  component: NeetPage,
});

function NeetPage() {
  return <IndividualTestPage testId="neet" />;
}
