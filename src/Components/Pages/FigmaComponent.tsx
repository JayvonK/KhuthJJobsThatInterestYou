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

  const [whyTxt, setWhyTxt] = useState<string>("Why would I want to work as a Software Engineer, Editor for Figma? Well first of all their ")
  return (
    <>
      <InfoComponent jobLink="https://boards.greenhouse.io/figma/jobs/4214847004" job="Software Engineer, Editor" hq={figmaHq} why={whyTxt} benefits={benefitArray} requirements={requirementArray} />
    </>
  );
};

export default FigmaComponent;