import { createFileRoute } from "@tanstack/react-router";
import { IndividualTestPage } from "../components/site/IndividualTestPage";

export const Route = createFileRoute("/duolingo")({
  head: () => ({
    meta: [
      { title: "Duolingo English Test Prep | Shakthi Academy" },
      { name: "description", content: "Succeed in the modern, online Duolingo English Test with targeted guidance, practice mocks, and subscore boosting strategies at Shakthi Academy." },
    ],
  }),
  component: DuolingoPage,
});

function DuolingoPage() {
  return <IndividualTestPage testId="duolingo" />;
}
