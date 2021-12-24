import * as React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { Col, Container, Row } from "react-bootstrap";
import { ETitleTypes, Title } from "../../components/title";
import { ChangeProgress } from "../../modules/change-progress";
import { getCurrentUser } from "../../modules/user";
import { TLection, getLectionById } from "../../utils/grow-api/lections";
import { SELECTED_LECTION_ID_PARAM_NAME } from "./selected-lection-page-constants";

export const SelectedLectionPage = React.memo<{}>(() => {
  const currentUser = useSelector(getCurrentUser);
  const routerParams = useParams();
  const selectedLectionId = routerParams[SELECTED_LECTION_ID_PARAM_NAME];
  const [lection, setLection] = React.useState<TLection | null>(null);

  React.useEffect(() => {
    if (selectedLectionId) {
      getLectionById(selectedLectionId).then((data) => setLection(data));
    }
  }, [selectedLectionId]);

  return (
    <Container>
      {lection ? (
        <>
          <Row>
            <Title headerType={ETitleTypes.H1}>{lection.title}</Title>
          </Row>
          <Row>
            <Col sm={6}>
              <p>{lection.description}</p>
            </Col>
            <Col sm={6}>
              <iframe
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                frameBorder="0"
                src={`https://www.youtube.com/embed/${lection.video}`}
                title="YouTube video player"
                height="315"
                width="560"
              ></iframe>
            </Col>
          </Row>
          <Row>
            <Col sm={6}>
              <ChangeProgress
                lectionId={lection._id}
                userId={currentUser?._id || ""}
              />
            </Col>
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
