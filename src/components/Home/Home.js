import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import homeLogo from "../../Assets/home-main.svg";
import kavyaPic from "../../Assets/kavya-.png";
import AboutForHome from "../About/AboutForHome";
import Particle from "../Particle";
// import Home2 from "./Home2";
import Type from "./Type";
import Github from "../About/Github";
import Techstack from "../About/Techstack";
// import laptopImg from "../";
import Toolstack from "../About/Toolstack";

function Home() {
  return (
    <section>
      <Container fluid className="home-section" id="home">
        <Particle />
        <Container className="home-content">
          <Row>
            <Col md={7} className="home-header">
              <h1 style={{ paddingBottom: 15 }} className="heading">
                Hi There! <span className="wave" role="img" aria-labelledby="wave">👋🏻</span>
              </h1>

              <h1 className="heading-name">
                I'm
                <strong className="main-name"> Vankadara Lakshmi Kavya</strong>
              </h1>

              <div style={{ padding: 50,paddingLeft: 50,PaddingBottom:0, textAlign: "left" }}>
                <Type />
                <p style={{paddingTop:40, textAlign: "justify" }}> I am a Post Graduate specialized in Electrical Power Systems and A Full Stack Web Developer by choice </p>
              </div>
            </Col>

            <Col md={5} style={{ paddingBottom: 20 }}>
              <img  alt="home pic" className="img-fluid" />
            </Col>
          </Row>
        </Container>      
      </Container>  

    </section>
  );
}

export default Home;
