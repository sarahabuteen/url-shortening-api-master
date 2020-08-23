import React, { Component } from "react";
import { Container, Row, Col, Input } from "reactstrap";

import illustration from "../assets/images/illustration-working.svg";
import brandRecognition from "../assets/images/icon-brand-recognition.svg";
import detailedRecords from "../assets/images/icon-detailed-records.svg";
import fullyCustomizable from "../assets/images/icon-fully-customizable.svg";
export default class Home extends Component {
  render() {
    return (
      <React.Fragment>
        <section className="hero-section">
          <Container>
            <Row className="d-flex align-items-center">
              <Col md={6} className="order-md-1 order-2">
                <h1 className="dark-blue-text">More than just shorter links</h1>
                <p className="grayish-violet-text">
                  Build your brand's recognition and get detailed insights on
                  how your links are performing.
                </p>
                <button className="btn btn-cyan">Get Started</button>
              </Col>
              <Col md={6} className="order-md-2 order-1">
                <img src={illustration} alt="illustration" className="ml-5" />
              </Col>
            </Row>
          </Container>
        </section>

        <section className="statistics-section">
          <Container>
            <section className="shorten-section d-flex flex-column justify-content-center">
              <Row className="w-100">
                <Col md={9}>
                  <Input
                    placeholder="Shorten a link here..."
                    className="input-error"
                  />
                </Col>
                <Col md={3}>
                  <button className="btn btn-cyan">Shorten It!</button>
                </Col>
              </Row>
              <Row>
                <Col md={12}>
                  <small className="red-text">Please add a link</small>
                </Col>
              </Row>
            </section>
          </Container>
          <Container>
            {/* <section className="urls-section">
              <Row>
                <Col md={12}>
                  <ul className="list-unstyled urls-list">
                    <li className="url-box d-flex align-items-center">
                      <Row className="w-100 mx-auto">
                        <Col md={6} className="d-flex align-items-center">
                          <h6 className="mb-0">http://localhost:3000/</h6>
                        </Col>
                        <Col
                          md={6}
                          className="d-flex align-items-center justify-content-end"
                        >
                          <h6 className="cyan-text mb-0">
                            http://localhost:3000/
                          </h6>
                          <button className="btn btn-sm btn-cyan">Copy</button>
                        </Col>
                      </Row>
                    </li>
                    <li className="url-box d-flex align-items-center">
                      <Row className="w-100 mx-auto">
                        <Col md={6} className="d-flex align-items-center">
                          <h6 className="mb-0">http://localhost:3000/</h6>
                        </Col>
                        <Col
                          md={6}
                          className="d-flex align-items-center justify-content-end"
                        >
                          <h6 className="cyan-text mb-0">
                            http://localhost:3000/
                          </h6>
                          <button className="btn btn-sm btn-violet">
                            Copied!
                          </button>
                        </Col>
                      </Row>
                    </li>
                  </ul>
                </Col>
              </Row>
            </section> */}
            <Row>
              <Col md={12} className="d-flex flex-column align-items-center">
                <h2 className="dark-blue-text">Advanced Statistics</h2>
                <p className="grayish-violet-text subtitle">
                  Track how your links are performing across the web with our
                  advanced statistics dashboard.
                </p>
              </Col>
            </Row>
            <Row>
              <Col md={4}>
                <div className="statistics-box">
                  <div className="icon">
                    <img src={brandRecognition} alt="brand recognition" />
                  </div>
                  <h4 className="dark-blue-text">Brand Recognition</h4>
                  <p className="grayish-violet-text">
                    Check your brand recognition with each click. Generic links
                    don't mean a thing. Branded links help instil confidence in
                    your content.
                  </p>
                </div>
              </Col>
              <Col md={4}>
                <div className="statistics-box middle">
                  <div className="icon">
                    <img src={detailedRecords} alt="detailed records" />
                  </div>
                  <h4 className="dark-blue-text">Detailed Records</h4>
                  <p className="grayish-violet-text">
                    Gain insights into who is clicking your links. Knowing when
                    and where people engage with your content helps inform
                    better descisions.
                  </p>
                </div>
              </Col>
              <Col md={4}>
                <div className="statistics-box last">
                  <div className="icon">
                    <img src={fullyCustomizable} alt="fully customizable" />
                  </div>
                  <h4 className="dark-blue-text">Fully Customizable</h4>
                  <p className="grayish-violet-text">
                    Improve brand awareness and content discoverability through
                    customizable links, supercharging audience engagement.
                  </p>
                </div>
              </Col>
            </Row>
          </Container>
        </section>

        <section className="boost-section d-flex align-items-center justify-content-center">
          <Container>
            <Row>
              <Col md={12} className="d-flex flex-column align-items-center">
                <h2 className="text-white">Boost your links today</h2>
                <button className="btn btn-cyan">Get Started</button>
              </Col>
            </Row>
          </Container>
        </section>
      </React.Fragment>
    );
  }
}
