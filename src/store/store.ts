import { applyMiddleware, createStore, Store } from 'redux';
import { dayReducer } from './day/dayReducer';
import thunk from 'redux-thunk';
import { DayStateAction, IDayState } from './day/dayTypes';

export const store: Store<IDayState, DayStateAction> = createStore(
    dayReducer,
    applyMiddleware(thunk)
);
