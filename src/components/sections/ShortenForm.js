import React, { Component } from "react";
import { Row, Col, Input } from "reactstrap";
import ClockLoader from "react-spinners/ClockLoader";
import axios from "axios";

export default class ShortenForm extends Component {
  state = { link: "", inputError: false, loading: false, disabled: false };

  /**
   *
   * Checking if links exists in array or not to avoid duplicates
   *
   */
  checkLinkAvailability = link => {
    return this.props.links.some(l => l.url === link);
  };

  /**
   *
   * Shorten url and submit form on success
   *
   */
  shortenUrl = link => {
    this.setState({ loading: true, disabled: true });
    axios
      .post("https://api.shrtco.de/v2/shorten",    
      {},
      {
        params: {
          url: link,
        }
      })
      .then(response => {
        this.setState({ loading: false, disabled: false });
        this.props.onFormSubmit(response.data);
      })
      .catch(error => {
        this.setState({ loading: false, disabled: false });
        console.warn(error);
      });
  };

  /**
   *
   * Passing form submit to parent component
   *
   */
  handleSubmit = e => {
    e.preventDefault();
    const link = this.state.link;
    if (link === "") {
      this.setState({ inputError: true });
      return;
    }
    if (
      this.props.links &&
      this.props.links.length > 0 &&
      this.checkLinkAvailability(link)
    ) {
      this.setState({ inputError: true });
      return;
    }
    this.shortenUrl(link);
    this.setState({ link: "", inputError: false });
  };

  render() {
    const { inputError } = this.state;
    return (
      <form onSubmit={this.handleSubmit}>
        <Row>
          <Col md={9}>
            <Input
              name="link"
              type="url"
              placeholder="Shorten a link here..."
              className={inputError ? "input-error" : null}
              value={this.state.link}
              onChange={e =>
                this.setState({ link: e.target.value, inputError: false })
              }
            />
            {inputError && (
              <small className="red-text">Please enter a valid link</small>
            )}
          </Col>
          <Col md={3}>
            <button
              className="btn btn-cyan d-flex justify-content-center align-items-center"
              disabled={this.state.disabled}
            >
              {this.state.loading ? (
                <ClockLoader
                  size={27}
                  color={"#FFFFFF"}
                  loading={this.state.loading}
                />
              ) : (
                "Shorten It!"
              )}
            </button>
          </Col>
        </Row>
      </form>
    );
  }
}
