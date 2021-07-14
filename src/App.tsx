import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { Route, Switch } from 'react-router'
import { BrowserRouter } from 'react-router-dom'
import { Header } from './Components/Header'
import Home from './Components/Home'
import Me from './Components/Me'
import Navbar from './Components/Navbar'
import { IRootState, TUserState } from './react-app-env'
import { initializeState } from './services/dispatchers/userDispatcher'
import Landing from './Components/Landing'

const App = (): JSX.Element => {
	//Getting user from global state
	const user: TUserState = useSelector((state: IRootState) => state.user)
	//Fetching user object and its operations from server
	useEffect(() => {
		initializeState()
	}, [])
	return (
		<BrowserRouter>
			<div className={'w-full h-screen bg-main-dark'}>
				{user && <Header />}
				<Switch>
					<Route path={'/'}>{user ? <Home /> : <Landing />}</Route>
					<Route path={'/me'} component={Me} />
				</Switch>
				{user && <Navbar />}
			</div>
		</BrowserRouter>
	)
}

export default App
