import React from 'react'
import Spends from './Spends'

const Home = (): JSX.Element => {
	return (
		<div className='w-full h-auto flex flex-column justify-center items-center bg-main-dark'>
			<Spends />
		</div>
	)
}

export default Home
