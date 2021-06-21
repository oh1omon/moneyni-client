import React, { MouseEvent } from 'react'
import { useDispatch } from 'react-redux'
import { signOutUser } from '../../services/dispatchers/userDispatcher'

const Me = () => {
	const dispatch = useDispatch()
	const clickHandler = (e: MouseEvent<HTMLButtonElement>) => {
		e.preventDefault()
		dispatch(signOutUser())
	}
	return (
		<div className='w-full h-screen flex justify-center items-center'>
			<button className='p-1 border border-black' onClick={(e: MouseEvent<HTMLButtonElement>) => clickHandler(e)}>
				Sign Out
			</button>
		</div>
	)
}

export default Me
