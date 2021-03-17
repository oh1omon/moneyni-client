import React from 'react';
import Spends from '../Spends/Spends';

const Home = () => {
    return (
        <div className="w-full h-screen flex flex-column justify-center items-center bg-main-dark">
            <Spends />
        </div>
    );
};

export default Home;
