import React from "react";
import { Card, Button, Row, Col, Container } from "react-bootstrap";
import Discord from "./Assets/Discord-Symbol.png";
import Figma from "./Assets/figma.jpg";
import Github from "./Assets/github.png";
import Nike from "./Assets/Nike.jpg";
import OpenAI from "./Assets/OpenAi.jpg";
import "./Page.css";
import { useNavigate } from "react-router-dom";

const HomePageComponent = () => {
  
  const navigate = useNavigate();

  const handleCrunchy = () => {
    navigate('/discord');
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
        <Card className="flexRow" style={{ width: "100%", height: "11rem" }}>
          <Card.Img className="homeImgs" variant="top" src={Nike} alt='Image Representing Nike' />
          <Card.Body className="cBody text-light">
            <Card.Title className="text-blu angkor company">NIKE</Card.Title>
            <Card.Text className="w-100">
              I'm interested in becoming a software engineer for Nike!
            </Card.Text>
            <Button onClick={handleNike} className="textDark" variant="light">Learn why</Button>
          </Card.Body>
        </Card>
      </div>

      <div className="d-flex justify-content-center cardDiv">
        <Card className="flexRow" style={{ width: "100%", height: "11rem" }}>
          <Card.Img className="homeImgs" variant="top" src={OpenAI} alt='Image Representing OpenAI'/>
          <Card.Body className="cBody text-light">
            <Card.Title className="text-blu angkor company">Open AI</Card.Title>
            <Card.Text className="w-100">
            I'm also thinking about becoming a software engineer for Open AI!
            </Card.Text>
            <Button onClick={handleOpenAI} className="textDark" variant="light">Learn why</Button>
          </Card.Body>
        </Card>
      </div>
      
      <div className="d-flex justify-content-center cardDiv">
        <Card className="flexRow" style={{ width: "100%", height: "11rem" }}>
          <Card.Img className="homeImgs" variant="top" src={Github} alt='Image Representing Github'/>
          <Card.Body className="cBody text-light">
            <Card.Title className="text-blu angkor company">GitHub</Card.Title>
            <Card.Text className="w-100">
              Software Engineer for GitHub? I would love to do that
            </Card.Text>
            <Button onClick={handleGitHub} className="textDark" variant="light">Learn why</Button>
          </Card.Body>
        </Card>
      </div>

      <div className="d-flex justify-content-center cardDiv">
        <Card className="flexRow" style={{ width: "100%", height: "11rem" }}>
          <Card.Img className="homeImgs" variant="top" src={Discord} alt='Image Representing Discord'/>
          <Card.Body className="cBody text-light">
            <Card.Title className="text-blu angkor company">Discord</Card.Title>
            <Card.Text className="w-100">
              I would love for Discord to hire me on as a software engineer.
            </Card.Text>
            <Button onClick={handleCrunchy} className="textDark" variant="light">Learn why</Button>
          </Card.Body>
        </Card>
      </div>

     

      

       <div className="d-flex justify-content-center cardDiv">
        <Card className="flexRow" style={{ width: "100%", height: "11rem" }}>
          <Card.Img className="homeImgs" variant="top" src={Figma} alt='Image Representing Figma'/>
          <Card.Body className="cBody text-light">
            <Card.Title className="text-blu angkor company">Figma</Card.Title>
            <Card.Text className="w-100">
              Becoming a software engineer for Figma intrigues me
            </Card.Text>
            <Button onClick={handleFigma} className="textDark" variant="light">Learn why</Button>
          </Card.Body>
        </Card>
      </div>
      
    </Container>
  );
};

export default HomePageComponent;
