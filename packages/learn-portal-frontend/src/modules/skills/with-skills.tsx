import * as React from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchSkills } from "./skills-actions";
import { getSkills } from "./skills-selectors";

export const withSkills = (Component: React.NamedExoticComponent) => () => {
  const dispatch = useDispatch();
  const skills = useSelector(getSkills);

  React.useEffect(() => {
    if (!skills) {
      dispatch(fetchSkills());
    }
  }, [skills, dispatch]);

  return skills ? <Component /> : null;
};
