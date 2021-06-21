import { ISpendWithDate, TAddDateToSpend, TConvertIdToDate, TSpendsSplitter } from '../../react-app-env'

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

const convertIdToDate: TConvertIdToDate = (idString) => {
	return new Date(parseInt(idString.substring(0, 8), 16) * 1000)
}

export const spendSplitter: TSpendsSplitter = (spendsArr) => {
	const newSpendsArr: ISpendWithDate[] = spendsArr.map((item) => addDateToSpend(item))

	const uniqueDatesArr = [...new Set(newSpendsArr.map((item) => `${item.date.getDate()}/${item.date.getMonth()}`))]
	return [
		...uniqueDatesArr.map((unItem) =>
			newSpendsArr.filter((item) => `${item.date.getDate()}/${item.date.getMonth()}` === unItem)
		),
	]
}
