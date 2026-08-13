import { createFileRoute } from "@tanstack/react-router";
import { IndividualTestPage } from "../components/site/IndividualTestPage";

export const Route = createFileRoute("/ielts")({
  head: () => ({
    meta: [
      { title: "IELTS Coaching & Test Preparation | Shakthi Academy" },
      { name: "description", content: "Comprehensive IELTS coaching at Shakthi Academy. Master Reading, Writing, Speaking, and Listening modules with expert trainers and regular mocks." },
    ],
  }),
  component: IeltsPage,
});

function IeltsPage() {
  return <IndividualTestPage testId="ielts" />;
}
