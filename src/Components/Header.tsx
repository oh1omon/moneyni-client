import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { useLocation } from 'react-router'
import { Link } from 'react-router-dom'
import { IRootState } from '../react-app-env'

export const Header = (): JSX.Element => {
	const location = useLocation()
	const [advanced, setAdvanced] = useState(false)

	const user = useSelector((state: IRootState) => state.user)

	useEffect(() => {
		location.pathname === '/home' ? setAdvanced(true) : setAdvanced(false)
	}, [location])
	return (
		<div
			className={`w-full ${
				advanced ? 'h-screen-4.5/10' : 'h-screen-1/10'
			} transition-all  transition-300 ease-in-out bg-main-dark`}
		>
			<div className={'w-full h-full bg-main-light rounded-b-3xl flex justify-center items-center'}>
				{advanced ? (
					<div className={'h-4/5 w-5/6 grid grid-rows-11 text-white'}>
						<div className={'row-start-1 row-span-5 flex justify-center items-center'}>
							<div className='flex flex-col h-full justify-around'>
								<p>Current balance</p>
								<h2 className='text-4xl'>
									{Number(user!.salary.actual).toLocaleString('en-US', {
										maximumFractionDigits: 2,
									})}
									€
								</h2>
							</div>
						</div>
						<div className={'row-start-6 row-span-3'}>
							<div className='flex h-full justify-between'>
								<div className='w-1/3 flex flex-col justify-around'>
									<p>Income</p>
									<h3 className='text-2xl'>
										{Number(user!.salary.monthly).toLocaleString('en-US', {
											maximumFractionDigits: 2,
										})}
										€
									</h3>
								</div>
								<div className='w-1/3 flex flex-col justify-around'>
									<p>Spent</p>
									<h3 className='text-2xl'>
										{Number(user!.salary.monthly - user!.salary.actual).toLocaleString(
											'en-US',
											{ maximumFractionDigits: 2 }
										)}
										€
									</h3>
								</div>
							</div>
						</div>
						<div className='relative month row-start-10 row-span-3 max-w-full h-full flex justify-around items-center overflow-y-auto'>
							<div className='w-auto flex justify-between items-center overflow-y-auto'>
								<p className='px-2 py-1 mx-4 rounded-lg bg-main-dark'>January</p>
								<p className='px-2 py-1 mx-4 rounded-lg bg-main-dark'>February</p>
								<p className='px-2 py-1 mx-4 rounded-lg bg-main-dark'>March</p>
								<p className='px-2 py-1 mx-4 rounded-lg bg-main-dark'>April</p>
								<p className='px-2 py-1 mx-4 rounded-lg bg-main-dark'>May</p>
								<p className='px-2 py-1 mx-4 rounded-lg bg-main-dark'>June</p>
								<p className='px-2 py-1 mx-4 rounded-lg bg-main-dark'>July</p>
								<p className='px-2 py-1 mx-4 rounded-lg bg-main-dark'>August</p>
								<p className='px-2 py-1 mx-4 rounded-lg bg-main-dark'>September</p>
								<p className='px-2 py-1 mx-4 rounded-lg bg-main-dark'>October</p>
								<p className='px-2 py-1 mx-4 rounded-lg bg-main-dark'>November</p>
								<p className='px-2 py-1 mx-4 rounded-lg bg-main-dark'>December</p>
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
