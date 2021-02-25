import React from 'react';
import { useSelector } from 'react-redux';
import { IDaySpendings, IDayState } from '../../store/day/dayTypes';

const View = () => {
    const days: IDayState = useSelector((state: IDayState) => state);
    return (
        <div>
            {days.map((day: IDaySpendings) => (
                <p key={day._id}>{day.date}</p>
            ))}
        </div>
    );
};

export default View;
