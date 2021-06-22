import React, { useEffect, useState } from 'react'
import Headroom from 'react-headroom'
import { useLocation } from 'react-router'

export const Header = (): JSX.Element => {
	const location = useLocation()
	const [advanced, setAdvanced] = useState(false)

	useEffect(() => {
		location.pathname === '/home' ? setAdvanced(true) : setAdvanced(false)
	}, [location])
	return (
		<Headroom className='bg-main-dark'>
			<div
				className={`w-full ${
					advanced ? 'h-screen-1/2' : 'h-screen-1/10'
				}  transition-300 ease-in-out bg-main-light rounded-b-2xl`}
			>
				f
			</div>
		</Headroom>
	)
}
