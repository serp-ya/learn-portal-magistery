import * as React from "react";
import { useSelector } from "react-redux";
import { Container, Row, ListGroup } from "react-bootstrap";
import { getProfessions } from "../professions";
import { getCurrentUser } from "../user";

export const ProfessionsList = React.memo(() => {
  const professions = useSelector(getProfessions);
  const currentUser = useSelector(getCurrentUser);

  return (
    <Container>
      <Row>
        <ListGroup>
          {professions?.map(({ id, name }) => (
            <ListGroup.Item
              key={id}
              active={currentUser?.selectedProfession === id}
            >
              {name}
            </ListGroup.Item>
          ))}
        </ListGroup>
      </Row>
    </Container>
  );
});
