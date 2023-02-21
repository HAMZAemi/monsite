import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiLinux,
  SiVisualstudiocode,
  SiPostman,
  SiHeroku,
  SiVercel,
  SiOracle,
SiMysql,
SiAnaconda,
SiAndroidstudio,
SiPowerbi,
SiMicrosoftsqlserver,
SiRstudio

} from "react-icons/si";
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
function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <SiLinux />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiAnaconda />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
              <SiAndroidstudio />
            </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiMysql />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiOracle />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiIntellij />
      </Col>

       <Col xs={4} md={2} className="tech-icons">
              <SiPowerbi />
            </Col> <Col xs={4} md={2} className="tech-icons">
                          <SiMicrosoftsqlserver />
                        </Col> <Col xs={4} md={2} className="tech-icons">
                                      <SiRstudio />
                                    </Col>
    </Row>
  );
}

export default Toolstack;
