import * as React from "react";
import { TSkill } from "../../utils/grow-api/skills";

type TUserSkillsListProps = {
  skillsList?: TSkill[];
};

export const UserSkillsList = React.memo<TUserSkillsListProps>(
  ({ skillsList = [] }) => {
    if (!Array.isArray(skillsList) || skillsList.length === 0) {
      return <p>Have no any skills</p>;
    }

    return (
      <ul>
        {skillsList.map((skill) => {
          return <li key={skill.id}>{skill.name}</li>;
        })}
      </ul>
    );
  }
);
