import * as React from "react";
import { Container, Row } from "react-bootstrap";
import { ETitleTypes, Title } from "../../components/title";
import { ProfessionsList } from '../../modules/professions-list';
import { UserSkills } from "../../modules/user-skills";

export const MainPage = React.memo<{}>(() => {
  return (
    <Container>
      <Row>
        <Title headerType={ETitleTypes.H1}>Main Page</Title>
      </Row>
      <Row>
        <Title headerType={ETitleTypes.H2}>Professions</Title>
        <ProfessionsList />
      </Row>
      <Row>
        <Title headerType={ETitleTypes.H2}>Your skills</Title>
        <UserSkills />
      </Row>
    </Container>
  );
});
