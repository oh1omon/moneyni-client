import { ISpendsStateAction, TSpendsState } from '../../react-app-env'
import * as actionTypes from './spendsActions'

export const spendsReducer = (state: TSpendsState = [], action: ISpendsStateAction): TSpendsState => {
	switch (action.type) {
		case actionTypes.SET_OPERATIONS:
			return action.payload
		case actionTypes.ADD_OPERATION:
			return [...state, ...action.payload]
		default:
			return state
	}
}
