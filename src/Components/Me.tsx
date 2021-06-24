import React, { MouseEvent } from 'react'
import { signOutUser } from '../services/dispatchers/userDispatcher'

const Me = (): JSX.Element => {
	const clickHandler = (e: MouseEvent<HTMLButtonElement>) => {
		e.preventDefault()
		signOutUser()
	}
	return (
		<div className='w-full h-screen-8/10 flex justify-center items-center'>
			<button
				className='p-1 border border-black'
				onClick={(e: MouseEvent<HTMLButtonElement>) => clickHandler(e)}
			>
				Sign Out
			</button>
		</div>
	)
}

export default Me
