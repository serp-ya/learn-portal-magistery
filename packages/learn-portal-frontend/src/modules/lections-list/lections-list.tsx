import * as React from "react";
import { Link } from "react-router-dom";
import { Container, Row, ListGroup } from "react-bootstrap";
import { TLection } from "../../utils/grow-api/lections";

type TLectionsListProps = {
  lections: TLection[];
  url?: string;
};

export const LectionsList = React.memo<TLectionsListProps>(
  ({ lections, url }) => (
    <Container>
      <Row>
        {lections.length === 0 ? (
          <p>Have no any lection</p>
        ) : (
          <ListGroup>
            {lections.map(({ _id, title }) => (
              <ListGroup.Item key={_id}>
                {url ? <Link to={`${url}/${_id}`}>{title}</Link> : title}
              </ListGroup.Item>
            ))}
          </ListGroup>
        )}
      </Row>
    </Container>
  )
);
