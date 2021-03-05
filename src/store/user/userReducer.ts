import { UserStateAction, IUser, IUserInitialState } from './userTypes';
import * as actionTypes from './userAction';

const initialState: IUser = {
    _id: 'gewgwegwesd624k626',
    email: 'wet',
    name: 'ff',
    spendings: ['r2er2', 'ewrwett'],
};
export const userReducer = (
    state: IUserInitialState = {},
    action: UserStateAction
) => {
    switch (action.type) {
        case actionTypes.SET_INITIAL_STATE:
            return action.payload.user;
        case actionTypes.REGISTER_NEW_USER:
            return action.payload.user;
        default:
            return state;
    }
};
