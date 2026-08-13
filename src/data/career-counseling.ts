export type CareerChallenge = {
  title: string;
  reality: string;
  help: string;
};

export const careerIntro =
  "Choosing a career path or planning your next professional move can feel incredibly overwhelming. In today's fast-paced, global job market, the traditional approach of picking a major and hoping for the best simply isn't enough.";

export const careerPhilosophy =
  "At Shakthi Academy, we believe that career counseling should do more than just check boxes or hand you a generic list of jobs. Our mission is to eliminate the anxiety, confusion, and friction that stand between you and your true potential. We tackle the real-world pain points that students and working professionals face every single day.";

export const careerChallenges: CareerChallenge[] = [
  {
    title: 'Cutting Through "Analysis Paralysis"',
    reality:
      "Many students and professionals get stuck in indecision, choosing paths out of safety rather than alignment.",
    help: "We use advanced, objective psychometric assessments that evaluate your core strengths, personal values, and unique personality traits. We cut through the noise to deliver a focused, data-backed shortlist of high-alignment careers tailored uniquely to you.",
  },
  {
    title: "Building a Concrete, Step-by-Step Roadmap",
    reality:
      "Navigating university prerequisites, international credential values, or skill gaps can feel like guesswork.",
    help: "We construct a highly structured, strategic educational and training roadmap. Whether it's choosing the right bachelor's program, selecting a specialized master's degree, or targeting industry-respected certifications, we map out every milestone so you never waste time or tuition.",
  },
  {
    title: 'Conquering the Fear of Pivoting',
    reality:
      'The fear of "starting over" causes many professionals to stay stuck in a state of chronic burnout.',
    help: "We help you deconstruct your past investments and translate your experiences into highly valuable transferable skills. We show you exactly how your existing analytical, leadership, or communication traits map onto your new target industry.",
  },
  {
    title: "Aligning Expectations with Real Job Market Intelligence",
    reality:
      "Outdated advice or romanticized views of a profession often lead to mismatched expectations and financial strain.",
    help: "We inject up-to-the-minute market intelligence into your decision-making process — from regional job growth and employment trends to global salary benchmarks and real-world daily workflows.",
  },
  {
    title: "Mastering Your Professional Narrative",
    reality:
      "Sending out endless applications into automated portals only to receive radio silence is incredibly draining.",
    help: "We provide tactical, end-to-end career marketing support — resume optimization, networking strategy, applicant tracking systems, and intensive mock interviews.",
  },
];

export const careerCommitment =
  "We follow strictly ethical practices and maintain absolute transparency in our counseling approach. We do not push pre-determined packages or institutional agendas. Our sole focus is to provide you with the objective clarity and confidence you need to build a rewarding, seamless, and globally relevant career.";

export const careerClosing =
  "Your potential shouldn't be left to chance. Let's build your roadmap together.";

export const careerImages = {
  hero: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=1600&q=80",
  philosophy: "https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&w=1200&q=80",
  roadmap: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1600&q=80",
  narrative: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1200&q=80",
} as const;
