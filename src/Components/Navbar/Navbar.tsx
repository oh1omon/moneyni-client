import React from 'react';
import { NavLink } from 'react-router-dom';
import anal from '../../assets/icons/anal.svg';
import home from '../../assets/icons/home.svg';
import me from '../../assets/icons/me.svg';

const Navbar = () => {
    return (
        <div className="fixed bottom-0 left-0 flex justify-center items-center rounded-t-2xl bg-gradient-to-t from-main-dark to-main-light w-full h-1/10">
            <ul className="w-4/5 h-4/5 bg-blue-300  flex flex-row justify-between items-center ">
                <li className="flex justify-center items-center ">
                    <NavLink activeClassName="text-red-700" to={'/home'}>
                        <img className={'w-'} src={home} alt="home icon" />
                    </NavLink>
                </li>
                <li className="flex justify-center items-center">
                    <NavLink activeClassName="text-red-700" to={'/analytics'}>
                        <img src={anal} alt="anal icon" />
                    </NavLink>
                </li>
                <li className="flex justify-center items-center">
                    <NavLink activeClassName="text-red-700" to={'/me'}>
                        <img src={me} alt="me icon" />
                    </NavLink>
                </li>
                <li className="flex justify-center items-center">
                    <NavLink activeClassName="text-red-700" to={'/addspend'}>
                        <div
                            className={
                                'bg-main-yellow text-main-dark py-1.5 px-3 font-semibold  rounded-2xl'
                            }
                        >
                            ADD
                        </div>
                    </NavLink>
                </li>
            </ul>
        </div>
    );
};

export default Navbar;
