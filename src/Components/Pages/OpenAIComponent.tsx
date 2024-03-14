import React, { useState } from "react";
import openAIHQ from "./Assets/open ai hq.jpg";
import InfoComponent from "../InfoComponent";

const OpenAIComponent = () => {
  const [benefitArray, setBenefitArray] = useState<string[]>([
    "Health, dental, and vision insurance",
    "Mental healthcare support and services",
    "Commuter benefits",
    "401(k) with generous matching",
    "Domestic conference budget for each employee",
    "Flexible working hours",
    "20 weeks paid parental leave",
    "Life and AD&D insurance",
    "Fertility treatment and family planning coverage",
    "Flexible spending account for healthcare and dependent care",
    "Annual learning & development stipend",
    "Employee resource groups",
    "Team-driven celebrations and events",
    "Daily breakfast, lunch, and dinner",
    "Freshly baked cookies"
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
    "The main reason why I want to work as this position for Open AI is because, I'm really interested in working for a company that specializes in AI, and when I think about an AI company I automatically think of Open AI. Also I would love to contribute to the development of ChatGPT and OpenAI API features. On top of my interest, they offer a salary that goes up to 385k! Also I really like some of their values, for example their AGI focus which they are commited to creating a safe and beneficial AGI that will have a positive impact on humanity's future. And also their value of making something that people love. Their benefits aren't bad either, I really like how they offer fertility treatment, flexible working hours and 20 weeks of paid parental leave. For their skillsets, I qualify for some, but I will have to learn new skills in order to actually be hired. For example I would have to learn python for the backend, and gain lots of more experience.Now if I were to actually be hired for Open AI, then I my goal would be to further improve my skills at the company and most likely reach for a higher position at Open AI or another company."
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
