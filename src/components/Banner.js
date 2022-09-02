import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { ArrowRightCircle } from "react-bootstrap-icons";
import headerImg from "../assets/img/header-img.svg";

export const Banner = () => {
  const [fadeProp, setFadeProp] = useState({ fade: "fade-in" });
  const [fadeTextIndex, setFadeTextIndex] = useState(0);
  const fadeText = [
    "Full-Stack Developer",
    "Eagle Scout",
    "Certified Professional",
    "Software Engineer",
  ];
  const [text, setText] = useState(fadeText.slice(-1));
  const interval = 4000;

  useEffect(() => {
    const timeout = setInterval(() => {
      if (fadeProp.fade === "fade-in") {
        setFadeProp({
          fade: "fade-out",
        });
      } else {
        setFadeProp({
          fade: "fade-in",
        });
        setFadeTextIndex(prevIndex => prevIndex + 1);
        setText(fadeText[fadeTextIndex % fadeText.length]);
      }
    }, interval);
    return () => clearInterval(timeout);
  });

  return (
    <section className="banner" id="home">
      <Container>
        <Row className="align-items-center">
          <Col xs={12} md={6} xl={7}>
            <span className="tagline">Welcome to my Portfolio</span>
            <h1>
              {`Hi, I'm Abed Mir`}
              <br />
              <span className={fadeProp.fade}>{text}</span>
              <button
                onClick={() =>
                  window.open(
                    "https://www.linkedin.com/signup/public-profile-join?vieweeVanityName=abedmmir&trk=public_profile-settings_top-card-primary-button-join-to-connect"
                  )
                }
              >
                Let's connect <ArrowRightCircle size={25}></ArrowRightCircle>
              </button>
            </h1>
          </Col>
          <Col xs={12} md={6} xl={5}>
            <img src={headerImg} alt="Header"></img>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
