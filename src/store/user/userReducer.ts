import { UserStateAction, UserState } from './userTypes';
import * as actionTypes from './userAction';

export const userReducer = (
    state: UserState = false,
    action: UserStateAction
): UserState => {
    switch (action.type) {
        case actionTypes.SET_USER:
            return action.payload;
        default:
            return state;
    }
};
