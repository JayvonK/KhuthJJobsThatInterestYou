import React, { useState } from "react";
import figmaHq from "./Assets/figma hq.png";
import InfoComponent from "../InfoComponent";

const FigmaComponent = () => {
  const [benefitArray, setBenefitArray] = useState<string[]>([
    "Competitive salary & equity",
    "Health, Dental, & Vision",
    "Retirement with company contribution",
    "Parental leave & fertility support",
    "Mental health and wellness benefits",
    "Generous PTO",
    "Company recharge days",
    "Learning & development stipend",
    "Work from home stipend",
    "Cell phone reimbursement"
]);

  const [requirementArray, setRequirementArray] = useState<string[]>([
    "2+ years of professional experience shipping user-facing features or products as a full-stack developer",
    "Demonstrated fluency with one or more programming languages, including: Typescript/Javascript, React, C++, Python, Java, Objective-C, Go, or Rust",
    "Experience communicating and working across functions to proactively drive solutions"
]);

  const [whyTxt, setWhyTxt] = useState<string>("Why would I want to work as a Software Engineer, Editor for Figma? Well first of all the role can be held remotely in the US, and I'm really interested in being able to build real time features and contributing to Figma's editor and full stack system. Also there salary range starts at 168k and can go up to 350K! Which is a huge bonus for me. Another reason why I would like to work with Figma is because I really align with one of their values which is 'Grow as you go'. I have some of the skillsets needed to qualify for the job, however I'm going to need to acquire more experience in order to work at Figma. If I actually end up working at Figma my goal would most likely be to create an impact or some sort of feature/idea that really stands out, and to reach that 350k salary.")
  return (
    <>
      <InfoComponent jobLink="https://boards.greenhouse.io/figma/jobs/4214847004" job="Software Engineer, Editor" hq={figmaHq} why={whyTxt} benefits={benefitArray} requirements={requirementArray} />
    </>
  );
};

export default FigmaComponent;