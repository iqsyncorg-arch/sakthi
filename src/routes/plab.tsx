import { createFileRoute } from "@tanstack/react-router";
import { IndividualTestPage } from "../components/site/IndividualTestPage";

export const Route = createFileRoute("/plab")({
  head: () => ({
    meta: [
      { title: "PLAB Coaching & GMC Registration Support | Shakthi Academy" },
      { name: "description", content: "Prepare for PLAB Part 1 & 2 OSCE. Get expert NHS resume guidance, mock stations, and complete UK GMC registration path guidance." },
    ],
  }),
  component: PlabPage,
});

function PlabPage() {
  return <IndividualTestPage testId="plab" />;
}
