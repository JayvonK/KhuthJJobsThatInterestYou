import React, { useState } from "react";
import openAIHQ from "./Assets/open ai hq.jpg";
import InfoComponent from "../InfoComponent";

const OpenAIComponent = () => {
  const [benefitArray, setBenefitArray] = useState<string[]>([
    "Flexible time away to support balance in your work and life.",
    "Competitive salaries.",
    "Clear diversity, inclusion, and anti-discrimination policies backed by business practices and company culture.",
    "100% of medical, dental, and vision insurance premiums covered by GitHub for you + your dependents. (US)",
    "Includes gender-affirming benefits.",
    "Five months of paid family leave to all new parents with the option to use it all at once or throughout the child’s first year.",
    "Family forming benefits that cover fertility, infertility, adoption, and surrogacy costs and support.",
    "Mental health benefits that offer resources and support and cover therapy and coaching sessions for you and your dependents.",
    "Generous 401(k) matching with 50% match up to the IRS 402(g) limit (US; competitive non-US pension options internationally).",
    "Employee stock purchase plan that lets you purchase Microsoft stock at a discount. (Microsoft is our parent company.)"
]);

  const [requirementArray, setRequirementArray] = useState<string[]>([
    "Three or more years of experience as a software engineer or related field",
    "Bachelor's degree in Computer Science, Software Engineering or equivalent work experience",
    "1+ years of experience delivering high availability, enterprise grade services, including monitoring, observability and diagnosing problems",
    "Four or more years of experience in two or more of the following skill sets: Ruby (Rails), Go and related tooling, JavaScript (React, TypeScript, Relay), MySQL and database management, NodeJS development, Design and build REST and/or GraphQL APIs, Experience with CI/CD tools and automated pipelines"
]);

  const [whyTxt, setWhyTxt] = useState<string>("The main reason why I want to work as this position for Crunchy Rollis because I'm very interested working in a role where you're able to enhance user experiences. For example this particular role, will help enhance checkout experiences for fans. Another factor to add is, the role allows you to solve complex challenges, which makes me even more interested. Crunchy Roll's values of COURAGE, CURIOSITY, SERVICE & KAIZEN all align with my values which is a great addition when considering working for Crunchy Roll. Also the position has a great pay salary, plus many great benefits! For example, the pay salary is anywhere from 149k - 186k, and one of their benefits include a support program for new parents. Currently I don't have all the skillsets required for the job, for example skillsets that I need to acquire are being able to deploy code with AWS & Google Cloud, have 5+ years of relevant experience in the software industry, and knowledge on how to optimize and refine checkout experiences for users. Hypothetically, if I were to get hired at Crunchy Roll for this position, I would like to achieve, growing my skillset as a software engineer, and being able to hopefully acquire a higher position at Crunchy Roll or another company.")
  return (
    <>
      <InfoComponent jobLink="https://www.github.careers/benefits/jobs/2665?lang=en-us" job="Software Engineer For GitHub" hq={openAIHQ} why={whyTxt} benefits={benefitArray} requirements={requirementArray} />
    </>
  );
};

export default OpenAIComponent;