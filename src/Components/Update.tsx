import React, { ChangeEvent, MouseEvent, useState } from 'react'
import { updateInputs } from '../assets/lists/update-inputs'
import { updateErrs } from '../assets/lists/update-errs'
import Input from './Input'
import { IFormObject, IValRes } from '../react-app-env'
import Button from './Button'
import { update } from '../services/dispatchers/userDispatcher'

const Update = (): JSX.Element => {
	const [form, setForm] = useState<IFormObject>({})
	const [err, setErr] = useState<IValRes>([])

	//Error message to be print to user
	//By default it is empty
	const [statusMessage, setStatusMessage] = useState({ success: false, message: '' })

	const changeHandler = (e: ChangeEvent<HTMLInputElement>) => {
		setForm({ ...form, [e.target.name]: e.target.value })
	}

	const formValidator = (formObject: IFormObject) => {
		const err: string[] = []

		if (!formObject.password) {
			err.push('password')
		}
		if (!formObject.name) {
			err.push('name')
		}

		return err
	}

	const submitHandler = async (e: MouseEvent<HTMLButtonElement>) => {
		e.preventDefault()
		setErr([])
		const validationResult: IValRes = formValidator(form)
		if (validationResult.length > 0) {
			setErr(validationResult)
			return
		}

		// Salary is rounded up to two numbers after dot, if we are registering user
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
						err={err.includes(i.inputId)}
					/>
				))}

				<p className={`${statusMessage.success ? 'text-main-yellow' : 'text-main-err'} text-sm`}>
					{statusMessage.success
						? statusMessage.message
						: statusMessage.message.split(' ').slice(4).join(' ')}
					{err.length > 0 && updateErrs.filter((e) => e.field === err[0])[0].message}
				</p>
				<Button buttonText={'Update'} clickHandler={submitHandler} />
			</form>
		</div>
	)
}

export default Update
