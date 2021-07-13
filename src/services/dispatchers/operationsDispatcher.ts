import axios from 'axios'
import { IMonthServerResp, IOperationServerResp, IOperationsServerResp, IServerResp } from '../../react-app-env'
import * as monthActionTypes from '../../store/month/month-actions'
import * as operationsActionTypes from '../../store/operations/opeartionsActions'
import { store } from '../../store/store'

// API urls
const getUrl = '/api/operations'
const addUrl = '/api/operations/add'

// Creating dispatch statement
const dispatch = store.dispatch

/**
 * This function tries to initialize operations state.
 * It checks if there is any problem in the response.
 * If no, then it will dispatch operations to the store and return response from the server.
 * If there are some problems, then it will return response from the server.
 * In case of inability to contact the server, it will return status object with message of it.
 * @returns {Promise<IServerResp>} Response object
 */
export const initializeOperationsState = async (idArr: string[]): Promise<IServerResp> => {
	try {
		// Fetching data
		const resp: IOperationsServerResp = await axios.post(getUrl, { idArr }).then((r) => r.data)

		// TODO: delete
		console.log(resp)
		//

		// In case of success we will dispatch operations array to the store and return response
		if (resp.status.success) {
			dispatch({ type: operationsActionTypes.SET_OPERATIONS, payload: resp.operations })

			return resp
		}

		// Handling the case of unsuccess in fetching operations
		dispatch({ type: operationsActionTypes.SET_OPERATIONS, payload: [] })

		return resp
	} catch (e) {
		console.log(e)

		dispatch({ type: operationsActionTypes.SET_OPERATIONS, payload: [] })

		return {
			status: {
				success: false,
				message: 'Error in internal processes: Problem has happened while contacting with server',
			},
		}
	}
}

/**
 * This function is intended  to fetch month documents from the API
 * In case of success new month data will be stored to the global state
 * If fetching failures, we will just return response
 * @param month
 */
export const getOperations = async (month: number): Promise<IMonthServerResp> => {
	try {
		// Fetching data
		const resp: IMonthServerResp = await axios.post(getUrl, { month }).then((r) => r.data)

		// TODO: delete
		console.log(resp)
		//

		// In case of success we will dispatch operations array to the store and return response
		if (resp.status.success) {
			dispatch({ type: monthActionTypes.SET_MONTH, payload: resp.monthData })
		}

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
 * This function tries to add new spend.
 * It checks if there is any problem in the response.
 * If no, then it will dispatch operations to the store and return response from the server.
 * If there are some problems, then it will return response from the server.
 * In case of inability to contact the server, it will return status object with message of it.
 * @returns {Promise<IServerResp>} Response object
 */
export const addOperation = async (newSpend: Record<string, unknown>): Promise<IServerResp> => {
	try {
		// Sending spend object to the server
		const resp: IOperationServerResp = await axios.post(addUrl, newSpend).then((r) => r.data)

		// TODO: delete
		console.log(resp)
		//

		// In case of success we will dispatch spend to the store and return response
		if (resp.status.success) {
			dispatch({ type: operationsActionTypes.ADD_OPERATION, payload: [resp.operation] })
		}

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
