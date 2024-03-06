import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import ebill from '../../Assets/Projects/ebill.png';
import onlinepy from '../../Assets/Projects/onlinepy.png';
import onlinejava from '../../Assets/Projects/onlinejava.png';
import facial from '../../Assets/Projects/facial.png';



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
              imgPath={onlinejava}
              isBlog={false}
              title="JAVA-POWERED-E-VOTING-SYSTEM"
              description="A comprehensive Electronic Voting System meticulously crafted in Java, featuring an intuitive graphical user interface (GUI) powered by Java Swing for user interaction. The system seamlessly integrates with MySQL, serving as a robust backend database, ensuring secure and efficient storage of voting data."
              ghLink="https://github.com/officialmustafaahmedkhan/JAVA-POWERED-E-VOTING-SYSTEM"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={facial}
              isBlog={false}
              title="Facial-Recognition-Attendance-System-Using-AI"
              description="This Project was made for the purpose of taking attendance by face recognition, I used several Python3 libraries to obtain a system to track attendance by face recognition."
              ghLink="https://github.com/officialmustafaahmedkhan/Facial-Recognition-Attendance-System-Using-AI"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={onlinepy}
              isBlog={false}
              title="ONLINE VOTING SYSTEM"
              description="The Online Voting System is developed using Flask, offers a range of robust features. It incorporates a user-friendly chatbot for addressing user queries. User registration and validation are enhanced through the use of OpenCV-based face recognition technology. Once validated, voters can cast their votes and access real-time election statistics."
              ghLink="https://github.com/officialmustafaahmedkhan/ONLINE-VOTING-SYSTEM-USING-FLASK"
            />
          </Col>
{/* 
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={leaf}
              isBlog={false}
              title="Plant AI"
              description="Used the plant disease dataset from Kaggle and trained a image classifer model using 'PyTorch' framework using CNN and Transfer Learning with 38 classes of various plant leaves. The model was successfully able to detect diseased and healthy leaves of 14 unique plants. I was able to achieve an accuracy of 98% by using Resnet34 pretrained model."
              ghLink="https://github.com/soumyajit4419/Plant_AI"
              demoLink="https://plant49-ai.herokuapp.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={suicide}
              isBlog={false}
              title="Ai For Social Good"
              description="Using 'Natural Launguage Processing' for the detection of suicide-related posts and user's suicide ideation in cyberspace  and thus helping in sucide prevention."
              ghLink="https://github.com/soumyajit4419/AI_For_Social_Good"
              // demoLink="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley" <--------Please include a demo link here
            />
          </Col> */}

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={ebill}
              isBlog={false}
              title="JAVA POWERED E-BILLING SYSTEM"
              description="In this project, we are tackling the challenge of making physical bill payments. This system assists users in generating their residential bills by inputting their account numbers.Moreover, it offers the convenience of bill payment through the
              same system, leading to significant time savings."
              ghLink="https://github.com/officialmustafaahmedkhan/JAVA-POWERED-E-BILLING-SYSTEM" 
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
