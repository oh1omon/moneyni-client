import { TUserState, UserStateAction } from '../../react-app-env'
import * as actionTypes from './userAction'

export const userReducer = (state: TUserState = null, action: UserStateAction): TUserState => {
	switch (action.type) {
		case actionTypes.SET_USER:
			return action.payload
		default:
			return state
	}
}
