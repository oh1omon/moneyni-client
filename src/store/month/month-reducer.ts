import { IMonthStateAction, TMonthState } from '../../react-app-env'
import * as actionTypes from './month-actions'

export const monthReducer = (state: TMonthState = [], action: IMonthStateAction): TMonthState => {
	switch (action.type) {
		case actionTypes.SET_MONTH:
			return [...action.payload]
		default:
			return state
	}
}
