import * as React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { Container, Navbar } from "react-bootstrap";
import { getCurrentUser } from "../user";

export const Header = React.memo(() => {
  const currentUser = useSelector(getCurrentUser);

  return (
    <Container>
      <Navbar expand="lg" variant="light" bg="light">
        <Container>
          <Link to="/">
            <Navbar.Brand>Learn Portal</Navbar.Brand>
          </Link>
          <div>{currentUser?.email}</div>
        </Container>
      </Navbar>
    </Container>
  );
});
