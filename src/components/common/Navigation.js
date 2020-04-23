import React from "react";
import { Nav, Navbar } from "react-bootstrap";
import styled from "styled-components";

const Styles = styled.div`
//   .navbar {
//     background-color: #fff;
//   }
  .navbar-brand,
  .navbar-nav .nav-link {
    color: #fff;
    &:hover {
      color: yellow;
      
    }
  }
`;

export default function Navigation() {
  return (
    <Styles>
      <Navbar sticky="top">
        <Navbar.Toggle aria-controls="basic-navbar-nav"/>
        <Navbar.Collapse id="basic-navbar-nav">
        <Nav className= "ml-auto">
            <Nav.Item>
              <Nav.Link href="/">Home</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href="/about">About</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href="/experience">Experience</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href="/contact">Contact</Nav.Link>
            </Nav.Item>
          </Nav>
          </Navbar.Collapse>
      </Navbar>
    </Styles>
    
  );
}
