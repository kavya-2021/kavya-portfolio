import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { BiLinkExternal } from "react-icons/bi";

function ProjectCards(props) {
  return (
    <Card className="project-card-view">
      <Card.Img variant="top" src={props.imgPath} alt="card-img" />
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text style={{ textAlign: "justify" }}>
          {props.description}
        </Card.Text>
        <span>
        <Button variant="primary" href={props.link} target="_blank">
          {/* <BiLinkExternal /> &nbsp; */}
          {props.isBlog ? "View Blog" : "GitHub"}
        </Button>
        &nbsp; &nbsp;
        <Button variant="primary" href={props.links} target="_blank">
          {/* <BiLinkExternal /> &nbsp; */}
          {props.isDeploy ? "Website" : "GitHub"}
        </Button>
        &nbsp; &nbsp;
        <Button variant="primary" href={props.blog} target="_blank">
          {/* <BiLinkExternal /> &nbsp; */}
          {props.isAblog ? "Blog" : "GitHub"}
        </Button>
        </span>
      </Card.Body>
    </Card>
  );
}
export default ProjectCards;
