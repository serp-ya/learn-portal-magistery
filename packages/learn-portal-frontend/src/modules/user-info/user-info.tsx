import * as React from "react";
import { useSelector } from "react-redux";
import { Container, Row } from "react-bootstrap";
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
        <ul>
          <li>
            <b>Firstname:</b> {currentUser?.firstName}
          </li>
          <li>
            <b>Lastname:</b> {currentUser?.lastName}
          </li>
          <li>
            <b>Email:</b> {currentUser?.email}
          </li>
          <li>
            <b>Current profession:</b> "{localizedCurrentProfession?.name}"
          </li>
          <li>
            <b>Selected profession:</b> "{localizedSelectedProfession?.name}"
          </li>
        </ul>
      </Row>
    </Container>
  );
});
