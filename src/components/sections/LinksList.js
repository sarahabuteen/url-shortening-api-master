import React, { Component } from "react";
import { Row, Col } from "reactstrap";
import { CopyToClipboard } from "react-copy-to-clipboard";

export default class LinksList extends Component {
  state = {
    isCopied: [],
    selectedHash: null
  };

  /**
   *
   * Open link in new tab
   *
   */
  openLink = url => {
    window.open(url, "_blank");
  };

  /**
   *
   * Copy for clicked button only
   *
   */
  copyToClipboard = hashid => {
    let copyPressed = this.state.isCopied;
    copyPressed[hashid] = copyPressed[hashid] ? false : true;
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
                    key={link.hashid}
                  >
                    <Row className="w-100 mx-auto">
                      <Col md={6} className="d-flex align-items-center">
                        <h6 className="mb-0">{link.url}</h6>
                      </Col>
                      <Col
                        md={4}
                        className="d-flex align-items-center justify-content-end"
                      >
                        <h6
                          className="cyan-text mb-0 clickable"
                          onClick={() =>
                            this.openLink(`https://rel.ink/${link.hashid}`)
                          }
                        >
                          https://rel.ink/{link.hashid}
                        </h6>
                      </Col>
                      <Col md={2} className="d-flex align-items-center">
                        {this.state.isCopied[link.hashid] ? (
                          <button className="btn btn-sm btn-violet w-100">
                            Copied!
                          </button>
                        ) : (
                          <CopyToClipboard
                            text={`https://rel.ink/${link.hashid}`}
                            onCopy={() => this.copyToClipboard(link.hashid)}
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
