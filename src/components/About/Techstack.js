import React from "react";
import { Col, Row } from "react-bootstrap";
import { CgCPlusPlus } from "react-icons/cg";
import {
  DiJavascript,
  DiReact,
  DiNodejs,
  DiMongodb,
  DiHtml5,
  DiCss3,
  DiNpm,
  DiGit
} from "react-icons/di";
import { SiPytorch, SiTensorflow, SiFirebase } from "react-icons/si";

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      {/* <Col xs={4} md={2} className="tech-icons">
        <CgCPlusPlus />
      </Col> */}
      <Col xs={4} md={2} className="tech-icons">
        <DiJavascript />
        <h3>JavaScript</h3> 
      </Col>
      <Col xs={4} md={2} className="tech-icons">
           <DiHtml5 />
           <h3>HTML</h3> 
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiCss3 />
        <h3>CSS</h3> 
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiNodejs />
        <h3>Node.js</h3> 
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiReact />
        <h3>React</h3> 
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiMongodb />
        <h3>MongoDb</h3> 
      </Col>
     
      <Col xs={4} md={2} className="tech-icons">
        <DiNpm />
        <h3>NPM</h3> 
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <DiGit />
        <h3>Git</h3> 
      </Col> 

      {/* <Col xs={4} md={2} className="tech-icons">
        <SiFirebase />
      </Col>   */}
    </Row>
  );
}

export default Techstack;
