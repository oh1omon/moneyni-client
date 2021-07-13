import { IOperationsState, IOperationsStateAction } from '../../react-app-env'
import * as actionTypes from './opeartionsActions'

export const operationsReducer = (
	state: IOperationsState = [],
	action: IOperationsStateAction
): IOperationsState => {
	switch (action.type) {
		case actionTypes.SET_OPERATIONS:
			return action.payload
		case actionTypes.ADD_OPERATION:
			return [...state, ...action.payload]
		default:
			return state
	}
}
