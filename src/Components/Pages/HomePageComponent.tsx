import React from "react";
import { Card, Button, Row, Col, Container } from "react-bootstrap";
import Crunchy from "./Assets/CrunchyRollImg.png";
import Figma from "./Assets/figma.jpg";
import Github from "./Assets/github.png";
import Nike from "./Assets/Nike.jpg";
import OpenAI from "./Assets/OpenAi.jpg";
import "./Page.css";

const HomePageComponent = () => {
  return (
    <Container>

      <p className="absolute firstTxt text-blu">Top 5 Jobs</p>
      <p className="absolute secondTxt text-blu">Top 5 Jobs</p>
      
      <div className="d-flex justify-content-center cardDiv">
        <Card className="flexRow" style={{ width: "100%", height: "10rem" }}>
          <Card.Img className="homeImgs" variant="top" src={Nike} />
          <Card.Body className="cBody text-light">
            <Card.Title>Card Title</Card.Title>
            <Card.Text className="w-100">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
            <Button variant="primary">Go somewhere</Button>
          </Card.Body>
        </Card>
      </div>

      <div className="d-flex justify-content-center cardDiv">
        <Card className="flexRow" style={{ width: "100%", height: "10rem" }}>
          <Card.Img className="homeImgs" variant="top" src={OpenAI} />
          <Card.Body className="cBody text-light">
            <Card.Title>Card Title</Card.Title>
            <Card.Text className="w-100">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
            <Button variant="primary">Go somewhere</Button>
          </Card.Body>
        </Card>
      </div>
      

      <div className="d-flex justify-content-center cardDiv">
        <Card className="flexRow" style={{ width: "100%", height: "10rem" }}>
          <Card.Img className="homeImgs" variant="top" src={Figma} />
          <Card.Body className="cBody text-light">
            <Card.Title>Card Title</Card.Title>
            <Card.Text className="w-100">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
            <Button variant="primary">Go somewhere</Button>
          </Card.Body>
        </Card>
      </div>

      <div className="d-flex justify-content-center cardDiv">
        <Card className="flexRow" style={{ width: "100%", height: "10rem" }}>
          <Card.Img className="homeImgs" variant="top" src={Github} />
          <Card.Body className="cBody text-light">
            <Card.Title>Card Title</Card.Title>
            <Card.Text className="w-100">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
            <Button variant="primary">Go somewhere</Button>
          </Card.Body>
        </Card>
      </div>

      <div className="d-flex justify-content-center cardDiv">
        <Card className="flexRow" style={{ width: "100%", height: "10rem" }}>
          <Card.Img className="homeImgs" variant="top" src={Crunchy} />
          <Card.Body className="cBody text-light">
            <Card.Title>Card Title</Card.Title>
            <Card.Text className="w-100">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
            <Button variant="primary">Go somewhere</Button>
          </Card.Body>
        </Card>
      </div>

      
    </Container>
  );
};

export default HomePageComponent;
