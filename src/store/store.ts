import { applyMiddleware, createStore, Store } from 'redux';
import { userReducer } from './user/userReducer';
import thunk from 'redux-thunk';
import { UserStateAction, IUserInitialState } from './user/userTypes';

export const store: Store<IUserInitialState, UserStateAction> = createStore(
    userReducer,
    applyMiddleware(thunk)
);
