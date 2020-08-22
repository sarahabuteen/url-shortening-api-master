import React, { Component } from "react";
import { Container, Row, Col } from "reactstrap";

import logo from "../../assets/images/logo-white.svg";
import facebook from "../../assets/images/icon-facebook.svg";
import twitter from "../../assets/images/icon-twitter.svg";
import pinterest from "../../assets/images/icon-pinterest.svg";
import instagram from "../../assets/images/icon-instagram.svg";

export default class Footer extends Component {
  render() {
    return (
      <section className="footer">
        <Container>
          <Row className="d-flex align-items-start">
            <Col md={4}>
              <img src={logo} alt="logo" className="logo" />
            </Col>
            <Col md={2}>
              <h6 className="text-white mb-0">Features</h6>
              <ul className="list-unstyled mb-0 mt-3 footer-list">
                <li className="grayish-violet-text mb-2">Link Shortening</li>
                <li className="grayish-violet-text mb-2">Branded Links</li>
                <li className="grayish-violet-text">Analytics</li>
              </ul>
            </Col>
            <Col md={2}>
              <h6 className="text-white mb-0">Resources</h6>
              <ul className="list-unstyled mb-0 mt-3 footer-list">
                <li className="grayish-violet-text mb-2">Blog</li>
                <li className="grayish-violet-text mb-2">Developers</li>
                <li className="grayish-violet-text">Support</li>
              </ul>
            </Col>
            <Col md={2}>
              <h6 className="text-white mb-0">Company</h6>
              <ul className="list-unstyled mb-0 mt-3 footer-list">
                <li className="grayish-violet-text mb-2">About</li>
                <li className="grayish-violet-text mb-2">Our team</li>
                <li className="grayish-violet-text mb-2">Careers</li>
                <li className="grayish-violet-text">Contact</li>
              </ul>
            </Col>
            <Col md={2}>
              <ul className="list-unstyled list-inline mb-0 w-100 d-inline-flex justify-content-around social-links">
                <li className="list-inline-item">
                  <img src={facebook} alt="facebook" />
                </li>
                <li className="list-inline-item">
                  <img src={twitter} alt="twitter" />
                </li>
                <li className="list-inline-item">
                  <img src={pinterest} alt="pinterest" />
                </li>
                <li className="list-inline-item">
                  <img src={instagram} alt="instagram" />
                </li>
              </ul>
            </Col>
          </Row>
        </Container>
      </section>
    );
  }
}
