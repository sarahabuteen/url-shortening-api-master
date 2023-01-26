import React, { Component } from "react";
import { Row, Col } from "reactstrap";
import { CopyToClipboard } from "react-copy-to-clipboard";

export default class LinksList extends Component {
  state = {
    isCopied: [],
  };

  /**
   *
   * Copy for clicked button only
   *
   */
  copyToClipboard = code => {
    let copyPressed = this.state.isCopied;
    copyPressed[code] = copyPressed[code] ? false : true;
    this.setState({ isCopied: copyPressed });
  };

  render() {
    return (
      <section className="urls-section">
        <Row>
          <Col md={12}>
            <ul className="list-unstyled urls-list">
              {this.props.links.map(link => {
                return (
                  <li
                    className="url-box d-flex align-items-center"
                    key={link.code}
                  >
                    <Row className="w-100 mx-auto">
                      <Col md={6} className="d-flex align-items-center">
                        <h6 className="mb-0 small">{link.original_link}</h6>
                      </Col>
                      <Col
                        md={4}
                        className="d-flex align-items-center justify-content-end"
                      >
                        <h6 className="cyan-text mb-0">
                          {link.short_link}
                        </h6>
                      </Col>
                      <Col md={2} className="d-flex align-items-center">
                        {this.state.isCopied[link.code] ? (
                          <button className="btn btn-sm btn-violet w-100">
                            Copied!
                          </button>
                        ) : (
                          <CopyToClipboard
                            text={`${link.short_link}`}
                            onCopy={() => this.copyToClipboard(link.code)}
                          >
                            <button className="btn btn-sm btn-cyan w-100">
                              Copy
                            </button>
                          </CopyToClipboard>
                        )}
                      </Col>
                    </Row>
                  </li>
                );
              })}
            </ul>
          </Col>
        </Row>
      </section>
    );
  }
}
