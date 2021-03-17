import React, { useEffect } from 'react';
import SignInUp from './Components/SignInUp/SignInUp';
import { BrowserRouter, Redirect } from 'react-router-dom';
import { Route, Switch } from 'react-router';
import Navbar from './Components/Navbar/Navbar';
import { useDispatch, useSelector } from 'react-redux';
import { initializeUserState } from './dispatchers/userDispatcher';
import { IUser } from './store/user/userTypes';
import { RootState } from './store/store';
import { Dispatch } from 'redux';
import Home from './Components/Home/Home';
import AddSpend from './Components/AddSpend/AddSpend.';
import Analytics from './Components/Analytics/Analytics';
import Me from './Components/Me/Me';

const App = () => {
    const dispatch: Dispatch<any> = useDispatch();
    const user: boolean | IUser = useSelector((state: RootState) => state.user);
    // const user: boolean | IUser = true;
    useEffect(() => {
        dispatch(initializeUserState());
    }, [dispatch]);
    return (
        <BrowserRouter>
            {user ? <Navbar /> : false}
            <Switch>
                <Route path={'/'} exact={true}>
                    {user ? <Redirect to={'/home'} /> : <SignInUp />}
                </Route>
                <Route path={'/home'}>
                    {user ? <Home /> : <Redirect to={'/'} />}
                </Route>
                <Route path={'/addspend'}>
                    {user ? <AddSpend /> : <Redirect to={'/'} />}
                </Route>
                <Route path={'/analytics'}>
                    {user ? <Analytics /> : <Redirect to={'/'} />}
                </Route>
                <Route path={'/me'}>
                    {user ? <Me /> : <Redirect to={'/'} />}
                </Route>
            </Switch>
        </BrowserRouter>
    );
};

export default App;
