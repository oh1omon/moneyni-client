import React, { ChangeEvent, MouseEvent, useState } from 'react'
import { useSelector } from 'react-redux'
import { IOperationFormObject, IOperationServerResp, IRootState } from '../react-app-env'
import { addOperation } from '../services/dispatchers/operationsDispatcher'
import { update } from '../services/dispatchers/userDispatcher'
import Button from './Button'
import Input from './Input'
import { Loader } from './Loader'
import { inputFields } from '../assets/lists/add-operations-inputs'
import { errFields } from '../assets/lists/add-operations-errs'

const AddOperation = (): JSX.Element => {
	// Fetching user form the global state
	const user = useSelector((store: IRootState) => store.user)

	// State of loading
	const [loader, setLoader] = useState(false)

	// Initing inputs
	const [inputs] = useState(inputFields)

	// Creating state for form
	const [form, setForm] = useState<IOperationFormObject>({ currency: '€' })

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

		// Setting loader up
		setLoader(true)

		// If form has passed validation, then we are submitting it to the dispatcher.
		const resp: IOperationServerResp = await addOperation(formattedForm)

		// Setting loader down
		setLoader(false)

		const { status, operation } = resp

		setStatusMessage({ success: status.success, message: status.message })

		// If adding is successful, then we will update user document too
		if (status.success) {
			// This case is for adding funds to the profile
			if (operation?.category === 'Gift' || operation?.category === 'Salary') {
				update({
					operations: operation!._id,
					balance: {
						current: user!.balance.current + operation.cost,
						income: user!.balance.income + operation.cost,
						spent: user!.balance.spent,
					},
				})
			}

			// This is for spending funds
			update({
				operations: operation!._id,
				balance: {
					current: user!.balance.current - operation!.cost,
					income: user!.balance.income,
					spent: user!.balance.spent - operation!.cost,
				},
			})
		}
	}

	const formValidator = (formObject: IOperationFormObject) => {
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
		<div className='w-screen h-full flex justify-center items-end'>
			<form className='flex flex-col justify-between items-center w-3/4 h-9/10'>
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
					<option value={'Gift'}>Gift</option>
					<option value={'Salary'}>Salary</option>
					<option disabled>--</option>
					<option value='Bad Habits'>Bad Habits</option>
					<option value='Hygiene and Health'>Hygiene and Health</option>
					<option value='Housing'>Housing</option>
					<option value='Clothing and Cosmetics'>Clothing and Cosmetics</option>
					<option value='Travel'>Travel</option>
					<option value='Food'>Food</option>
					<option value='Entertainment'>Entertainment and Gifts</option>
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

				{loader ? (
					<div className={'w-1/5'}>
						<Loader />
					</div>
				) : (
					<p className={`${statusMessage.success ? 'text-white' : 'text-main-err'} text-sm p-2`}>
						{statusMessage.success
							? statusMessage.message
							: statusMessage.message.split(' ').slice(4).join(' ')}
						{err.length > 0 ? errFields.filter((e) => e.field === err[0])[0].message : ' '}
					</p>
				)}

				<Button buttonText={'Add'} clickHandler={submitHandler} />
			</form>
		</div>
	)
}

export default AddOperation
