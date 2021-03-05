import * as actionTypes from '../store/user/userAction';
import { Dispatch } from 'redux';
import { UserStateAction, IUser } from '../store/user/userTypes';
import axios from 'axios';

const signUpUrl: string = 'http://127.0.0.1:3001/api/signup/';
const signInUrl: string = 'http://127.0.0.1:3001/api/signin';

export const initializeUserState = () => {
    return async (dispatch: Dispatch<UserStateAction>) => {
        const inState: IUser = await getAll();
        dispatch({
            type: actionTypes.SET_INITIAL_STATE,
            payload: { user: inState },
        });
    };
};

export const registerUser = (newUserData: any) => {
    return async (dispatch: Dispatch<UserStateAction>) => {
        const inState: IUser = await axios
            .post(signUpUrl, newUserData)
            .then((res) => res.data.user)
            .catch((e) => console.log(e));
        console.log(inState);
        dispatch({
            type: actionTypes.REGISTER_NEW_USER,
            payload: { user: inState },
        });
    };
};

export const signInUser = (user: any) => {
    return async (dispatch: Dispatch<UserStateAction>) => {
        const inState: IUser = await axios
            .post(signInUrl, user)
            .then((res) => res.data)
            .catch((e) => console.log(e));
        console.log(inState);
        dispatch({
            type: actionTypes.REGISTER_NEW_USER,
            payload: { user: inState },
        });
    };
};

export function getAll() {
    return new Promise<IUser>((resolve, reject) => {
        setTimeout(() => {
            resolve({
                _id: 'gewgwegwesd624k626',
                email: 'wet',
                name: 'ff',
                spendings: ['r2er2', 'ewrwett'],
            });
        }, 2000);
    });
}
