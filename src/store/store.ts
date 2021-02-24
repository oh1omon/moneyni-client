import { applyMiddleware, createStore, Store } from 'redux';
import thunk from 'redux-thunk';
import { reducer } from './reducers/reducer';

export const store: Store<SpendingsState, DayAction> = createStore(
    reducer,
    applyMiddleware(thunk)
);
