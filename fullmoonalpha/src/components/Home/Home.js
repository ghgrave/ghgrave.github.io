import React from "react";
import moon from "../../assets/images/full_moon.png";
import { Container, Row, Col } from "reactstrap";
import "./Home.css";

function Home() {
  return (
    <Container fluid={true}>
      <Row id="home_header">
        <Col>
          <h1>
            full moon <a href="index.html">alpha</a>
          </h1>
        </Col>
      </Row>

      <Row id="moon_header">
        <Col lg={{ size: 6, offset: 6 }} md="12" sm="12">
          <div id="moon_container">
            <img src={moon} id="moon_image" alt="full moon" />
          </div>
        </Col>
      </Row>
      <Row>
        <footer className="col-lg-3">
        {/* <footer className="col-lg-3 col-sm-12 col-xs-12 text-center"> */}
          <p id="copyright">&copy;gHgraveDesigns 2020</p>
        </footer>
      </Row>
    </Container>
  );
}

export default Home;
