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
    "The main reason why I want to work as this position for Crunchy Rollis because I'm very interested working in a role where you're able to enhance user experiences. For example this particular role, will help enhance checkout experiences for fans. Another factor to add is, the role allows you to solve complex challenges, which makes me even more interested. Crunchy Roll's values of COURAGE, CURIOSITY, SERVICE & KAIZEN all align with my values which is a great addition when considering working for Crunchy Roll. Also the position has a great pay salary, plus many great benefits! For example, the pay salary is anywhere from 149k - 186k, and one of their benefits include a support program for new parents. Currently I don't have all the skillsets required for the job, for example skillsets that I need to acquire are being able to deploy code with AWS & Google Cloud, have 5+ years of relevant experience in the software industry, and knowledge on how to optimize and refine checkout experiences for users. Hypothetically, if I were to get hired at Crunchy Roll for this position, I would like to achieve, growing my skillset as a software engineer, and being able to hopefully acquire a higher position at Crunchy Roll or another company."
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
      />
    </>
  );
};

export default NikeComponent;
