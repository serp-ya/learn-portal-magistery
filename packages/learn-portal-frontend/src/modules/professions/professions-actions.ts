import { TProfession, getProfessions } from "../../utils/grow-api/professions";

export const SET_PROFESSION = "SET_PROFESSION";
export const setProfession = (profession: TProfession[]) => ({
  type: SET_PROFESSION,
  payload: profession,
});

export const fetchProfessions = () => async (dispatch, getState) => {
  const professions = await getProfessions();

  if (professions) {
    dispatch(setProfession(professions));
  }
};
