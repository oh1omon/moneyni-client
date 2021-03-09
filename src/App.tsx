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

const App = () => {
    const dispatch: Dispatch<any> = useDispatch();
    const user: boolean | IUser = useSelector((state: RootState) => state.user);
    console.log(user);
    useEffect(() => {
        dispatch(initializeUserState());
    }, [dispatch]);
    return (
        <BrowserRouter>
            {user ? <Navbar /> : false}
            <div>{typeof user !== 'boolean' ? user.email : user}</div>
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
            </Switch>
        </BrowserRouter>
    );
};

export default App;
