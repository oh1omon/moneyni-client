import React, { MouseEvent, useState } from 'react'
import { Link } from 'react-router-dom'
import { LogoIcon } from '../assets/icons/LogoIcon'
import SignInUp from './SignInUp'
import Button from './Button'

const Landing = (): JSX.Element => {
	const [shown, setShown] = useState(false)

	const showHandler = (e: MouseEvent<HTMLButtonElement>) => {
		e.preventDefault()
		setShown(!shown)
	}
	return (
		<>
			{shown ? (
				<SignInUp />
			) : (
				<div className='h-screen w-full bg-main-dark flex justify-center items-center'>
					<div className={'absolute top-0 left-8'}>
						<Link className={`text-sm`} to={'/'}>
							<LogoIcon />
						</Link>
					</div>
					<div className='w-3/4 h-3/4 flex flex-col justify-between items-center'>
						<p className='text-justify text-main-yellow border border-main-yellow rounded-2xl p-4'>
							<span className='font-bold'>Important!</span> Currently this SPA is optimized to work
							only on mobile devices, desktop version is coming soon.
						</p>
						<p className='text-justify text-main-yellow p-4'>
							Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus autem dignissimos
							fuga fugiat iusto omnis possimus, repudiandae tempore temporibu
						</p>
						<p className='text-justify text-main-yellow text-sm p-4'>
							Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci consectetur dolor
						</p>
						<Button
							buttonText='Sign In'
							clickHandler={(e) => {
								showHandler(e)
							}}
						/>
					</div>
				</div>
			)}
		</>
	)
}

export default Landing
