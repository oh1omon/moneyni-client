import { Action } from 'redux';

export type SpendsState = ISpend[] | [];

export interface ISpend {
    _id: string;
    category: string;
    comment: string;
    cost: number;
    currency: string;
}

export interface SpendsStateAction extends Action {
    type: string;
    payload: SpendsState;
}
