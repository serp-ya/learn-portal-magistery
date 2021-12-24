import * as React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { Container, Row } from "react-bootstrap";
import { ETitleTypes, Title } from "../../components/title";
import { getSkills } from "../../modules/skills";
import { LectionsList } from "../../modules/lections-list";
import { SELECTED_LECTION_PAGE_ROUTE } from "../../pages/selected-lection";
import { SELECTED_SKILL_ID_PARAM_NAME } from "./selected-skill-page-constants";

export const SelectedSkillPage = React.memo<{}>(() => {
  const skills = useSelector(getSkills);
  const routerParams = useParams();
  const selectedSkillId = routerParams[SELECTED_SKILL_ID_PARAM_NAME];

  const currentSkill = skills?.find((skill) => skill.id === selectedSkillId);

  return (
    <Container>
      {currentSkill ? (
        <>
          <Row>
            <Title headerType={ETitleTypes.H1}>{currentSkill.name}</Title>
          </Row>
          <Row>
            <p>{currentSkill.description}</p>
          </Row>
          <Row>
            <Title headerType={ETitleTypes.H3}>Lections</Title>
            <LectionsList
              lections={currentSkill.lections}
              url={SELECTED_LECTION_PAGE_ROUTE}
            />
          </Row>
        </>
      ) : (
        <Row>
          Something went wrong! Please return to the Skills or Main page
        </Row>
      )}
    </Container>
  );
});
