import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
            As a data scientist, I am a master of extracting insights and meaning from complex data sets.
             I think… 🤷‍♂️
              <br />
              <br /> My advanced skills in statistical analysis,

              <i>
                <b className="purple"> machine learning,Deep Learning and Natural Launguage Processing. </b>
              </i>
              <br />
              <br />
              enable me to develop sophisticated algorithms and models that provide valuable insights and predictions. I have a passion for exploring data and uncovering hidden patterns that others may not see, which enables me to make informed decisions based on the data. &nbsp;
              <i>
                <b className="purple"> </b>With my expertise in data visualization, I can present the data in a way that is easy to understand, allowing stakeholders to make informed decisions quickly. {" "}
                <b className="purple">
                      </b>
              </i>
              <br />
              <br />

             In short,I am a <b className="purple">data scientist</b> who thrives on solving complex problems and making sense of data in a way that drives business success.{" "}

              <i>
                <b className="purple">

                </b>
              </i>
              &nbsp;

            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/HAMZAemi"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>

              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/elkhadri/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/hamza_el_khadri/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillInstagram />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
