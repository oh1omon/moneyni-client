import { Action } from 'redux';

export interface IDaySpendings {
    _id: string;
    date: string;
    sum: number;
    spendings: string[];
}
export type IDayState = [IDaySpendings];

export interface DayStateAction extends Action {
    type: string;
    payload: {
        days: IDayState;
    };
}
