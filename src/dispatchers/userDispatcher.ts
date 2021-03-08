import * as actionTypes from '../store/user/userAction';
import { Dispatch } from 'redux';
import { UserStateAction, IUser } from '../store/user/userTypes';
import axios from 'axios';
import { initializeSpendsState } from './spendsDispatcher';

const signUpUrl: string = 'http://127.0.0.1:3001/api/signup/';
const signInUrl: string = 'http://127.0.0.1:3001/api/signin';
const authConfirm: string = 'http://127.0.0.1:3001/api/authConfirm';
const signOutUrl: string = 'http://127.0.0.1:3001/api/signout';

export const initializeUserState = () => {
    return async (dispatch: Dispatch<any>) => {
        let inState: IUser | boolean = await axios
            .get(authConfirm)
            .then((resp) => resp.data.user);
        console.log(inState);
        if (!inState) {
            inState = false;
        } else {
            if (typeof inState !== 'boolean') {
                dispatch(initializeSpendsState(inState.spendings));
            }
        }
        dispatch({
            type: actionTypes.SET_USER,
            payload: inState,
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
            type: actionTypes.SET_USER,
            payload: inState,
        });
    };
};

export const signInUser = (user: any) => {
    return async (dispatch: Dispatch<UserStateAction>) => {
        const userOrUndef: IUser = await axios
            .post(signInUrl, user)
            .then((res) => res.data.user)
            .catch((e) => console.log(e));
        console.log(userOrUndef);

        dispatch({
            type: actionTypes.SET_USER,
            payload: userOrUndef ? userOrUndef : false,
        });
    };
};

export const signOutUser = () => {
    return async (dispatch: Dispatch<UserStateAction>) => {
        await axios.get(signOutUrl);
        dispatch({ type: actionTypes.SET_USER, payload: false });
    };
};

// export function getAll() {
//     return new Promise<IUser>((resolve, reject) => {
//         setTimeout(() => {
//             resolve({
//                 _id: 'gewgwegwesd624k626',
//                 email: 'wet',
//                 name: 'ff',
//                 spendings: ['r2er2', 'ewrwett'],
//             });
//         }, 2000);
//     });
// }
