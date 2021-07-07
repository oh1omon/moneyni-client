import React, { ChangeEvent, MouseEvent, useState } from 'react'
import { useSelector } from 'react-redux'
import { IRootState, ISpendFormObject, ISpendServerResp } from '../react-app-env'
import { addSpend } from '../services/dispatchers/spendsDispatcher'
import { update } from '../services/dispatchers/userDispatcher'
import Button from './Button'
import Input from './Input'

// Fields that are used for signing in and up
const inputFields = [
	{ inputId: 'comment', inputType: 'text', activated: true },
	{ inputId: 'cost', inputType: 'tel', activated: true },
	{ inputId: 'currency', inputType: 'text', activated: false },
]

const errFields = [
	{ field: 'cost', message: 'Please provide cost' },
	{ field: 'category', message: 'Please provide category' },
]

const AddSpend = (): JSX.Element => {
	// Fetching user form the global state
	const user = useSelector((store: IRootState) => store.user)

	// Initing inputs
	const [inputs] = useState(inputFields)

	// Creating state for form
	const [form, setForm] = useState<ISpendFormObject>({ currency: '€' })

	// Creating state for error
	const [err, setErr] = useState<string[]>([])

	//Error message to be print to user
	//By default it is empty
	const [statusMessage, setStatusMessage] = useState({ success: false, message: '' })

	/**
	 * Handler for input changes
	 * @param e
	 */
	const changeHandler = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
		setForm({ ...form, [e.target.name]: e.target.value })
	}

	/**
	 * Handler for submitting form to the API.
	 * It firstly checks the form.
	 * Then it checks if the user is signing in or up.
	 * Then depending on upper condition it will dispatch form to the right API route
	 * @param e
	 * @returns
	 */
	const submitHandler = async (e: MouseEvent<HTMLButtonElement>) => {
		e.preventDefault()

		// Cleaning input errors array
		setErr([])

		// Getting validation result
		const validationResult: string[] = formValidator(form)

		// If we have at least one problem with the user's input, we are stopping the function and setting input errors array
		if (validationResult.length > 0) {
			setErr(validationResult)
			return
		}

		// Cost is rounded up to two numbers after dot
		const formattedForm = {
			...form,
			cost: Number(Number(form.cost!).toFixed(2)),
		}

		// If form has passed validation, then we are submitting it to the dispatcher.
		const resp: ISpendServerResp = await addSpend(formattedForm)

		const { status, spends } = resp

		setStatusMessage({ success: status.success, message: status.message })

		// If adding is successful, then we will update user document too
		if (status.success) {
			update({ spends: spends!._id, salary: { actual: user!.salary.actual - spends!.cost } })
		}
	}

	const formValidator = (formObject: ISpendFormObject) => {
		const err: string[] = []

		if (!formObject.category) {
			err.push('category')
		}
		if (!formObject.cost) {
			err.push('cost')
		}
		if (!formObject.currency) {
			err.push('currency')
		}

		return err
	}
	return (
		<div className='w-screen h-full flex justify-center items-center'>
			<form className='flex flex-col justify-between items-center w-3/4 h-4/5'>
				<select
					name='category'
					id='category'
					onChange={(e: ChangeEvent<HTMLSelectElement>) => {
						changeHandler(e)
					}}
					defaultValue={'Select the right one'}
					className={`border-2 rounded-md bg-main-dark p-2 transition duration-300 ease-in-out text-main-yellow   ${
						err.includes('category') ? 'border-main-err' : 'border-transparent'
					}`}
				>
					<option disabled>Select the right one</option>
					<option value='Daily Needs'>Daily Needs</option>
					<option value='Bad Habits'>Bad Habits</option>
					<option value='Hygiene and Health'>Hygiene and Health</option>
					<option value='Housing'>Housing</option>
					<option value='Clothing and Cosmetics'>Clothing and Cosmetics</option>
					<option value='Travel'>Travel</option>
					<option value='Food'>Food</option>
					<option value='Entertainment and Gifts'>Entertainment and Gifts</option>
					<option value='Connection'>Connection</option>
				</select>

				{inputs
					.filter((input) => input.activated)
					.map((input) => (
						<Input
							key={input.inputId}
							inputType={input.inputType}
							inputId={input.inputId}
							changeHandler={(e: ChangeEvent<HTMLInputElement>) => changeHandler(e)}
							err={err.includes(input.inputId)}
						/>
					))}

				<p className={`${statusMessage.success ? 'text-white' : 'text-main-err'} text-sm p-2`}>
					{statusMessage.success
						? statusMessage.message
						: statusMessage.message.split(' ').slice(4).join(' ')}
					{err.length > 0 && errFields.filter((e) => e.field === err[0])[0].message}
				</p>

				<Button buttonText={'Add Spend'} clickHandler={submitHandler} />
			</form>
		</div>
	)
}

export default AddSpend
