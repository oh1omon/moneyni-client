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
		<Headroom
		// style={{ backgroundColor: 'rgb(66, 92, 90)', height: `${advanced ? 'h-screen-1/2' : 'h-screen-1/10'}` }}
		// // className={` transition-all  transition-300 ease-in-out`}
		>
			<div
			// className={`w-full ${
			// 	advanced ? 'h-screen-1/2' : 'h-screen-1/10'
			// } transition-all  transition-300 ease-in-out bg-main-light rounded-b-2xl`}
			>
				f
			</div>
		</Headroom>
	)
}
