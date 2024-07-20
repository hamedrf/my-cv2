"use client";
import { useEffect } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import $ from "jquery";

export const Menu = () => {
  useEffect(() => {
    $(".nav-link").each(function () {
      $(this).attr("title", $(this).text());
    });
  }, []);
  return (
    <Navbar expand="lg" className="">
      <Container fluid>
        <Navbar.Brand href="#">Navbar scroll</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="mx-auto my-2 my-lg-0 "
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
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
