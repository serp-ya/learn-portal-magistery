import * as React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Container, Row, Form } from "react-bootstrap";
import { getProfessions } from "../professions";
import { getCurrentUser, updateCurrentUser } from "../user";

export const ProfessionsSelect = React.memo(() => {
  const dispatch = useDispatch();
  const professions = useSelector(getProfessions);
  const currentUser = useSelector(getCurrentUser);
  const { id: currentProfessionId } =
    professions?.find(({ id }) => id === currentUser?.selectedProfession) || {};

  const onChangeProfession = React.useCallback((event) => {
    dispatch(updateCurrentUser(event.target.value));
  }, [dispatch]);

  return (
    <Container>
      <Row>
        <Form.Select value={currentProfessionId} onChange={onChangeProfession}>
          {professions?.map(({ id, name }) => (
            <option key={id} value={id}>
              {name}
            </option>
          ))}
        </Form.Select>
      </Row>
    </Container>
  );
});
