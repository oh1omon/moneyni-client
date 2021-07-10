import { ISpendWithDate, TAddDateToSpend, TConvertIdToDate, TSpendsSplitter } from '../../react-app-env'

/**
 * Function adds field to the spend with the date of this spend creation
 * @param spend
 * @returns
 */
export const addDateToSpend: TAddDateToSpend = (spend) => {
	return {
		_id: spend._id,
		owner: spend.owner,
		category: spend.category,
		comment: spend.comment,
		cost: spend.cost,
		currency: spend.currency,
		date: convertIdToDate(spend._id),
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
 * @param spendsArr
 * @returns
 */
export const spendSplitter: TSpendsSplitter = (spendsArr) => {
	//Adding dates to the spends
	const newSpendsArr: ISpendWithDate[] = spendsArr.map((item) => addDateToSpend(item))

	//Magic is done here
	const uniqueDatesArr = [
		...new Set(newSpendsArr.map((item) => `${item.date.getDate()}/${item.date.getMonth()}`)),
	]
	return [
		...uniqueDatesArr.map((unItem) =>
			newSpendsArr.filter((item) => `${item.date.getDate()}/${item.date.getMonth()}` === unItem)
		),
	]
}
