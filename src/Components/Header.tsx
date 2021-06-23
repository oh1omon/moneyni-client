import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router'

export const Header = (): JSX.Element => {
	const location = useLocation()
	const [advanced, setAdvanced] = useState(false)

	useEffect(() => {
		location.pathname === '/home' ? setAdvanced(true) : setAdvanced(false)
	}, [location])
	return (
		<div
			className={`w-full ${
				advanced ? 'h-screen-1/2' : 'h-screen-1/10'
			} transition-all  transition-300 ease-in-out bg-main-dark`}
		>
			<div className={'w-full h-full bg-main-light rounded-b-2xl'}> f</div>
		</div>
	)
}
