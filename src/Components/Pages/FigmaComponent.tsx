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

  const [whyTxt, setWhyTxt] = useState<string>("The main reason why I want to work as this position for Crunchy Rollis because I'm very interested working in a role where you're able to enhance user experiences. For example this particular role, will help enhance checkout experiences for fans. Another factor to add is, the role allows you to solve complex challenges, which makes me even more interested. Crunchy Roll's values of COURAGE, CURIOSITY, SERVICE & KAIZEN all align with my values which is a great addition when considering working for Crunchy Roll. Also the position has a great pay salary, plus many great benefits! For example, the pay salary is anywhere from 149k - 186k, and one of their benefits include a support program for new parents. Currently I don't have all the skillsets required for the job, for example skillsets that I need to acquire are being able to deploy code with AWS & Google Cloud, have 5+ years of relevant experience in the software industry, and knowledge on how to optimize and refine checkout experiences for users. Hypothetically, if I were to get hired at Crunchy Roll for this position, I would like to achieve, growing my skillset as a software engineer, and being able to hopefully acquire a higher position at Crunchy Roll or another company.")
  return (
    <>
      <InfoComponent jobLink="https://boards.greenhouse.io/figma/jobs/4214847004" job="Software Engineer, Editor" hq={figmaHq} why={whyTxt} benefits={benefitArray} requirements={requirementArray} />
    </>
  );
};

export default FigmaComponent;