import React, { MouseEvent } from 'react'
import { signOutUser } from '../services/dispatchers/userDispatcher'
import { Link } from 'react-router-dom'
import Button from './Button'

const Me = (): JSX.Element => {
	const clickHandler = (e: MouseEvent<HTMLButtonElement>) => {
		e.preventDefault()
		signOutUser()
	}
	return (
		<div className='w-full h-full flex justify-around items-end'>
			<div className='w-1/2 flex justify-center items-center'>
				<Button buttonText='Sign Out' clickHandler={clickHandler} />
			</div>
			<div className='w-1/2 flex justify-center items-center'>
				<Link
					className={
						'p-2 border border-main-yellow w-3/4 rounded-md bg-main-dark text-main-yellow hover:bg-main-light flex' +
						' justify-center items-center'
					}
					to={'/update'}
				>
					Update
				</Link>
			</div>
		</div>
	)
}

export default Me
