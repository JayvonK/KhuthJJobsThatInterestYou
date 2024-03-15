import React, { useState } from "react";
import nikeHq from "./Assets/nike hq.jpg";
import InfoComponent from "../InfoComponent";

const NikeComponent = () => {
  const [benefitArray, setBenefitArray] = useState<string[]>([
    "MEDICAL, DENTAL AND VISION PLANS",
    "PERFORMANCE SHARING PLAN (PSP)",
    "EMPLOYEE STOCK PURCHASE PLAN (ESPP)",
    "HEALTH SAVINGS ACCOUNT (HSA)",
    "HEALTHCARE FSA",
    "DEPENDENT CARE FSA",
    "COMMUTER EXPENSE REIMBURSEMENT ACCOUNT (CERA)",
    "PAID TIME OFF (PTO)",
    "HOLIDAYS",
    "SABBATICALS",
    "FAMILY CARE",
    "PAID MILITARY LEAVE",
    "SURROGACY AND ADOPTION ASSISTANCE",
    "RESOURCES AND SUPPORT TO CARE FOR CHILDREN WITH LEARNING, SOCIAL OR BEHAVIORAL CHALLENGES",
    "TUITION ASSISTANCE",
    "NIKE SCHOLARSHIP FUND",
    "EMPLOYEE ASSISTANCE PLAN (EAP)",
    "LIFECARE RESOURCE AND REFERRAL SERVICE",
    "EMPLOYEE GIVING",
    "BASIC AND SUPPLEMENTAL LIFE INSURANCE",
    "SHORT-TERM AND LONG-TERM DISABILITY",
    "ACCIDENTAL DEATH AND DISMEMBERMENT INSURANCE (AD&D)",
    "LONG TERM CARE INSURANCE",
    "GROUP LEGAL INSURANCE",
    "AUTO AND HOMEOWNERS INSURANCE",
    "BEHAVIORAL HEALTH",
    "SUMMER HOURS",
    "LIFETIME SHOPPING DISCOUNT",
  ]);

  const [requirementArray, setRequirementArray] = useState<string[]>([
    "Employer will accept a Master’s degree in Computer Science, Engineering, or Computer Information Systems and 2 years of experience in the job offered or computer related occupation.",
    "Java and Python ",
    "Terraform ",
    "Node JS ",
    "AWS Serverless Lambda ",
    "Splunk and SignalFx ",
    "CI/CD Pipeline ",
    "DNS and Route53 ",
    "Amazon RDS and S3 ",
    "API Gateway ",
    "AWS Fargate ",
    "High level design creation ",
    "Docker  and",
    "Disaster Recovery.",
  ]);

  const [whyTxt, setWhyTxt] = useState<string>(
    "One of the main reasons why I actually want to work for a company like Nike is because of all the crazy benefits there are. For example they have tuition assistance, AD & D, paid military leave, family care, pto and much much more. Another reason why I even consider Nike as one of my top five jobs is because my whole like I've been surrounded by the brand, and I feel like it's sort of natural for me to try and work there. Also I align with Nike's values especially their value to bring inspiration and innovation to athletes all around the world, because my whole childhood surronded me playing sports and wanting to become an athlete myself. Other than the values of Nike, the average salary for a software engineer working at Nike is around 160k, which is pretty good considering all the benefits. Now looking at the requirements, I don't have many of the skillsets that are demanded, but that just means I have A LOT of skills to learn, which I don't have a problem with. Now if I were to potentiall be hired for Nike, my main goal would to be able to be in the position where I'm able to become a senior software engineer or lead a team of software engineers on my own."
  );
  return (
    <>
      <InfoComponent
        jobLink="https://jobs.nike.com/job/R-21455?from=job%20search%20funnel"
        job="Software Engineer For Nike"
        hq={nikeHq}
        why={whyTxt}
        benefits={benefitArray}
        requirements={requirementArray}
        hqAlt="Image representing Nike"
      />
    </>
  );
};

export default NikeComponent;
