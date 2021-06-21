import { ISpendsStateAction, TSpendsState } from '../../react-app-env'
import * as actionTypes from './spendsActions'

export const spendsReducer = (state: TSpendsState = [], action: ISpendsStateAction): TSpendsState => {
	switch (action.type) {
		case actionTypes.SET_SPENDS:
			return action.payload
		case actionTypes.ADD_SPEND:
			return [...state, ...action.payload]
		default:
			return state
	}
}
