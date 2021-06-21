import React from 'react'
import { IButtonProps } from '../../react-app-env'

const Button = ({ buttonText, clickHandler }: IButtonProps) => {
	return (
		<button
			className='p-2 border border-main-yellow w-3/4 rounded-md bg-main-dark text-main-yellow hover:bg-main-light'
			type='submit'
			onClick={(e) => clickHandler(e)}
		>
			{buttonText}
		</button>
	)
}

export default Button
