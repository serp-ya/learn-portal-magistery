import * as React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { Col, Container, Navbar } from "react-bootstrap";
import { getCurrentUser } from "../user";
import { MAIN_PAGE_ROUTE } from "../../pages/main";
import { SKILLS_PAGE_ROUTE } from "../../pages/skills";

export const Header = React.memo(() => {
  const currentUser = useSelector(getCurrentUser);

  return (
    <Navbar expand="lg" variant="light" bg="light" style={{ padding: '15px', paddingTop: '20px' }}>
      <Container>
        <Col  sm={2}>
          <Link to={MAIN_PAGE_ROUTE}>
            <Navbar.Brand>Learn Portal</Navbar.Brand>
          </Link>
        </Col>
        <Col sm={8}>
          <Link to={SKILLS_PAGE_ROUTE}>Skills</Link>
        </Col>
        <Col sm={2}>
          <div>{currentUser?.email}</div>
        </Col>
      </Container>
    </Navbar>
  );
});
