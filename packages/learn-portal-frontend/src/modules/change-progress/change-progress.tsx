import * as React from "react";
import { Form } from "react-bootstrap";
import {} from '../../utils/grow-api/p';

type TChangeProgressProps = {
  lectionId: string;
  userId: string;
};

export const ChangeProgress = React.memo<TChangeProgressProps>(
  ({ lectionId, userId }) => {
    const [isChecked, setIsChecked] = React.useState(false);

    React.useEffect(() => {

    }, []);

    const onChangeProgress = React.useCallback(() => {
      console.log(isChecked, lectionId, userId);
    }, []);

    return (
      <Form>
        <Form.Check>
          <Form.Check.Input checked={isChecked} onChange={onChangeProgress} />
          <Form.Check.Label>Done</Form.Check.Label>
        </Form.Check>
      </Form>
    );
  }
);
