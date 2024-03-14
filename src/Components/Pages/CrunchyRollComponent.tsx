import React, { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
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
    // <Container>
    //   <div className="box">
    //     <h2 className="angkor boxTxt  noPad">
    //       <a
    //         target="_blank"
    //         className="textDark"
    //         href="https://boards.greenhouse.io/crunchyroll/jobs/5575487?gh_jid=5575487"
    //       >
    //         Software Engineer III (Frontend), Acquisition and Checkout
    //       </a>
    //     </h2>
    //   </div>

    //   <Row>
    //     <Col>
    //       <img className="sideBox imgBorder" src={crunchyHq} />
    //     </Col>
    //     <Col>
    //       <div className="whyBox">
    //         <h2 className="angkor boxTxt textDark noPad">WHY</h2>
    //       </div>
    //       <p className="text-blu whyTxt">
    //         The main reason why I want to work as this position for Crunchy Roll
    //         is because I'm very interested working in a role where you're able
    //         to enhance user experiences. For example this particular role, will
    //         help enhance checkout experiences for fans. Another factor to add
    //         is, the role allows you to solve complex challenges, which makes me
    //         even more interested. Crunchy Roll's values of COURAGE, CURIOSITY,
    //         SERVICE & KAIZEN all align with my values which is a great addition
    //         when considering working for Crunchy Roll. Also the position has a
    //         great pay salary, plus many great benefits! For example, the pay
    //         salary is anywhere from 149k - 186k, and one of their benefits
    //         include a support program for new parents. Currently I don't have
    //         all the skillsets required for the job, for example skillsets that I
    //         need to acquire are being able to deploy code with AWS & Google
    //         Cloud, have 5+ years of relevant experience in the software
    //         industry, and knowledge on how to optimize and refine checkout
    //         experiences for users. Hypothetically, if I were to get hired at
    //         Crunchy Roll for this position, I would like to achieve, growing my
    //         skillset as a software engineer, and being able to hopefully acquire
    //         a higher position at Crunchy Roll or another company.
    //       </p>
    //     </Col>
    //   </Row>

    //   <div className="benefitsBox">
    //     <h2 className="angkor boxTxt textDark noPad">Benefits</h2>
    //   </div>

    //   <Row>
    //     <Col sm={4}>
    //       <ul>
    //         <li className="text-blu whyTxt">
    //           Flexible time off policies allowing you to take the time you need
    //           to be your whole self.
    //         </li>
    //       </ul>
    //     </Col>

    //     <Col sm={4}>
    //       <ul>
    //         <li className="text-blu whyTxt">
    //           Generous medical, dental, vision, STD, LTD, and life insurance
    //         </li>
    //       </ul>
    //     </Col>
    //     <Col sm={4}>
    //       <ul>
    //         <li className="text-blu whyTxt">
    //           Health Saving Account HSA program
    //         </li>
    //       </ul>
    //     </Col>
    //     <Col sm={4}>
    //       <ul>
    //         <li className="text-blu whyTxt">
    //           Receive a great compensation package including salary plus
    //           performance bonus earning potential, paid annually.
    //         </li>
    //       </ul>
    //     </Col>
    //     <Col sm={4}>
    //       <ul>
    //         <li className="text-blu whyTxt">
    //           Health care and dependent care FSA
    //         </li>
    //       </ul>
    //     </Col>
    //     <Col sm={4}>
    //       <ul>
    //         <li className="text-blu whyTxt">
    //           401(k) plan, with employer match
    //         </li>
    //       </ul>
    //     </Col>
    //     <Col sm={4}>
    //       <ul>
    //         <li className="text-blu whyTxt">Employer paid commuter benefit</li>
    //       </ul>
    //     </Col>
    //     <Col sm={4}>
    //       <ul>
    //         <li className="text-blu whyTxt">Support program for new parents</li>
    //       </ul>
    //     </Col>
    //     <Col sm={4}>
    //       <ul>
    //         <li className="text-blu whyTxt">
    //           Pet insurance and some of our offices are pet friendly!
    //         </li>
    //       </ul>
    //     </Col>
    //   </Row>

    //   <div className="benefitsBox">
    //     <h2 className="angkor boxTxt textDark noPad">Requirements</h2>
    //   </div>

    //   <Row>
    //     <Col sm={4}>
    //       <ul>
    //         <li className="text-blu whyTxt">
    //         You’re an experienced and passionate Software Engineer with experience building intuitive user interfaces (5+ years of relevant experience in the software industry)
    //         </li>
    //       </ul>
    //     </Col>

    //     <Col sm={4}>
    //       <ul>
    //         <li className="text-blu whyTxt">
    //         You have in-depth knowledge of frontend technologies, including JavaScript, TypeScript, React, and CSS.
    //         </li>
    //       </ul>
    //     </Col>
    //     <Col sm={4}>
    //       <ul>
    //         <li className="text-blu whyTxt">
    //         You're experienced with deploying code in AWS, Azure, or Google Cloud environments
    //         </li>
    //       </ul>
    //     </Col>
    //     <Col sm={4}>
    //       <ul>
    //         <li className="text-blu whyTxt">
    //         You're familiar with the development of full stack applications or backend services
    //         </li>
    //       </ul>
    //     </Col>
    //     <Col sm={4}>
    //       <ul>
    //         <li className="text-blu whyTxt">
    //         You know how to refine the checkout experience and identify opportunities for continuous improvement and performance optimizations
    //         </li>
    //       </ul>
    //     </Col>

    //     <Col sm={4}>
    //       <ul>
    //         <li className="text-blu whyTxt">
    //         You excel in an Agile and collaborative environment, where your insights and expertise will help create technical solutions loved by our fans.
    //         </li>
    //       </ul>
    //     </Col>
    //   </Row>
    // </Container>
  );
};

export default CrunchyRollComponent;
