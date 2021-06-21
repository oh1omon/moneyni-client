import React from 'react'
import { useSelector } from 'react-redux'
import { RootState } from '../../store/store'
import { SpendsState } from '../../store/spends/spendsTypes'
import { ISpendWithDate, spendSplitter } from '../../services/logic/spendsWorker'
import SpendWindow from '../SpendWindow/SpendWindow'

const Spends = () => {
	const spendsWODate: SpendsState = useSelector((state: RootState) => state.spends)
	const spendsArr = spendSplitter(spendsWODate)
	return (
		<ul className='w-4/5 h-4/5 overflow-y-auto'>
			{spendsArr.map((spends: ISpendWithDate[]) => (
				<SpendWindow spendsArr={spends} />
			))}
		</ul>
	)
}

export default Spends
