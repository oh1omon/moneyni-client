import axios from 'axios'
import { Dispatch } from 'redux'
import { IUser, UserStateAction } from '../react-app-env'
import * as actionTypes from '../store/user/userAction'
import { initializeSpendsState } from './spendsDispatcher'

const signUpUrl = '/api/signup/'
const signInUrl = '/api/signin'
const authConfirm = '/api/authconfirm'
const signOutUrl = '/api/signout'
const addSpendIdToUserUrl = '/api/addspendtouser'

export const initializeUserState = () => {
	return async (dispatch): Promise<null | IUser> => {
		let inState: IUser | boolean = await axios.get(authConfirm).then((resp) => resp.data.user)
		console.log(inState)
		await axios.get(authConfirm).then((resp) => console.log(resp))
		if (Object.keys(inState).length === 0) {
			console.log('magic')
			inState = false
		} else {
			if (typeof inState !== 'boolean') {
				dispatch(initializeSpendsState(inState.spendings))
			}
		}
		dispatch({
			type: actionTypes.SET_USER,
			payload: inState,
		})
	}
}

export const registerUser = (newUserData: any) => {
	return async (dispatch: Dispatch<UserStateAction>) => {
		const inState: IUser = await axios
			.post(signUpUrl, newUserData)
			.then((res) => res.data.user)
			.catch((e) => console.log(e))
		console.log(inState)
		dispatch({
			type: actionTypes.SET_USER,
			payload: inState,
		})
	}
}

export const signInUser = (user: any) => {
	return async (dispatch: Dispatch<any>) => {
		let userOrUndef: IUser | boolean = await axios
			.post(signInUrl, user)
			.then((res) => res.data.user)
			.catch((e) => console.log(e))
		console.log(userOrUndef)
		if (!userOrUndef) {
			console.log('magic form signin')
			userOrUndef = false
		} else {
			if (typeof userOrUndef !== 'boolean') {
				dispatch(initializeSpendsState(userOrUndef.spendings))
			}
		}
		dispatch({
			type: actionTypes.SET_USER,
			payload: userOrUndef ? userOrUndef : false,
		})
	}
}

export const addSpendIdToUser = (newSpendId: string) => {
	return async (dispatch: Dispatch<any>) => {
		await axios
			.post(addSpendIdToUserUrl, { newSpendId })
			.then((resp) =>
				dispatch({
					type: actionTypes.SET_USER,
					payload: resp.data.user,
				})
			)
			.catch((e) => console.log(e))
	}
}

export const signOutUser = () => {
	return async (dispatch: Dispatch<UserStateAction>) => {
		await axios.get(signOutUrl)
		dispatch({ type: actionTypes.SET_USER, payload: false })
	}
}
