import { SpendsState, SpendsStateAction } from './spendsTypes';
import * as actionTypes from './spendsActions';

export const spendsReducer = (
    state: SpendsState = [],
    action: SpendsStateAction
) => {
    switch (action.type) {
        case actionTypes.SET_SPENDS:
            return action.payload;
        case actionTypes.ADD_SPEND:
            return [...state, action.payload];
        default:
            return state;
    }
};
