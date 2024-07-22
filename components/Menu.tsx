"use client";
import { useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import $ from "jquery";

export const Menu = () => {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    $(".nav-link").each(function () {
      $(this).attr("title", $(this).text());
    });
  });

  return (
    <Navbar expand="md">
      <Container fluid>
        <Navbar.Brand href="#">Navbar scroll</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll">
          <div
            id="nav-btn-icon"
            className={open ? "open" : ""}
            onClick={() => setOpen(!open)}
          >
            <span></span>
            <span></span>
            <span></span>
          </div>
        </Navbar.Toggle>
        <Navbar.Collapse id="navbarScroll">
          <Nav className="mx-auto my-2 my-lg-0 overflow-hidden" navbarScroll>
            <Nav.Link href="#1">Home</Nav.Link>
            <Nav.Link href="#2">About</Nav.Link>
            <Nav.Link href="#3">Services</Nav.Link>
            <Nav.Link href="#4">Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Menu;
