import React, { ChangeEvent, MouseEvent, useState } from 'react'
import Input from '../Input/Input'
import { useDispatch } from 'react-redux'
import { addSpend } from '../../services/dispatchers/spendsDispatcher'
import Button from '../Button/Button'

interface IFormObject {
	category?: string
	comment?: string
	cost?: number
	currency?: string
}

const AddSpend = () => {
	const dispatch = useDispatch()
	const [inputs, setInputs] = useState([
		{ inputId: 'comment', inputType: 'text', activated: true },
		{ inputId: 'cost', inputType: 'text', activated: true },
		{ inputId: 'currency', inputType: 'text', activated: false },
	])
	const [form, setForm] = useState<IFormObject>({ currency: '€' })
	const [err, setErr] = useState<string[]>([])

	const changeHandler = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
		setForm({ ...form, [e.target.name]: e.target.value })
	}

	const submitHandler = (e: MouseEvent<HTMLButtonElement>) => {
		e.preventDefault()
		setErr([])
		const validationResult: string[] = formValidator(form)
		console.log(validationResult)
		if (validationResult.length > 0) {
			setErr(validationResult)
			return
		}
		console.log(form)
		dispatch(addSpend(form))
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
			<form
				className='flex flex-col justify-between items-center w-3/4 h-3/5'
				// onSubmit={submitHandler}
			>
				<select
					name='category'
					id='category'
					onChange={(e: ChangeEvent<HTMLSelectElement>) => {
						changeHandler(e)
					}}
				>
					<option value='' selected>
						Select the right one
					</option>
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
				{/*<button className="p-1 border border-black" type="submit">*/}
				{/*    Add Spendi*/}
				{/*</button>*/}
			</form>
		</div>
	)
}

export default AddSpend
