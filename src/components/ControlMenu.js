import React from "react";
import { Navbar, Nav } from "react-bootstrap";

const ControlMenu = () => {
  return (
    <Navbar className="" bg="dark" variant="dark" expand="lg">
      {/* <Navbar.Brand href="/">Explore Functions</Navbar.Brand> */}
      {/* <Navbar.Toggle aria-controls="navbarNav" /> */}
      {/* <Navbar.Collapse id="navbarNav"> */}
      <Nav className="mx-auto flex-column">
        <Nav.Link href="/">Add/Update</Nav.Link>
        <Nav.Link href="/calculator">Calculator</Nav.Link>
        <Nav.Link href="/similar-cars">Similar Cars</Nav.Link>
        <Nav.Link href="/about-us">About Us</Nav.Link>
      </Nav>
      {/* </Navbar.Collapse> */}
    </Navbar>
  );
};

export default ControlMenu;
