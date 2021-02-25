import * as actionTypes from '../store/day/dayActions';
import { Dispatch } from 'redux';
import { DayStateAction, IDayState } from '../store/day/dayTypes';

export const initializeDayState = () => {
    return async (dispatch: Dispatch<DayStateAction>) => {
        const inState: IDayState = await getAll();
        dispatch({
            type: actionTypes.SET_INITIAL_STATE,
            payload: { days: inState },
        });
    };
};

export function getAll() {
    return new Promise<IDayState>((resolve, reject) => {
        setTimeout(() => {
            resolve([
                {
                    _id: 'gewgwegwesd624k626',
                    date: '31.12.12',
                    sum: 34.56,
                    spendings: ['r2er2', 'ewrwett'],
                },
            ]);
        }, 2000);
    });
}
