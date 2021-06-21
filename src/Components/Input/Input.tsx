import React, { ChangeEvent } from 'react'
import { IInputProps } from '../../react-app-env'

const Input = ({ inputType, inputId, changeHandler, err = false }: IInputProps): JSX.Element => {
	return (
		<div className='flex flex-col w-3/4 '>
			<label
				className='text-xs tracking-wide text-main-yellow mb-1 ml-0.5 '
				htmlFor={inputId}
			>{`${inputId}`}</label>
			<input
				className={`${
					err ? 'border-main-err' : 'border-main-yellow'
				} border rounded-md bg-main-dark p-2 transition duration-300 ease-in-out text-main-yellow placeholder-main-yellowLight`}
				type={inputType}
				name={inputId}
				id={inputId}
				placeholder={inputId}
				onChange={(e: ChangeEvent<HTMLInputElement>) => changeHandler(e)}
			/>
		</div>
	)
}

export default Input
