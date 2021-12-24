import * as React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { ETitleTypes, Title } from "../../components/title";
import { ProfessionsList } from "../../modules/professions-list";
import { UserInfo } from "../../modules/user-info";

export const MainPage = React.memo<{}>(() => {
  return (
    <Container>
      <Row>
        <Title headerType={ETitleTypes.H2}>User info</Title>
        <Col sm={6}>
          <UserInfo />
        </Col>
      </Row>
      <Row>
        <Title headerType={ETitleTypes.H2}>Professions</Title>
        <Col sm={6}>
          <ProfessionsList />
        </Col>
      </Row>
    </Container>
  );
});
