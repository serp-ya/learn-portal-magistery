import * as React from "react";
import { useSelector } from "react-redux";
import { Container, Row } from "react-bootstrap";
import { ETitleTypes, Title } from "../../components/title";
import { getProfessions } from "../professions";
import { getCurrentUser } from "../user";
import { UserSkillsList } from "./user-skills-list";

export const UserSkills = React.memo(() => {
  const currentUser = useSelector(getCurrentUser);
  const professions = useSelector(getProfessions);

  const currentProfession = professions?.find(
    ({ id }) => id === currentUser?.selectedProfession
  );

  if (currentUser === null) {
    return currentUser;
  }

  return (
    <Container>
      <Row>
        <Title headerType={ETitleTypes.H3}>Requirement Skills</Title>
        <UserSkillsList skillsList={currentProfession?.minimumSkills} />
      </Row>
      <Row>
        <Title headerType={ETitleTypes.H3}>Good to know</Title>
        <UserSkillsList skillsList={currentProfession?.additionalSkills} />
      </Row>
    </Container>
  );
});
