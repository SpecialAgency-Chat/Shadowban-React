import React from "react";
import ReactBootstrap, { Navbar, Container } from "react-bootstrap";

export default function Header() {
  return (
    <Navbar bg="dark" variant="light">
      <Container>
        <Navbar.Brand className="mb-0 h1 text-white" as={"span"}>
          <i className="fa-brands fa-twitter me-2"></i>
          Shadowban Check
        </Navbar.Brand>
      </Container>
    </Navbar>
  )
}