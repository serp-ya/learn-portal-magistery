import * as React from "react";
import { Container, Row } from "react-bootstrap";
import { ETitleTypes, Title } from "../../components/title";
import { UserSkills } from "../../modules/user-skills";

export const SkillsPage = React.memo<{}>(() => {
  return (
    <Container>
      <Row>
        <Title headerType={ETitleTypes.H1}>Your skills</Title>
      </Row>
      <Row>
        <UserSkills />
      </Row>
    </Container>
  );
});
