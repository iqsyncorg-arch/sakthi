import { createFileRoute } from "@tanstack/react-router";
import { IndividualTestPage } from "../components/site/IndividualTestPage";

export const Route = createFileRoute("/toefl")({
  head: () => ({
    meta: [
      { title: "TOEFL Coaching & Test Preparation | Shakthi Academy" },
      { name: "description", content: "Master academic English and score high on the TOEFL iBT exam. Join Shakthi Academy's test preparation classes led by expert instructors." },
    ],
  }),
  component: ToeflPage,
});

function ToeflPage() {
  return <IndividualTestPage testId="toefl" />;
}
