import React from 'react';
import { useSelector } from 'react-redux';
import { IUser } from '../../store/user/userTypes';

const View = () => {
    const user: IUser = useSelector((state: IUser) => state);
    return <div></div>;
};

export default View;
