import React, { useState } from "react";
import githubHq from "./Assets/github hq.jpg";
import InfoComponent from "../InfoComponent";

const GitHubComponent = () => {
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

  const [whyTxt, setWhyTxt] = useState<string>("To start off I really like that one of Github's values is 'Customer-obsessed', and also I love that I would be able to work from remote. I'm very interested in the responsibilities of the job, for example having to implement API's for seamless integration between software components, or even providing technical leadership, mentorship, pairing opportunities and code reviews to encourage the growth of others. Looking upon the benefits, I'm even more drawn to work for Github because of their 100% medical, dental and vision insurance premiums. Also by their time flexibility to balance your life and work. In addition to the great benefits, you even will be getting a salary from anywhere around 75k - 198k. Now for the requirements, it looks like I'm going to have to learn new skills. For example I'm going to have to learn/or how to use Ruby, MySQL/database managment, Rest/GraphQL APIs, CI/CD tools and automated pipelines. There are also preferred qualifications")
  return (
    <>
      <InfoComponent jobLink="https://www.github.careers/benefits/jobs/2665?lang=en-us" job="Software Engineer For GitHub" hq={githubHq} why={whyTxt} benefits={benefitArray} requirements={requirementArray} />
    </>
  );
};

export default GitHubComponent;
