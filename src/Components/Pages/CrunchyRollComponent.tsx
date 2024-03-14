import React, { useState } from "react";
import crunchyHq from "./Assets/crunchyroll hq.jpg";
import InfoComponent from "../InfoComponent";

const CrunchyRollComponent = () => {
  const [benefitArray, setBenefitArray] = useState<string[]>([
    "Receive a great compensation package including salary plus performance bonus earning potential, paid annually",
    "Flexible time off policies allowing you to take the time you need to be your whole self.Generous medical, dental, vision, STD, LTD, and life insurance Health Saving Account HSA program",
    "Health care and dependent care FSA",
    "401(k) plan, with employer match",
    "Employer paid commuter benefit",
    "Support program for new parents",
    "Pet insurance and some of our offices are pet friendly!",
  ]);

  const [requirementArray, setRequirementArray] = useState<string[]>([
    "You’re an experienced and passionate Software Engineer with experience building intuitive user interfaces (5+ years of relevant experience in the software industry)",
    "You have in-depth knowledge of frontend technologies, including JavaScript, TypeScript, React, and CSS.",
    "You're experienced with deploying code in AWS, Azure, or Google Cloud environments",
    "You're familiar with the development of full stack applications or backend services",
    "You know how to refine the checkout experience and identify opportunities for continuous improvement and performance optimizations",
    "You excel in an Agile and collaborative environment, where your insights and expertise will help create technical solutions loved by our fans."
]);

  const [whyTxt, setWhyTxt] = useState<string>("The main reason why I want to work as this position for Crunchy Rollis because I'm very interested working in a role where you're able to enhance user experiences. For example this particular role, will help enhance checkout experiences for fans. Another factor to add is, the role allows you to solve complex challenges, which makes me even more interested. Crunchy Roll's values of COURAGE, CURIOSITY, SERVICE & KAIZEN all align with my values which is a great addition when considering working for Crunchy Roll. Also the position has a great pay salary, plus many great benefits! For example, the pay salary is anywhere from 149k - 186k, and one of their benefits include a support program for new parents. Currently I don't have all the skillsets required for the job, for example skillsets that I need to acquire are being able to deploy code with AWS & Google Cloud, have 5+ years of relevant experience in the software industry, and knowledge on how to optimize and refine checkout experiences for users. Hypothetically, if I were to get hired at Crunchy Roll for this position, I would like to achieve, growing my skillset as a software engineer, and being able to hopefully acquire a higher position at Crunchy Roll or another company.")
  return (
    <>
      <InfoComponent jobLink="https://boards.greenhouse.io/crunchyroll/jobs/5575487?gh_jid=5575487" job="Software Engineer III (Frontend), Acquisition and Checkout" hq={crunchyHq} why={whyTxt} benefits={benefitArray} requirements={requirementArray} />
    </>
  );
};

export default CrunchyRollComponent;
