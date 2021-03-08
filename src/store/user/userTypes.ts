import { Action } from 'redux';
import { rootReducer } from '../store';

export interface IUser {
    _id: string;
    email: string;
    name: string;
    spendings: string[];
}
export type UserState = boolean | IUser;

export type RootReducer = ReturnType<typeof rootReducer>;

export interface UserStateAction extends Action {
    type: string;
    payload: UserState;
}
