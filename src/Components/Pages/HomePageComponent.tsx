import React from "react";
import { Card, Button, Row, Col, Container } from "react-bootstrap";
import Crunchy from "./Assets/CrunchyRollImg.png";
import Figma from "./Assets/figma.jpg";
import Github from "./Assets/github.png";
import Nike from "./Assets/Nike.jpg";
import OpenAI from "./Assets/OpenAi.jpg";
import "./Page.css";
import { useNavigate } from "react-router-dom";

const HomePageComponent = () => {
  
  const navigate = useNavigate();

  const handleCrunchy = () => {
    navigate('/crunchyroll');
  }

  const handleNike = () => {
    navigate('/nike');
  }

  const handleGitHub = () => {
    navigate('/github');
  }

  const handleOpenAI = () => {
    navigate('/openai');
  }

  const handleFigma = () => {
    navigate('/figma');
  }

  return (
    <Container>

      <p className="absolute firstTxt text-blu angkor">TOP 5 JOBS</p>
      
      <div className="d-flex justify-content-center cardDiv">
        <Card className="flexRow" style={{ width: "100%", height: "10rem" }}>
          <Card.Img className="homeImgs" variant="top" src={Nike} />
          <Card.Body className="cBody text-light">
            <Card.Title className="text-blu">NIKE</Card.Title>
            <Card.Text className="w-100">
              I'm interested in becoming a software engineer for Nike!
            </Card.Text>
            <Button onClick={handleNike} className="textDark" variant="light">Learn why</Button>
          </Card.Body>
        </Card>
      </div>

      <div className="d-flex justify-content-center cardDiv">
        <Card className="flexRow" style={{ width: "100%", height: "10rem" }}>
          <Card.Img className="homeImgs" variant="top" src={OpenAI} />
          <Card.Body className="cBody text-light">
            <Card.Title>Open AI</Card.Title>
            <Card.Text className="w-100">
            I'm also thinking about becoming a software engineer for Open AI!
            </Card.Text>
            <Button onClick={handleOpenAI} className="textDark" variant="light">Learn why</Button>
          </Card.Body>
        </Card>
      </div>
      

      <div className="d-flex justify-content-center cardDiv">
        <Card className="flexRow" style={{ width: "100%", height: "10rem" }}>
          <Card.Img className="homeImgs" variant="top" src={Figma} />
          <Card.Body className="cBody text-light">
            <Card.Title>Figma</Card.Title>
            <Card.Text className="w-100">
              Becoming a software engineer for Figma intrigues me
            </Card.Text>
            <Button onClick={handleFigma} className="textDark" variant="light">Learn why</Button>
          </Card.Body>
        </Card>
      </div>

      <div className="d-flex justify-content-center cardDiv">
        <Card className="flexRow" style={{ width: "100%", height: "10rem" }}>
          <Card.Img className="homeImgs" variant="top" src={Github} />
          <Card.Body className="cBody text-light">
            <Card.Title>GitHub</Card.Title>
            <Card.Text className="w-100">
              Software Engineer for GitHub? I would love to do that
            </Card.Text>
            <Button onClick={handleGitHub} className="textDark" variant="light">Learn why</Button>
          </Card.Body>
        </Card>
      </div>

      <div className="d-flex justify-content-center cardDiv">
        <Card className="flexRow" style={{ width: "100%", height: "10rem" }}>
          <Card.Img className="homeImgs" variant="top" src={Crunchy} />
          <Card.Body className="cBody text-light">
            <Card.Title>Crunchy Roll</Card.Title>
            <Card.Text className="w-100">
              I would love for Crunchy Roll to hire me on as a software engineer.
            </Card.Text>
            <Button onClick={handleCrunchy} className="textDark" variant="light">Learn why</Button>
          </Card.Body>
        </Card>
      </div>

      
    </Container>
  );
};

export default HomePageComponent;
