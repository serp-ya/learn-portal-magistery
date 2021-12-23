import * as React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { Container, Navbar } from "react-bootstrap";
import { getCurrentUser } from "../user";
import { MAIN_PAGE_ROUTE } from '../../pages/main';
import { SKILLS_PAGE_ROUTE } from '../../pages/skills';

export const Header = React.memo(() => {
  const currentUser = useSelector(getCurrentUser);

  return (
    <Container>
      <Navbar expand="lg" variant="light" bg="light">
        <Container>
          <Link to={MAIN_PAGE_ROUTE}>
            <Navbar.Brand>Learn Portal</Navbar.Brand>
          </Link>
          <Link to={SKILLS_PAGE_ROUTE}>
            Skills
          </Link>
          <div>{currentUser?.email}</div>
        </Container>
      </Navbar>
    </Container>
  );
});
