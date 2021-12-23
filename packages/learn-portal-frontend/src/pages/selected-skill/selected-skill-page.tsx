import * as React from "react";
import { useParams } from "react-router-dom";
import { Container, Row } from "react-bootstrap";
import { ETitleTypes, Title } from "../../components/title";
import { UserSkills } from "../../modules/user-skills";
import { SELECTED_SKILL_ID_PARAM_NAME } from "./selected-skill-page-constants";

export const SelectedSkillPage = React.memo<{}>(() => {
  const routerParams = useParams();
  const selectedSkillId = routerParams[SELECTED_SKILL_ID_PARAM_NAME];

  return (
    <Container>
      <Row>
        <Title headerType={ETitleTypes.H1}>Your selected skills</Title>
      </Row>
      <Row>
        <div>selectedSkillId: {selectedSkillId}</div>
        <UserSkills />
      </Row>
    </Container>
  );
});
