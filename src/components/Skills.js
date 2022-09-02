import { Col, Container, Row } from "react-bootstrap";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import lang1 from "../assets/img/skill1.svg";
import lang2 from "../assets/img/skill2.svg";
import lang3 from "../assets/img/skill3.svg";
import lang4 from "../assets/img/skill4.svg";
import frwk1 from "../assets/img/vuejs.svg";
import frwk2 from "../assets/img/react.svg";
import frwk3 from "../assets/img/nodejs.svg";
import frwk4 from "../assets/img/spark.svg";
import plat1 from "../assets/img/docker.svg";
import plat2 from "../assets/img/jira.svg";
import plat3 from "../assets/img/git.svg";
import plat4 from "../assets/img/jenkins.svg";
import awscert from "../assets/img/aws-cert.png";
import eaglescout from "../assets/img/eagle-scout.png";
import background from "../assets/img/background.svg";

export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <section className="skill" id="skills">
      <Container>
        <Row>
          <Col>
            <div className="skill-bx">
              <h2>Skills</h2>
              <Carousel
                responsive={responsive}
                infinite={true}
                className="skill-slider"
              >
                <div className="item">
                  <div className="img-grid">
                    <img className="grid-img" src={lang1} alt="Python"></img>
                    <img className="grid-img" src={lang2} alt="Java"></img>
                    <img
                      className="grid-img"
                      src={lang3}
                      alt="JavaScript"
                    ></img>
                    <img className="grid-img" src={lang4} alt="C++"></img>
                  </div>
                  <h5>Languages</h5>
                </div>
                <div className="item">
                  <div className="img-grid">
                    <img className="grid-img" src={frwk1} alt="Vuejs"></img>
                    <img className="grid-img" src={frwk2} alt="React"></img>
                    <img className="grid-img" src={frwk4} alt="Spark"></img>
                    <img className="grid-img" src={frwk3} alt="Nodejs"></img>
                  </div>
                  <h5>Frameworks</h5>
                </div>
                <div className="item">
                  <div className="img-grid">
                    <img className="grid-img" src={plat1} alt="Docker"></img>
                    <img className="grid-img" src={plat3} alt="Git"></img>
                    <img className="grid-img" src={plat4} alt="Jenkins"></img>
                    <img className="grid-img" src={plat2} alt="JIRA"></img>
                  </div>
                  <h5>Tools and Platforms</h5>
                </div>
                <div className="item">
                  <a
                    href="https://www.credly.com/badges/b4ea2790-a54a-4a0f-a4a4-fc840bd33a9d?source=linked_in_profile"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <img
                      style={{ width: 200, height: 200 }}
                      src={awscert}
                      alt="AwsCert"
                    ></img>
                  </a>
                  <h5 className="single-image-text">AWS Certified</h5>
                </div>
                <div className="item">
                  <img
                    style={{ width: 200, height: 200 }}
                    src={eaglescout}
                    alt="EagleScoutLogo"
                  ></img>
                  <h5 className="single-image-text">Eagle Scout</h5>
                </div>
              </Carousel>
            </div>
          </Col>
        </Row>
      </Container>
      <img className="background-image" src={background} alt="background" />
    </section>
  );
};
