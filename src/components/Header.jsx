import React from "react";
import { Nav, Navbar, Container } from "react-bootstrap";
import { useLocation } from "react-router-dom";
import "./Header.css"

function Header() {
  const location = useLocation();

  const isPathActive = (path) => {
    return location.pathname === path ? "active" : "";
  };

  return (
    <div className="sticky-top">
      <Navbar className="shadow-lg" bg="light" data-bs-theme="light">
        <Container>
          <Navbar.Text className="fs-4 fw-bold">Simple Header</Navbar.Text>
          <Nav className="ms-auto">
            <Nav.Link href="/" style={{marginRight:5}} className={isPathActive("/")}>
              Home
            </Nav.Link>
            <Nav.Link
              href="/create-product"
              className={isPathActive("/create-product")}
            >
              Create Product
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
}

export default Header;
