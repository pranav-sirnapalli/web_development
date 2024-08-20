import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

function Navbars({ isLoggedIn, setIsLoggedIn }) {
  const navigate = useNavigate();

  const handleGoHome = () => {
    setIsLoggedIn(false);
    navigate("/");
  };

  const openGoogle = () => {
    window.open("https://www.google.com", "_blank");
  };

  const handleLogout = () => {
    setIsLoggedIn(false); 
    navigate("/"); 
  };

  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <Nav className="me-auto">
          {!isLoggedIn ? (
            <>
              <Nav.Link as={NavLink} to="/" activeClassName="active" exact>
              </Nav.Link>
              <Nav.Link as={NavLink} to="/signup" activeClassName="active">
                Sign Up
              </Nav.Link>
              <Nav.Link as={NavLink} to="/login" activeClassName="active">
                Login
              </Nav.Link>
            </>
          ) : (
            <>
              <Nav.Link as={NavLink} to="/" activeClassName="active">
                Home
              </Nav.Link>
              <Nav.Link as={NavLink} to="/calendar" activeClassName="active">
                Calendar
              </Nav.Link>
              <Nav.Link as={NavLink} to="/calculator" activeClassName="active">
                Calculator
              </Nav.Link>
              <Nav.Link
                as={NavLink}
                to="/phone-gallery"
                activeClassName="active"
              >
                Phone Gallery
              </Nav.Link>
              <Nav.Link onClick={openGoogle}>Google</Nav.Link>
              <Nav.Link onClick={handleLogout}>Logout</Nav.Link>
            </>
          )}
        </Nav>
      </Container>
    </Navbar>
  );
}

export default Navbars;
