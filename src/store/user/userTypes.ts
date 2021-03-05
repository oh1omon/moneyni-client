import { Action } from 'redux';

export interface IUser {
    _id: string;
    email: string;
    name: string;
    spendings: string[];
}
export type IUserInitialState = IUser | {};

export interface UserStateAction extends Action {
    type: string;
    payload: {
        user: IUser;
    };
}
