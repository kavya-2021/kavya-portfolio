import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import kavyaPic from "../../Assets/kavya.png";
import Particle from "../Particle";
import Type from "./Type";

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
                <p style={{paddingTop:40, textAlign: "justify" }}> I enjoy creating things that live on the internet. My interest in web development started recently but I'm totally in love with the process of learning. I decided to start my professional career in this field. </p>
              </div>
            </Col>

            <Col md={5} style={{ paddingBottom: 20 }}>
              <img  src={kavyaPic} alt="home pic" className="img-fluid" />
            </Col>
          </Row>
        </Container>      
      </Container>  

    </section>
  );
}

export default Home;
