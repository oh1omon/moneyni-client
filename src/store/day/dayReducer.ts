import { DayStateAction, IDayState } from './dayTypes';
import * as actionTypes from './dayActions';

const initialState: IDayState = [
    {
        _id: 'gewgwegwesd624k626',
        date: '31.12.12',
        sum: 34.56,
        spendings: ['r2er2', 'ewrwett'],
    },
];

export const dayReducer = (
    state: IDayState = initialState,
    action: DayStateAction
) => {
    switch (action.type) {
        case actionTypes.SET_INITIAL_STATE:
            return action.payload.days;
        default:
            return state;
    }
};
