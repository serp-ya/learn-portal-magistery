import * as React from "react";
import { Link } from "react-router-dom";
import { ListGroup } from "react-bootstrap";
import { TSkill } from "../../utils/grow-api/skills";

type TUserSkillsListProps = {
  skillsList: TSkill[];
  url?: string;
};

export const UserSkillsList = React.memo<TUserSkillsListProps>(
  ({ skillsList = [], url }) => {
    if (!Array.isArray(skillsList) || skillsList.length === 0) {
      return <p>Have no any skills</p>;
    }

    return (
      <ListGroup>
        {skillsList.map((skill) => (
          <ListGroup.Item key={skill.id}>
            {url ? (
              <Link to={`${url}/${skill.id}`}>{skill.name}</Link>
            ) : (
              skill.name
            )}
          </ListGroup.Item>
        ))}
      </ListGroup>
    );
  }
);
