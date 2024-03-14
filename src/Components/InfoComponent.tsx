import React from "react";
import { Container, Col, Row } from "react-bootstrap";
import "./Pages/Page.css";

const InfoComponent = (props: {
  jobLink: string;
  job: string;
  hq: string;
  why: string;
  benefits: string[];
  requirements: string[];
}) => {
  return (
    <div>
      <Container>
        <div className="box">
          <h2 className="angkor boxTxt  noPad">
            <a target="_blank" className="textDark" href={props.jobLink}>
              {props.job}
            </a>
          </h2>
        </div>

        <Row>
          <Col>
            <img className="sideBox imgBorder" src={props.hq} />
          </Col>
          <Col>
            <div className="whyBox">
              <h2 className="angkor boxTxt textDark noPad">WHY</h2>
            </div>
            <p className="text-light whyTxt">{props.why}</p>
          </Col>
        </Row>

        <div className="benefitsBox">
          <h2 className="angkor boxTxt textDark noPad">Requirements</h2>
        </div>

        <Row>
          {props.requirements.map((txt, i) => (
            <Col key={"requirement" + i} sm={4}>
              <ul>
                <li className="text-light whyTxt">{txt}</li>
              </ul>
            </Col>
          ))}
        </Row>

        <div className="benefitsBox">
          <h2 className="angkor boxTxt textDark noPad">Benefits</h2>
        </div>

        <Row>
          {props.benefits.map((txt, i) => (
            <Col key={"benefit" + i} sm={4}>
              <ul>
                <li className="text-light whyTxt">{txt}</li>
              </ul>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default InfoComponent;
