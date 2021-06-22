import React from 'react'
import { NavLink } from 'react-router-dom'
import { AnalIcon } from '../assets/icons/anal-icon'
import { HomeIcon } from '../assets/icons/home-icon'
import { ProfileIcon } from '../assets/icons/profile-icon'

const Navbar = (): JSX.Element => {
	return (
		<div className='fixed bottom-0 left-0 flex justify-center items-center rounded-t-2xl bg-gradient-to-t from-main-dark to-main-light w-full h-1/10'>
			<ul className='w-4/5 h-4/5 bg-blue-300  flex flex-row justify-between items-center '>
				<li className='flex justify-center items-center '>
					<NavLink activeClassName='text-red-700' to={'/home'}>
						<HomeIcon />
					</NavLink>
				</li>
				<li className='flex justify-center items-center'>
					<NavLink activeClassName='text-red-700' to={'/analytics'}>
						<AnalIcon />
					</NavLink>
				</li>
				<li className='flex justify-center items-center'>
					<NavLink activeClassName='text-red-700' to={'/me'}>
						<ProfileIcon />
					</NavLink>
				</li>
				<li className='flex justify-center items-center'>
					<NavLink activeClassName='text-red-700' to={'/addspend'}>
						<div className={'bg-main-yellow text-main-dark py-1.5 px-3 font-semibold  rounded-2xl'}>
							ADD
						</div>
					</NavLink>
				</li>
			</ul>
		</div>
	)
}

export default Navbar