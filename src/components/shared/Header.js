import React, { useState } from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  NavbarText,
  Container
} from "reactstrap";

import logo from "../../assets/images/logo.svg";

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <Navbar light expand="md">
      <Container>
        <NavbarBrand href="/">
          <img src={logo} alt="logo" />
        </NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem>
              <NavLink>Features</NavLink>
            </NavItem>
            <NavItem>
              <NavLink>Pricing</NavLink>
            </NavItem>
            <NavItem>
              <NavLink>Resources</NavLink>
            </NavItem>
          </Nav>
          <Nav className="ml-auto" navbar>
            <NavbarText>Login</NavbarText>
            <NavItem className="responsive-width">
              <button className="btn btn-cyan">Sign Up</button>
            </NavItem>
          </Nav>
        </Collapse>
      </Container>
    </Navbar>
  );
};
