import React, { Component } from "react";
import { Container, Row, Col } from "reactstrap";

import illustration from "../assets/images/illustration-working.svg";

export default class Home extends Component {
  render() {
    return (
      <React.Fragment>
        <section className="hero-section">
          <Container>
            <Row className="d-flex align-items-center">
              <Col md={6}>
                <h1 className="dark-blue-text">More than just shorter links</h1>
                <p className="grayish-violet-text">
                  Build your brand's recognition and get detailed insights on
                  how your links are performing.
                </p>
                <button className="btn btn-cyan">Get Started</button>
              </Col>
              <Col md={6}>
                <img src={illustration} alt="illustration" className="ml-5" />
              </Col>
            </Row>
          </Container>
        </section>
      </React.Fragment>
    );
  }
}
