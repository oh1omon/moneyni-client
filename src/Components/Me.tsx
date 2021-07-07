import React, { MouseEvent } from 'react'
import { signOutUser } from '../services/dispatchers/userDispatcher'
import Button from './Button'

const Me = (): JSX.Element => {
	const clickHandler = (e: MouseEvent<HTMLButtonElement>) => {
		e.preventDefault()
		signOutUser()
	}
	return (
		<div className='w-full h-full flex justify-around items-center'>
			<div className='w-1/2 flex justify-center items-center'>
				<Button buttonText='Sign Out' clickHandler={clickHandler} />
			</div>
			<div className='w-1/2 flex justify-center items-center'>
				<Button
					buttonText='Update'
					clickHandler={(e: MouseEvent<HTMLButtonElement>) => e.preventDefault()}
				/>
			</div>
		</div>
	)
}

export default Me
