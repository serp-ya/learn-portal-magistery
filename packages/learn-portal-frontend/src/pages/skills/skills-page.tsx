import * as React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { ETitleTypes, Title } from "../../components/title";
import { UserSkills } from "../../modules/user-skills";
import { SKILLS_PAGE_ROUTE } from "./skills-page-constants";

export const SkillsPage = React.memo<{}>(() => {
  return (
    <Container>
      <Row>
        <Title headerType={ETitleTypes.H1}>Your skills</Title>
      </Row>
      <Row>
        <Col sm={6}>
          <UserSkills url={SKILLS_PAGE_ROUTE} />
        </Col>
      </Row>
    </Container>
  );
});
