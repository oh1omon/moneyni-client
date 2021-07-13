import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { Route, Switch } from 'react-router'
import { BrowserRouter } from 'react-router-dom'
import { Header } from './Components/Header'
import Home from './Components/Home'
import Me from './Components/Me'
import Navbar from './Components/Navbar'
import SignInUp from './Components/SignInUp'
import { IRootState, TUserState } from './react-app-env'
import { initializeState } from './services/dispatchers/userDispatcher'

const App = (): JSX.Element => {
	//Getting user from global state
	const user: TUserState = useSelector((state: IRootState) => state.user)
	//Fetching user object and its operations from server
	useEffect(() => {
		initializeState()
	}, [])
	return (
		<BrowserRouter>
			{user && <Header />}
			<Switch>
				<Route path={'/'}>{user ? <Home /> : <SignInUp />}</Route>
				<Route path={'/me'} component={Me} />
			</Switch>
			{user && <Navbar />}
		</BrowserRouter>
	)
}

export default App
