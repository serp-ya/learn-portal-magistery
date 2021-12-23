import * as React from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProfessions } from "./professions-actions";
import { getProfessions } from "./professions-selectors";

export const withProfessions =
  (Component: React.NamedExoticComponent) => () => {
    const dispatch = useDispatch();
    const professions = useSelector(getProfessions);

    React.useEffect(() => {
      if (!professions) {
        dispatch(fetchProfessions());
      }
    }, [professions, dispatch]);

    return professions ? <Component /> : null;
  };
