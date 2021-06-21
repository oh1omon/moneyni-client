import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { Route, Switch } from 'react-router'
import { BrowserRouter, Redirect } from 'react-router-dom'
import AddSpend from './Components/AddSpend/AddSpend.'
import Analytics from './Components/Analytics/Analytics'
import Home from './Components/Home/Home'
import Me from './Components/Me/Me'
import Navbar from './Components/Navbar/Navbar'
import SignInUp from './Components/SignInUp/SignInUp'
import { IRootState, IUser } from './react-app-env'
import { initializeUserState } from './services/dispatchers/userDispatcher'

const App = (): JSX.Element => {
	const user: boolean | IUser = useSelector((state: IRootState) => state.user)
	useEffect(() => {
		initializeUserState()
	}, [])
	return (
		<BrowserRouter>
			{user ? <Navbar /> : false}
			<Switch>
				<Route path={'/'} exact={true}>
					{user ? <Redirect to={'/home'} /> : <SignInUp />}
				</Route>
				<Route path={'/home'}>{user ? <Home /> : <Redirect to={'/'} />}</Route>
				<Route path={'/addspend'}>{user ? <AddSpend /> : <Redirect to={'/'} />}</Route>
				<Route path={'/analytics'}>{user ? <Analytics /> : <Redirect to={'/'} />}</Route>
				<Route path={'/me'}>{user ? <Me /> : <Redirect to={'/'} />}</Route>
			</Switch>
		</BrowserRouter>
	)
}

export default App
