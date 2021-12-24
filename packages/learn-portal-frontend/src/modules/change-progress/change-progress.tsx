import * as React from "react";
import { Form } from "react-bootstrap";
import {
  TProgress,
  getProgressById,
  postProgressById,
} from "../../utils/grow-api/progress";

type TChangeProgressProps = {
  lectionId: string;
  userId: string;
};

export const ChangeProgress = React.memo<TChangeProgressProps>(
  ({ lectionId, userId }) => {
    const [isFinished, setIsFinished] = React.useState(false);

    React.useEffect(() => {
      getProgressById({ lectionId, userId }).then((progress: TProgress) => {
        console.log("progress", progress);
        setIsFinished(progress.finished);
      });
    }, []);

    const onChangeProgress = React.useCallback(() => {
      postProgressById({
        finished: !isFinished,
        lectionId,
        userId,
      }).then((progress) => setIsFinished(progress.finished));
    }, [isFinished, lectionId, userId]);

    return (
      <Form>
        <Form.Check>
          <Form.Check.Input checked={isFinished} onChange={onChangeProgress} />
          <Form.Check.Label>Done</Form.Check.Label>
        </Form.Check>
      </Form>
    );
  }
);
