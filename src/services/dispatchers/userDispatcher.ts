import axios from 'axios'
import { IFormObject, IServerResp, IUserServerResp } from '../../react-app-env'
import { store } from '../../store/store'
import * as actionTypes from '../../store/user/userAction'
import { initializeOperationsState } from './operationsDispatcher'

// API urls
const registerUrl = '/api/auth/register'
const loginUrl = '/api/auth/login'
const logoutUrl = '/api/auth/logout'
const retrieveUrl = '/api/user/retrieve'
const updateUrl = '/api/user/update'

// Creating dispatch statement
const dispatch = store.dispatch

/**
 * This function is checking if user is logged in or not.
 * It firstly fetches server side, and after that it checks if there is user object.
 * If it is, then it will dispatch it to the store and return response from the server.
 * If no, then it will dispatch null to the store and return response from the server.
 * In case of inability to contact the server, it will return status object with message of it.
 * @returns {Promise<IServerResp>} Response object
 */
export const initializeState = async (): Promise<IServerResp> => {
	try {
		// Fetching data
		const resp: IUserServerResp = await axios.get(retrieveUrl).then((r) => r.data)

		// TODO delete
		console.log(resp)
		//

		// In case of user logged in we will dispatch his object into store and return this user's object
		if (resp.status.success) {
			dispatch({ type: actionTypes.SET_USER, payload: resp.user })

			initializeOperationsState(resp.user!.spends)

			return resp
		}

		// Handling case of situation, when user is not logged in
		dispatch({ type: actionTypes.SET_USER, payload: null })

		return resp
	} catch (e) {
		console.log(e)

		dispatch({ type: actionTypes.SET_USER, payload: null })

		return { status: { success: false, message: 'Problem has happened while contacting with server' } }
	}
}

/**
 * This function tries to register user.
 * It firstly sends candidates object to the server side.
 * After that it checks if there is any problem in its response.
 * If no, then it will dispatch user to the store and return response from the server.
 * If there are some problems, then it will return response from the server.
 * In case of inability to contact the server, it will return status object with message of it.
 * @returns {Promise<IServerResp>} Response object
 */
export const registerUser = async (newUserData: Record<string, unknown>): Promise<IServerResp> => {
	try {
		// Sending candidates object to the server
		const resp: IUserServerResp = await axios.post(registerUrl, newUserData).then((r) => r.data)

		// TODO: delete
		console.log(resp)
		//

		// In case of success we will dispatch registered user to the state
		if (resp.status.success) {
			dispatch({ type: actionTypes.SET_USER, payload: resp.user })
		}

		// Finally we will return server response
		return resp
	} catch (e) {
		console.log(e)

		return { status: { success: false, message: 'Problem has happened while contacting with server' } }
	}
}

/**
 * This function tries to sign user in.
 * It firstly sends login object to the server side.
 * After that it checks if there is any problem in its response.
 * If no, then it will dispatch user to the store and return response from the server.
 * If there are some problems, then it will return response from the server.
 * In case of inability to contact the server, it will return status object with message of it.
 * @returns {Promise<IServerResp>} Response object
 */
export const signInUser = async (user: IFormObject): Promise<IServerResp> => {
	try {
		// Sending login object to the server
		const resp: IUserServerResp = await axios.post(loginUrl, user).then((r) => r.data)

		// TODO: delete
		console.log(resp)
		//

		// In case of success we will dispatch logged in user to the state
		if (resp.status.success) {
			// console.log(resp.user)
			dispatch({ type: actionTypes.SET_USER, payload: resp.user })

			//Fetching users spends
			initializeOperationsState(resp.user!.spends)
		}

		// Finally we will return server response
		return resp
	} catch (e) {
		console.log(e)

		return {
			status: {
				success: false,
				message: 'Error in internal processes: Problem has happened while contacting with server',
			},
		}
	}
}

/**
 * This function tries to update user.
 * It firstly sends updates object to the server side.
 * After that it checks if there is any problem in its response.
 * If no, then it will dispatch user to the store and return response from the server.
 * If there are some problems, then it will return response from the server.
 * In case of inability to contact the server, it will return status object with message of it.
 * @returns {Promise<IServerResp>} Response object
 */
export const update = async (updates: Record<string, unknown>): Promise<IServerResp> => {
	try {
		// Sending login object to the server
		const resp: IUserServerResp = await axios.post(updateUrl, updates).then((r) => r.data)

		// TODO: delete
		console.log(resp)
		//

		// In case of success we will dispatch logged in user to the state
		if (resp.status.success) {
			dispatch({ type: actionTypes.SET_USER, payload: resp.user })
		}

		// Finally we will return server response
		return resp
	} catch (e) {
		console.log(e)

		return {
			status: {
				success: false,
				message: 'Error in internal processes: Problem has happened while contacting with server',
			},
		}
	}
}

/**
 * This function tries to log user out.
 * It checks if there is any problem in the process.
 * If no, then it will dispatch null to the store and return response from the server.
 * If there are some problems, then it will return response from the server.
 * In case of inability to contact the server, it will return status object with message of it.
 * @returns {Promise<IServerResp>} Response object
 */
export const signOutUser = async (): Promise<IServerResp> => {
	try {
		// Fetching server
		const resp: IUserServerResp = await axios.get(logoutUrl).then((r) => r.data)

		// TODO: delete
		console.log(resp)
		//

		// In case of success we will dispatch null to the state
		if (resp.status.success) {
			dispatch({ type: actionTypes.SET_USER, payload: null })
		}

		// Finally we will return server response
		return resp
	} catch (e) {
		console.log(e)

		return {
			status: {
				success: false,
				message: 'Error in internal processes: Problem has happened while contacting with server',
			},
		}
	}
}
