import React from "react";
import { Button, Container, Form, Nav, Navbar } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";

import { Link } from "react-router-dom";
import { logout } from "../redux/actions/authAction";
import { MdLogout, MdLogin } from "react-icons/md";
import { RiHome4Line } from "react-icons/ri";
import { ImProfile } from "react-icons/im";
import { FcAddDatabase } from "react-icons/fc";

function NavBar({ getName }) {
  const auth = useSelector((state) => state.authReducer.auth);
  const dispatch = useDispatch();

  return (
    <Navbar
      bg="light"
      expand="lg"
      style={{ position: "sticky", top: 0, zIndex: 1 }}
    >
      <Container fluid>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <Nav.Link as={Link} to="/">
              <h3>
                {" "}
                <RiHome4Line style={{ cursor: "pointer ", width: "50px" }} />
              </h3>
            </Nav.Link>
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search Name Event"
              className="me-2"
              aria-label="Search"
              onChange={(e) => getName(e.target.value)}
            />
          </Form>
          {auth ? (
            <>
              <Link to="/profile">
                <h3>
                  <ImProfile style={{ cursor: "pointer ", width: "50px" }} />
                </h3>
              </Link>
              <h3>
                <MdLogout
                  variant="outline-primary"
                  onClick={() => dispatch(logout())}
                  style={{ cursor: "pointer" }}
                />
              </h3>
            </>
          ) : (
            <>
              <Link to="/login">
                <h3>
                  <MdLogin
                    variant="outline-primary m-2"
                    style={{ cursor: "pointer" }}
                  />{" "}
                </h3>
              </Link>

              <Link to="/register">
                <h3>
                  {" "}
                  <FcAddDatabase style={{ cursor: "pointer" }} />
                </h3>
              </Link>
            </>
          )}
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
