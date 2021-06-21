import React, { ChangeEvent, MouseEvent, useState } from 'react'
import { IFormObject, IValRes } from '../../react-app-env'
import { registerUser, signInUser } from '../../services/dispatchers/userDispatcher'
import Button from '../Button/Button'
import Input from '../Input/Input'

const SignInUp = (): JSX.Element => {
	const [signIn, setSignIn] = useState(false)
	const [inputs, setInputs] = useState([
		{ inputId: 'email', inputType: 'email', activated: true },
		{ inputId: 'name', inputType: 'text', activated: true },
		{ inputId: 'password', inputType: 'password', activated: true },
	])
	const [form, setForm] = useState<IFormObject>({})
	const [err, setErr] = useState<IValRes>([])

	const changeHandler = (e: ChangeEvent<HTMLInputElement>) => {
		setForm({ ...form, [e.target.name]: e.target.value })
	}

	const signInChangeHandler = () => {
		setSignIn(!signIn)
		const nameInputIndex = inputs.findIndex((input) => input.inputId === 'name')!
		const nameInput = inputs[nameInputIndex]
		nameInput.activated = !nameInput.activated
		inputs.splice(nameInputIndex, 1, nameInput)
		setInputs([...inputs])
		const prevForm: IFormObject = form
		if (prevForm.name) {
			delete prevForm['name']
		}
		setForm(prevForm)
	}

	const submitHandler = (e: MouseEvent<HTMLButtonElement>) => {
		e.preventDefault()
		setErr([])
		const validationResult: IValRes = formValidator(form)
		console.log(validationResult)
		if (validationResult.length > 0) {
			setErr(validationResult)
			return
		}
		console.log(form)
		signIn ? signInUser(form) : registerUser(form)
	}

	const formValidator = (formObject: IFormObject) => {
		const err: string[] = []

		if (!formObject.email) {
			err.push('email')
		} else {
			const testRes = /^[^\s@]+@[^\s@]+$/.test(formObject.email)
			if (!testRes) {
				err.push('email')
			}
		}
		if (!formObject.password) {
			err.push('password')
		}
		if (!signIn && !formObject.name) {
			err.push('name')
		}

		return err
	}

	return (
		<div className='w-full h-screen flex justify-center items-center bg-main-dark'>
			<form className='flex flex-col justify-between items-center h-3/4 w-3/4'>
				{inputs
					.filter((input) => input.activated)
					.map((input) => (
						<Input
							key={input.inputId}
							inputType={input.inputType}
							inputId={input.inputId}
							changeHandler={(e: React.ChangeEvent<HTMLInputElement>) => changeHandler(e)}
							err={err.includes(input.inputId)}
						/>
					))}
				<Button buttonText={signIn ? 'Sign In' : 'Sign Up'} clickHandler={submitHandler} />
				<Input inputType={'checkbox'} inputId={'signIn'} changeHandler={signInChangeHandler} />
			</form>
		</div>
	)
}

export default SignInUp
