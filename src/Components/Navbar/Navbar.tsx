import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    return (
        <div className="fixed bottom-0 left-0 flex justify-center items-center bg-blue-700 w-screen h-1/6">
            <ul className="w-4/5 h-4/5 bg-blue-300  flex flex-row justify-between items-center">
                <li className="flex justify-center items-center ">
                    <NavLink activeClassName="text-red-700" to={'/home'}>
                        Home
                    </NavLink>
                </li>
                <li className="flex justify-center items-center">
                    <NavLink activeClassName="text-red-700" to={'/anal'}>
                        Anal
                    </NavLink>
                </li>
                <li className="flex justify-center items-center">
                    <NavLink activeClassName="text-red-700" to={'/me'}>
                        Me
                    </NavLink>
                </li>
            </ul>
        </div>
    );
};

export default Navbar;
