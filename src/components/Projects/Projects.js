import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";

import purplleBack from "../../Assets/Projects/purplleBack.jpeg";
import purplleFront from "../../Assets/Projects/purplleFront.jpeg";
import desertCart from "../../Assets/Projects/desertCart.jpeg";
import suicide from "../../Assets/Projects/suicide.png";
import bitsOfCode from "../../Assets/Projects/blog.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={purplleBack}
              isBlog={false}
              title="Purplle - using Express.js"
              description="An e-commerce website for purchasing fashion and skincare products. Features unique to this website are , it has a very Dynamic Home page, Advanced filtering options. Skin Type testing and suggestions related to products based on test results.Is has a very vibrant wishlist page and wide range of products. Navigation to required products can be found"
              link="https://github.com/kavya-2021/Purplle_Replica"
              // link="https://purplle--clone.herokuapp.com/"
            />
          </Col>
           <Col md={4} className="project-card">
            <ProjectCard
              imgPath={desertCart}
              isBlog={false}
              title="Desert Cart Clone"
              description= "An e-commerce website for purchasing and importing products available for import from different countries.Products can be shipped to 163+ countries Wide variety of products. There are filters that can filter products depending on importing country and delivery time. This model was able to achieve most of the features that are similiar to reference website"
              link="https://github.com/kavya-2021/DesertCart_Clone"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={purplleFront}
              isBlog={false}
              title="Purplle - using HTML"
              description="An e-commerce website for purchasing fashion and skincare products. Features unique to this website are , it has a very Dynamic Home page, Advanced filtering options. Skin Type testing and suggestions related to products based on test results.Is has a very vibrant wishlist page and wide range of products. Navigation to required products can be found"
              link="https://github.com/mayuriwasu1/purplle_clone"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
