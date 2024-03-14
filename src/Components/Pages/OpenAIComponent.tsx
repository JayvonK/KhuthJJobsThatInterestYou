import React, { useState } from "react";
import openAIHQ from "./Assets/open ai hq.jpg";
import InfoComponent from "../InfoComponent";

const OpenAIComponent = () => {
  const [benefitArray, setBenefitArray] = useState<string[]>([
    "Medical, dental, and vision insurance for you and your family",
    "Mental health and wellness support",
    "401(k) plan with 50% matching",
    "Unlimited time off and 18+ company holidays per year",
    "Paid parental leave (20 weeks) and family-planning support",
    "Annual learning & development stipend ($1,500 per year)",
  ]);

  const [requirementArray, setRequirementArray] = useState<string[]>([
    "5+ years of relevant engineering experience at tech and product-driven companies",
    "Proficiency with JavaScript, React, and other web technologies",
    "Proficiency with some backend language (we use Python)",
    "Some experience with relational databases like Postgres/MySQL",
    "Interest in AI/ML (direct experience not required)",
    "Ability to move fast in an environment where things are sometimes loosely defined and may have competing priorities or deadlines",
  ]);

  const [whyTxt, setWhyTxt] = useState<string>(
    "The main reason why I want to work as this position for Crunchy Rollis because I'm very interested working in a role where you're able to enhance user experiences. For example this particular role, will help enhance checkout experiences for fans. Another factor to add is, the role allows you to solve complex challenges, which makes me even more interested. Crunchy Roll's values of COURAGE, CURIOSITY, SERVICE & KAIZEN all align with my values which is a great addition when considering working for Crunchy Roll. Also the position has a great pay salary, plus many great benefits! For example, the pay salary is anywhere from 149k - 186k, and one of their benefits include a support program for new parents. Currently I don't have all the skillsets required for the job, for example skillsets that I need to acquire are being able to deploy code with AWS & Google Cloud, have 5+ years of relevant experience in the software industry, and knowledge on how to optimize and refine checkout experiences for users. Hypothetically, if I were to get hired at Crunchy Roll for this position, I would like to achieve, growing my skillset as a software engineer, and being able to hopefully acquire a higher position at Crunchy Roll or another company."
  );
  return (
    <>
      <InfoComponent
        jobLink="https://jobs.ashbyhq.com/openai/a705dd16-efdb-4304-9a20-075f23f5aeb7"
        job="Software Engineer, Full Stack"
        hq={openAIHQ}
        why={whyTxt}
        benefits={benefitArray}
        requirements={requirementArray}
      />
    </>
  );
};

export default OpenAIComponent;
