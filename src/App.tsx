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
import { IRootState, TUserState } from './react-app-env'
import { initializeState } from './services/dispatchers/userDispatcher'

const App = (): JSX.Element => {
	//Getting user from global state
	const user: TUserState = useSelector((state: IRootState) => state.user)

	//Fetching user object and its spends from server
	useEffect(() => {
		initializeState()
	}, [])
	return (
		<BrowserRouter>
			{user && <Navbar />}
			<Switch>
				<Route path={'/'} exact>
					{user ? <Redirect to={'/home'} /> : <SignInUp />}
				</Route>
				{user ? (
					<>
						<Route path={'/home'} component={Home} />
						<Route path={'/addspend'} component={AddSpend} />
						<Route path={'/analytics'} component={Analytics} />
						<Route path={'/me'} component={Me} />
					</>
				) : (
					<Redirect to={'/'} />
				)}
			</Switch>
		</BrowserRouter>
	)
}

export default App
