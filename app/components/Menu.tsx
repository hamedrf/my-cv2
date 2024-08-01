"use client";
import { useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleInfo,
  faCircleQuestion,
  faHome,
  faInfo,
} from "@fortawesome/free-solid-svg-icons";

export const Menu = () => {
  const [open, setOpen] = useState(false);

  return (
    <Navbar expand="md">
      <Container fluid>
        <Navbar.Brand href="#">Navbar scroll</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll">
          <div
            id="nav-btn-icon"
            className={`d-flex justify-content-center align-items-center flex-column ${
              open ? "open" : ""
            }`}
            onClick={() => setOpen(!open)}
          >
            <span></span>
            <span></span>
            <span></span>
          </div>
        </Navbar.Toggle>
        <Navbar.Collapse id="navbarScroll">
          <Nav className="mx-auto my-2 my-lg-0 overflow-hidden " navbarScroll>
            <Nav.Link href="#1">
              <FontAwesomeIcon icon={faHome} />
              <div className="nav-item-effect fs-5">خانه</div>
            </Nav.Link>
            <Nav.Link href="#2">
              <FontAwesomeIcon icon={faCircleQuestion} />
              <div className="nav-item-effect fs-5">درباره</div>
            </Nav.Link>
            <Nav.Link href="#3">
              <FontAwesomeIcon icon={faCircleQuestion} />
              <div className="nav-item-effect fs-5">خدمات </div>
            </Nav.Link>
            <Nav.Link href="#4">
              <FontAwesomeIcon icon={faCircleQuestion} />
              <div className="nav-item-effect fs-5">یه چیزی </div>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Menu;
