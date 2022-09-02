import { Col, Container, Row } from "react-bootstrap";
import logo from "../assets/img/logo2.svg";
import socIcon1 from "../assets/img/soc-icon-1.svg";
import socIcon2 from "../assets/img/soc-icon-2.svg";
import resume from "../assets/img/resume.svg";
export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="footer-bx">
          <Col xs={4} className="text-center">
            <a href="#home">
              <img className="footer-logo" src={logo} alt="logo"></img>
            </a>
            <p>Go to Top</p>
          </Col>
          <Col xs={4} className="text-center">
            <div className="social-icon">
              <a
                href="https://www.linkedin.com/in/abedmmir/"
                target="_blank"
                rel="noreferrer"
              >
                <img src={socIcon1} alt="LinkedinIcon"></img>
              </a>
              <a href="https://github.com/AbedMir31">
                <img
                  src={socIcon2}
                  alt="GithubIcon"
                  target="_blank"
                  rel="noopener noreferrer"
                ></img>
              </a>
            </div>
            <p>
              <a
                style={{ color: "white" }}
                href="https://www.freepik.com/free-vector/flat-design-abstract-background_18773920.htm#page=2&query=abstract%20background&position=48&from_view=search"
              >
                Background
              </a>
              <br></br>
              <a style={{ color: "white" }} href="https://icons8.com/">
                Icons
              </a>
            </p>
          </Col>
          <Col xs={4} className="text-center">
            <a
              href="https://github.com/AbedMir31/Resume/blob/main/Abed-Mir-Resume2022.pdf"
              target="_blank"
              rel="noreferrer"
            >
              <img className="resume" src={resume} alt="resume"></img>
            </a>
            <p>View Resume</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};
