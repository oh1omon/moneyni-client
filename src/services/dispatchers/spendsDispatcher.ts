import axios from 'axios'
import { IServerResp, ISpendServerResp, ISpendsServerResp } from '../../react-app-env'
import * as actionTypes from '../../store/spends/spendsActions'
import { store } from '../../store/store'

// API urls
const getUrl = '/api/spends'
const addUrl = '/api/spends/add'

// Creating dispatch statement
const dispatch = store.dispatch

/**
 * This function tries to initialize spends state.
 * It checks if there is any problem in the response.
 * If no, then it will dispatch spends to the store and return response from the server.
 * If there are some problems, then it will return response from the server.
 * In case of inability to contact the server, it will return status object with message of it.
 * @returns {Promise<IServerResp>} Response object
 */
export const initializeSpendsState = async (idArr: string[]): Promise<IServerResp> => {
	try {
		// Fetching data
		const resp: ISpendsServerResp = await axios.post(getUrl, { idArr }).then((r) => r.data)

		// TODO: delete
		console.log(resp)
		//

		// In case of success we will dispatch spends array to the store and return response
		if (resp.status.success) {
			dispatch({ type: actionTypes.SET_SPENDS, payload: resp.spends })

			return resp
		}

		// Handling the case of unsuccess in fetching spends
		dispatch({ type: actionTypes.SET_SPENDS, payload: [] })

		return resp
	} catch (e) {
		console.log(e)

		dispatch({ type: actionTypes.SET_SPENDS, payload: [] })

		return { status: { success: false, message: 'Error in internal processes: Problem has happened while contacting with server' } }
	}
}

/**
 * This function tries to add new spend.
 * It checks if there is any problem in the response.
 * If no, then it will dispatch spends to the store and return response from the server.
 * If there are some problems, then it will return response from the server.
 * In case of inability to contact the server, it will return status object with message of it.
 * @returns {Promise<IServerResp>} Response object
 */
export const addSpend = async (newSpend: Record<string, unknown>): Promise<IServerResp> => {
	try {
		// Sending spend object to the server
		const resp: ISpendServerResp = await axios.post(addUrl, newSpend).then((r) => r.data)

		// TODO: delete
		console.log(resp)
		//

		// In case of success we will dispatch spend to the store and return response
		if (resp.status.success) {
			dispatch({ type: actionTypes.ADD_SPEND, payload: [resp.spends] })
		}

		return resp
	} catch (e) {
		console.log(e)

		return { status: { success: false, message: 'Error in internal processes: Problem has happened while contacting with server' } }
	}
}
