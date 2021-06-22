import React, { ChangeEvent, MouseEvent, useState } from 'react'
import { useSelector } from 'react-redux'
import { IFormObject, IRootState, ISpendServerResp } from '../react-app-env'
import { addSpend } from '../services/dispatchers/spendsDispatcher'
import { update } from '../services/dispatchers/userDispatcher'
import Button from './Button'
import Input from './Input'

const inputFields = [
	{ inputId: 'comment', inputType: 'text', activated: true },
	{ inputId: 'cost', inputType: 'text', activated: true },
	{ inputId: 'currency', inputType: 'text', activated: false },
]

const AddSpend = (): JSX.Element => {
	const user = useSelector((store: IRootState) => store.user)
	const [inputs] = useState(inputFields)
	const [form, setForm] = useState<IFormObject>({ currency: '€' })
	const [err, setErr] = useState<string[]>([])

	const changeHandler = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
		setForm({ ...form, [e.target.name]: e.target.value })
	}

	const submitHandler = async (e: MouseEvent<HTMLButtonElement>) => {
		e.preventDefault()
		setErr([])
		const validationResult: string[] = formValidator(form)
		console.log(validationResult)
		if (validationResult.length > 0) {
			setErr(validationResult)
			return
		}
		console.log(form)
		const resp: ISpendServerResp = await addSpend(form)

		if (resp.status.success) {
			update({ spends: resp.spends!._id, salary: { actual: user!.salary.actual - resp.spends!.cost } })
		}
	}

	const formValidator = (formObject: IFormObject) => {
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
		<div className='w-screen h-screen flex justify-center items-center bg-main-dark'>
			<form className='flex flex-col justify-between items-center w-3/4 h-3/5'>
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
					<option value='Rent'>Rent</option>
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

				<Button buttonText={'Add Spend'} clickHandler={submitHandler} />
			</form>
		</div>
	)
}

export default AddSpend
