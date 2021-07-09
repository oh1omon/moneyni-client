import React from 'react'
import { useSelector } from 'react-redux'
import { IRootState, ISpendsState, ISpendWithDate } from '../react-app-env'
import { spendSplitter } from '../services/logic/spendsWorker'
import SpendWindow from './SpendWindow'

const Spends = (): JSX.Element => {
	// Getting spends array from global store
	const spendsWODate: ISpendsState = useSelector((state: IRootState) => state.spends)

	// Splitting spends into array of arrays depending on date
	const spendsArr = spendSplitter(spendsWODate)

	return (
		<ul className='w-4/5 h-auto mt-10 mb-20'>
			{spendsArr.reverse().map((spends: ISpendWithDate[]) => (
				<SpendWindow key={spends.map((s) => s._id).toString()} spendsArr={spends} />
			))}
		</ul>
	)
}

export default Spends
