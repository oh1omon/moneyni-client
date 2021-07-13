import { IOperationWithDate, TAddDateToOperation, TConvertIdToDate, TOperationsSplitter } from '../../react-app-env'

/**
 * Function adds field to the operation with the date of this operation creation
 * @param operation
 * @returns
 */
export const addDateToOperation: TAddDateToOperation = (operation) => {
	return {
		_id: operation._id,
		owner: operation.owner,
		category: operation.category,
		comment: operation.comment,
		cost: operation.cost,
		currency: operation.currency,
		date: convertIdToDate(operation._id),
	}
}

/**
 * Function, that takes ObjectId and makes new Date out of it
 * @param idString
 * @returns
 */
const convertIdToDate: TConvertIdToDate = (idString) => {
	return new Date(parseInt(idString.substring(0, 8), 16) * 1000)
}

/**
 * This function splits array of spends into array of arrays of spends :D
 * This is done depending on the date of creation of every spend.
 * So, spends created in one day will be in the on array.
 * @param operationsArr
 * @returns
 */
export const operationSplitter: TOperationsSplitter = (operationsArr) => {
	//Adding dates to the spends
	const newOperationsArr: IOperationWithDate[] = operationsArr.map((item) => addDateToOperation(item))

	//Magic is done here
	const uniqueDatesArr = [
		...new Set(newOperationsArr.map((item) => `${item.date.getDate()}/${item.date.getMonth()}`)),
	]
	return [
		...uniqueDatesArr.map((unItem) =>
			newOperationsArr.filter((item) => `${item.date.getDate()}/${item.date.getMonth()}` === unItem)
		),
	]
}
