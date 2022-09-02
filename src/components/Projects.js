import Carousel from "react-multi-carousel";
import { Col, Container, Row } from "react-bootstrap";
import proj1 from "../assets/img/proj1.svg";
import proj2 from "../assets/img/proj2.svg";
import proj3 from "../assets/img/proj3.svg";
import proj4 from "../assets/img/proj4.svg";
import proj5 from "../assets/img/proj5.svg";
import proj6 from "../assets/img/proj6.svg";

export const Projects = () => {
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
  const projects = [
    {
      title: "Spark Tweet Analyzer",
      description:
        "Spark-powered Python application that analyzes sentiments of live Twitter posts using machine learning. Data is indexed using ElasticSearch and visualized using Kibana.",
      imgUrl: proj1,
      projUrl: "https://github.com/AbedMir31/SparkTweetAnalyzer",
    },
    {
      title: "Stock Market Prediction Bot",
      description:
        "Recurrent Neural Network that can predict stock prices based on previous market data. Implements ML algorithms from scratch.",
      imgUrl: proj2,
      projUrl: "https://github.com/AbedMir31/StockMarketRNN",
    },
    {
      title: "Pterodactyl.io Instance",
      description:
        "VPS-powered container managment app using open-source frontend Pterodactyl.io. Runs on Nginx, Redis, MySQL, and Docker.",
      imgUrl: proj3,
      projUrl: "https://pterodactyl.io/",
    },
    {
      title: "Mo' Melons",
      description:
        "Minecraft Java Mod that adds more Melons to the game, such as honeydew and cantaloupe.",
      imgUrl: proj4,
      projUrl: "https://github.com/AbedMir31/MoMelons",
    },
    {
      title: "Android Mobile Calendar App",
      description:
        "Fully-functioning calendar app in Kotlin that supports events, multiple users and saving to local storage.",
      imgUrl: proj5,
      projUrl: "https://github.com/buntalan/3354-CodeKidz",
    },
    {
      title: "IMDBot",
      description:
        "Python-based Twitter dev app that responds to tweets providing accurate movie information from the Imdb website.",
      imgUrl: proj6,
      projUrl: "https://github.com/AbedMir31/IMDBot",
    },
  ];

  return (
    <section className="skill" id="projects">
      <Container>
        <Row>
          <Col>
            <div className="proj-bx">
              <h2>Projects</h2>
              <Carousel responsive={responsive} infinite={true}>
                {projects.map((project, index) => {
                  return (
                    <div key={index}>
                      <div>
                        <a
                          className="proj-link"
                          href={project.projUrl}
                          target="_blank"
                          rel="noreferrer"
                        >
                          <img
                            className="proj-img"
                            src={project.imgUrl}
                            alt={`Proj${index}`}
                          ></img>
                        </a>
                      </div>
                      <h5 className="proj-title">{project.title}</h5>
                      <span className="proj-desc">{project.description}</span>
                    </div>
                  );
                })}
              </Carousel>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
