import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Footer() {
  let date = new Date();
  let year = date.getFullYear();
  return (
    <Container fluid className="footer">
      <Row>
        <Col md="4" className="footer-copywright">
          <h3>EL KHADRI HAMZA</h3>
        </Col>
        <Col md="4" className="footer-copywright">
          <h3>open to work © {year} </h3>
        </Col>
        <Col md="4" className="footer-body">
          <ul className="footer-icons">
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
  );
}

export default Footer;
