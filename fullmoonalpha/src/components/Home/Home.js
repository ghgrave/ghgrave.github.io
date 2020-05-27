import React from "react";
import { Container, Row, Col } from "reactstrap";
import './Home.css'

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

  </Container>
    // <header class="row" id="home_header">
    //   <h1 class="col-lg-8">
    //     full moon <a href="index.html">alpha</a>
    //   </h1>
    //   <div class="col-lg-3 offest-lg-1" id="moon_container">
    //     <img
    //       src="./assets/images/full_moon.png"
    //       id="moon_image"
    //       alt="full moon"
    //     />
    //   </div>
    // </header>
  );
}

export default Home;
