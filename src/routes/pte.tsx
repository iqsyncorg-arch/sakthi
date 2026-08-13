import { createFileRoute } from "@tanstack/react-router";
import { IndividualTestPage } from "../components/site/IndividualTestPage";

export const Route = createFileRoute("/pte")({
  head: () => ({
    meta: [
      { title: "PTE Academic Coaching & Preparation | Shakthi Academy" },
      { name: "description", content: "Fast track your global study and visa plans with PTE Academic training at Shakthi Academy. Master speaking, writing, reading, and listening AI templates." },
    ],
  }),
  component: PtePage,
});

function PtePage() {
  return <IndividualTestPage testId="pte" />;
}
