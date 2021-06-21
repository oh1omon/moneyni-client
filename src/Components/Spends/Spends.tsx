import React from 'react'
import { useSelector } from 'react-redux'
import { IRootState, ISpendsState, ISpendWithDate } from '../../react-app-env'
import { spendSplitter } from '../../services/logic/spendsWorker'
import SpendWindow from '../SpendWindow/SpendWindow'

const Spends = () => {
	const spendsWODate: ISpendsState = useSelector((state: IRootState) => state.spends)
	const spendsArr = spendSplitter(spendsWODate)
	return (
		<ul className='w-4/5 h-4/5 overflow-y-auto'>
			{spendsArr.map((spends: ISpendWithDate[]) => (
				<SpendWindow key={spends.map((s) => s._id).toString()} spendsArr={spends} />
			))}
		</ul>
	)
}

export default Spends
