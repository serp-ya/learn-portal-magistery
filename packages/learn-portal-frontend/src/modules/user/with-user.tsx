import * as React from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUser } from "./user-actions";
import { getCurrentUser } from "./user-selectors";

export const withUser = (Component: React.NamedExoticComponent) => () => {
  const dispatch = useDispatch();
  const currentUser = useSelector(getCurrentUser);

  React.useEffect(() => {
    if (!currentUser) {
      dispatch(fetchUser());
    }
  }, [currentUser, dispatch]);

  return currentUser ? <Component /> : null;
};
