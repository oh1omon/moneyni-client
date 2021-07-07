import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { useLocation } from 'react-router'
import { Link } from 'react-router-dom'
import { IMonth, IRootState } from '../react-app-env'
import { getSpends, initializeSpendsState } from '../services/dispatchers/spendsDispatcher'

export const Header = (): JSX.Element => {
	const location = useLocation()
	const [advanced, setAdvanced] = useState(false)

	const months = [
		'January',
		'February',
		'March',
		'April',
		'May',
		'June',
		'July',
		'August',
		'September',
		'October',
		'November',
		'December',
	]

	// Getting user from the global store
	const user = useSelector((state: IRootState) => state.user)

	// Getting months from global store
	const monthState = useSelector((state: IRootState) => state.month)

	// Creating local state for anu month being selected to be shown
	const [selectedMonth, setSelectedMonth] = useState<null | IMonth>(null)

	/**
	 * This function is getting month data from either global store, or API
	 * And after that it initializing spends state with spendIds from month data
	 * @param e
	 */
	const findMonth = async (e: React.MouseEvent<HTMLInputElement>) => {
		const month = Number(e.currentTarget.value)
		const foundMonth = monthState.find((m) => m.month === month) || (await getSpends(month)).monthData

		foundMonth && initializeSpendsState(foundMonth.spends)

		setSelectedMonth(foundMonth || null)
	}

	/**
	 * This function clears local selectedMonth state, and after that it loads spends from API by spendIds from user data
	 */
	const deleteMonth = () => {
		setSelectedMonth(null)
		initializeSpendsState(user!.spends)
	}

	useEffect(() => {
		location.pathname === '/' ? setAdvanced(true) : setAdvanced(false)
	}, [location])

	return (
		<div
			className={`w-full ${
				advanced ? 'h-screen-4.5/10' : 'h-screen-1/10'
			} transition-all duration-200 ease-in-out bg-main-dark`}
		>
			<div className={'w-full h-full bg-main-light rounded-b-3xl flex justify-center items-center'}>
				{advanced ? (
					<div className={'h-4/5 w-5/6 grid grid-rows-11 text-white'}>
						<div className={'row-start-1 row-span-5 flex justify-center items-center'}>
							<div className='flex flex-col h-full justify-around'>
								<p>Current balance</p>
								<h2 className='text-4xl'>
									{Number(selectedMonth?.salary.actual || user?.salary.actual).toLocaleString(
										'en-US',
										{
											maximumFractionDigits: 2,
										}
									)}
									€
								</h2>
							</div>
						</div>
						<div className={'row-start-6 row-span-3'}>
							<div className='flex h-full justify-between'>
								<div className='w-1/3 flex flex-col justify-around'>
									<p>Income</p>
									<h3 className='text-2xl'>
										{Number(
											selectedMonth?.salary.monthly || user?.salary.monthly
										).toLocaleString('en-US', {
											maximumFractionDigits: 2,
										})}
										€
									</h3>
								</div>
								<div className='w-1/3 flex flex-col justify-around'>
									<p>Spent</p>
									<h3 className='text-2xl'>
										{Number(
											selectedMonth
												? selectedMonth?.salary.monthly - selectedMonth?.salary.actual
												: user!.salary.monthly - user!.salary.actual
										).toLocaleString('en-US', {
											maximumFractionDigits: 2,
										})}
										€
									</h3>
								</div>
							</div>
						</div>
						<div className='relative month row-start-10 row-span-3 max-w-full h-full flex justify-around items-center overflow-y-auto'>
							<div className='w-auto flex justify-between items-center overflow-y-auto'>
								<>
									<button
										type={'button'}
										onClick={deleteMonth}
										className={`px-2 py-1 mx-4 rounded-lg bg-main-dark ${
											!selectedMonth && 'border border-main-yellow'
										}`}
									>
										{months[new Date().getMonth()]}
									</button>
									{
										// Showing only months, that user has
										user?.months
											.map((um) => months[um.month])
											.map((m) => (
												<label
													key={months.indexOf(m)}
													className={`px-2 py-1 mx-4 rounded-lg bg-main-dark cursor-pointer ${
														selectedMonth?.month === months.indexOf(m) &&
														'border border-main-yellow'
													}`}
												>
													<input
														type={'radio'}
														value={months.indexOf(m)}
														className='w-0 opacity-0 '
														onClick={(e) => findMonth(e)}
													/>
													{m}
												</label>
											))
									}
								</>
							</div>
						</div>
					</div>
				) : (
					<div className='w-4/5 h-4/5 flex justify-between items-center text-white text-2xl'>
						<Link to={'/home'}>MoneyNi</Link>
						<Link to={'/me'}>{user?.name}</Link>
					</div>
				)}
			</div>
		</div>
	)
}
