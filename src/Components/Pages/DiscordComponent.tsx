import React, { useState } from "react";
import discordHq from "./Assets/crunchyroll hq.jpg";
import InfoComponent from "../InfoComponent";

const DiscordComponent = () => {
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
    "3-5 years of professional experience working on high traffic web pages",
    "Strong grasp of mobile and desktop website fundamentals, specifically: TypeScript/JavaScript, CSS, HTML, and React",
    "Excellent knowledge of web performance, especially as it relates to Core Web Vitals",
    "Comfort picking up and integrating new third party tools",
    "Clear communication and the ability to operate in a collaborative environment of cross-functional partners.",
    "Familiarity w/ bundlers like webpack and an understanding of their impact on web performance"
]);

  const [whyTxt, setWhyTxt] = useState<string>("The main reason why I want to work as this position for Crunchy Rollis because I'm very interested working in a role where you're able to enhance user experiences. For example this particular role, will help enhance checkout experiences for fans. Another factor to add is, the role allows you to solve complex challenges, which makes me even more interested. Crunchy Roll's values of COURAGE, CURIOSITY, SERVICE & KAIZEN all align with my values which is a great addition when considering working for Crunchy Roll. Also the position has a great pay salary, plus many great benefits! For example, the pay salary is anywhere from 149k - 186k, and one of their benefits include a support program for new parents. Currently I don't have all the skillsets required for the job, for example skillsets that I need to acquire are being able to deploy code with AWS & Google Cloud, have 5+ years of relevant experience in the software industry, and knowledge on how to optimize and refine checkout experiences for users. Hypothetically, if I were to get hired at Crunchy Roll for this position, I would like to achieve, growing my skillset as a software engineer, and being able to hopefully acquire a higher position at Crunchy Roll or another company.")
  return (
    <>
      <InfoComponent jobLink="https://discord.com/jobs/7183130002" job="Software Engineer III (Frontend), Acquisition and Checkout" hq={discordHq} why={whyTxt} benefits={benefitArray} requirements={requirementArray} />
    </>
  );
};

export default DiscordComponent;
