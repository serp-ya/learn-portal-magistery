import { TProfession, getProfessions } from '../../utils/grow-api/professions';

export const SET_PROFESSION = 'SET_PROFESSION';
export const setProfession = (profession: TProfession[]) => ({
    type: SET_PROFESSION,
    payload: profession,
});

export const fetchProfessions = () => async (dispatch, getState) => {
    const professions = await getProfessions();

    console.log('#'.repeat(25));
    console.log('professions', typeof professions, professions);
    console.log('#'.repeat(25));

    if (professions) {
        dispatch(setProfession(professions));
    }
};
