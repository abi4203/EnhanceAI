import React from "react";

import "react-bootstrap";

import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { NavDropdown, Dropdown, Button, SplitButton } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { useUserAuth } from "./login/UserAuthContext";
import { Container } from "react-bootstrap";

const Header = () => {
  const { logOut, user } = useUserAuth();
  const navigate = useNavigate();
  const handleLogout = async () => {
    try {
      await logOut();
      navigate("/");
    } catch (error) {
      console.log(error.message);
    }
  };
  return (
    <div>
      <body>
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
          <Container>
            <Navbar.Brand href="/"> Enhance AI</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="me-auto"></Nav>
              <Nav>
                <Link to="/tools">Features</Link>
                <Link to="/purchase">Pricing</Link>
                <Link to="/contact">Contact</Link>
                <Link to="/test">TEST</Link>
                {user && user ? (
                  <NavDropdown
                    title="Account"
                    id="collasible-nav-dropdown"
                    align={{ lg: "start", md: "start" }}
                    style={{ marginRight: "3rem" }}
                  >
                    <NavDropdown.Item to="#action/3.1">
                      <div>
                        {user && user.email}
                        <br />
                        <div style={{ fontSize: "0.8em" }}>user</div>
                      </div>
                    </NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item onClick={handleLogout}>
                      Profile
                    </NavDropdown.Item>
                    <NavDropdown.Item onClick={handleLogout}>
                      Log-out
                    </NavDropdown.Item>
                  </NavDropdown>
                ) : null}

                {user && user ? null : (
                  <>
                    <Link to="/login">Sign-in</Link>
                    <Link to="/signup">Sign-up</Link>
                  </>
                  
                )}
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </body>
    </div>
  );
};

export default Header;
