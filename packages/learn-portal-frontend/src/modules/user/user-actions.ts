import { TUser, getCurrentUser } from '../../utils/grow-api/users';

export const SET_USER = 'SET_USER';
export const setUser = (user: TUser) => ({
    type: SET_USER,
    payload: user,
});

export const fetchUser = () => async (dispatch, getState) => {
    const currentUser = await getCurrentUser();

    console.log('#'.repeat(25));
    console.log('currentUser', typeof currentUser, currentUser);
    console.log('#'.repeat(25));

    if (currentUser) {
        dispatch(setUser(currentUser));
    }
};
