import { createFileRoute } from "@tanstack/react-router";
import { IndividualTestPage } from "../components/site/IndividualTestPage";

export const Route = createFileRoute("/oet")({
  head: () => ({
    meta: [
      { title: "OET Prep for Doctors & Nurses | Shakthi Academy" },
      { name: "description", content: "Professional OET coaching for medical practitioners and nurses. Achieve Grade B or higher with clinical case scenarios and specialized mentors." },
    ],
  }),
  component: OetPage,
});

function OetPage() {
  return <IndividualTestPage testId="oet" />;
}
