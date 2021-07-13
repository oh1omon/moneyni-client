import { combineReducers, createStore, Store } from 'redux'
import { IRootState } from '../react-app-env'
import { monthReducer } from './month/month-reducer'
import { operationsReducer } from './operations/operationsReducer'
import { userReducer } from './user/userReducer'

export const rootReducer = combineReducers({
	user: userReducer,
	operations: operationsReducer,
	month: monthReducer,
})

export const store: Store<IRootState> = createStore(rootReducer)
