"use client";
import { useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import icon from "../../public/images/icon.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCode,
  faHome,
  faPhone,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";

export const Menu = () => {
  const [open, setOpen] = useState(false);

  return (
    <Navbar expand="md">
      <Container fluid className="rtl-important">
        <Navbar.Brand href="#home" className="fs-3 fw-bold">
          حامد <span style={{ color: "var(--color-two)" }}>رجبی فرجاد</span>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll">
          <div
            id="nav-btn-icon"
            className={`d-flex justify-content-center align-items-center flex-column ${
              open && "open"
            }`}
            onClick={() => setOpen(!open)}
          >
            <span></span>
            <span></span>
            <span></span>
          </div>
        </Navbar.Toggle>
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="mx-auto my-2 my-lg-0 overflow-hidden rtl-important"
            navbarScroll
          >
            <Nav.Link href="#home">
              <FontAwesomeIcon icon={faHome} />
              <div className="nav-item-effect fs-5">خانه</div>
            </Nav.Link>
            <Nav.Link href="#about">
              <FontAwesomeIcon icon={faUser} />
              <div className="nav-item-effect fs-5">درباره من</div>
            </Nav.Link>
            <Nav.Link href="#samples">
              <FontAwesomeIcon icon={faCode} />
              <div className="nav-item-effect fs-5">نمونه کار </div>
            </Nav.Link>
            <Nav.Link href="#contact">
              <FontAwesomeIcon icon={faPhone} />
              <div className="nav-item-effect fs-5">ارتباط با من</div>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Menu;
