import React from "react";
import { Col, Row } from "react-bootstrap";
import { CgCPlusPlus } from "react-icons/cg";
import {
  DiJava,
  DiReact,
  DiNodejs,
  DiMongodb,
  DiPython,
  DiGit,
  DiIntellij,
  DiRust,
} from "react-icons/di";
import {
  SiPytorch,
  SiFirebase,
  SiNextdotjs,
  SiAngular,
  SiNumpy,
  SiScikitlearn,
  SiKeras,
  SiTensorflow
} from "react-icons/si";
import{AiFillDatabase}from "react-icons/ai"
function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <DiPython />
      </Col>

      <Col xs={4} md={2} className="tech-icons">
              <SiTensorflow />
            </Col>
             <Col xs={4} md={2} className="tech-icons">
                    <SiScikitlearn />
                  </Col>
                  <Col xs={4} md={2} className="tech-icons">
                    <SiPytorch />
                  </Col>
                   <Col xs={4} md={2} className="tech-icons">
                          <SiNumpy />
                        </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiJava />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiAngular />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiReact />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiMongodb />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
              <AiFillDatabase />
            </Col>

      <Col xs={4} md={2} className="tech-icons">
        <SiKeras />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiFirebase />
      </Col>

    </Row>
  );
}

export default Techstack;
