import { applyMiddleware, combineReducers, createStore, Store } from 'redux';
import { userReducer } from './user/userReducer';
import thunk from 'redux-thunk';
import { UserState } from './user/userTypes';
import { SpendsState } from './spends/spendsTypes';
import { spendsReducer } from './spends/spendsReducer';

export const rootReducer = combineReducers({
    user: userReducer,
    spends: spendsReducer,
});
export type RootState = { user: UserState; spends: SpendsState };

export const store: Store<RootState> = createStore(
    rootReducer,
    applyMiddleware(thunk)
);
