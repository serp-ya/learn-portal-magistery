import * as React from "react";
import { useSelector } from "react-redux";
import { Container, Row, ListGroup } from "react-bootstrap";
import { getProfessions } from "../professions";
import { getCurrentUser } from "../user";

export const UserInfo = React.memo(() => {
  const currentUser = useSelector(getCurrentUser);
  const professions = useSelector(getProfessions);

  const localizedCurrentProfession = professions?.find(
    ({ id }) => id === currentUser?.currentProfession
  );
  const localizedSelectedProfession = professions?.find(
    ({ id }) => id === currentUser?.selectedProfession
  );

  return (
    <Container>
      <Row>
        <ListGroup>
          <ListGroup.Item>
            <b>Firstname:</b> {currentUser?.firstName}
          </ListGroup.Item>
          <ListGroup.Item>
            <b>Lastname:</b> {currentUser?.lastName}
          </ListGroup.Item>
          <ListGroup.Item>
            <b>Email:</b> {currentUser?.email}
          </ListGroup.Item>
          <ListGroup.Item>
            <b>Current profession:</b> "{localizedCurrentProfession?.name}"
          </ListGroup.Item>
          <ListGroup.Item>
            <b>Selected profession:</b> "{localizedSelectedProfession?.name}"
          </ListGroup.Item>
        </ListGroup>
      </Row>
    </Container>
  );
});
