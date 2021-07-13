import React, { ChangeEvent, MouseEvent, useState } from 'react'
import { updateInputs } from '../assets/lists/update-inputs'
import Input from './Input'
import { IFormObject } from '../react-app-env'
import Button from './Button'
import { update } from '../services/dispatchers/userDispatcher'

const Update = (): JSX.Element => {
	const [form, setForm] = useState<IFormObject>({})

	//Error message to be print to user
	//By default it is empty
	const [statusMessage, setStatusMessage] = useState({ success: false, message: '' })

	const changeHandler = (e: ChangeEvent<HTMLInputElement>) => {
		setForm({ ...form, [e.target.name]: e.target.value })
	}

	const submitHandler = async (e: MouseEvent<HTMLButtonElement>) => {
		e.preventDefault()

		// SalaryIcon is rounded up to two numbers after dot, if we are registering user
		const { status } = await update(form)

		setStatusMessage({ success: status.success, message: status.message })
	}

	return (
		<div
			className='w-full h-full flex
		 justify-center items-end'
		>
			<form className={'flex flex-col justify-between items-center h-9/10 w-3/4'}>
				{updateInputs.map((i) => (
					<Input
						key={i.inputId}
						inputType={i.inputType}
						inputId={i.inputId}
						changeHandler={(e: React.ChangeEvent<HTMLInputElement>) => changeHandler(e)}
					/>
				))}

				<p className={`${statusMessage.success ? 'text-main-yellow' : 'text-main-err'} text-sm`}>
					{statusMessage.success
						? statusMessage.message
						: statusMessage.message.split(' ').slice(4).join(' ')}
				</p>
				<Button buttonText={'Update'} clickHandler={submitHandler} />
			</form>
		</div>
	)
}

export default Update
