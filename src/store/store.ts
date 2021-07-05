import { combineReducers, createStore, Store } from 'redux'
import { IRootState } from '../react-app-env'
import { monthReducer } from './month/month-reducer'
import { spendsReducer } from './spends/spendsReducer'
import { userReducer } from './user/userReducer'

export const rootReducer = combineReducers({
	user: userReducer,
	spends: spendsReducer,
	month: monthReducer,
})

export const store: Store<IRootState> = createStore(rootReducer)
