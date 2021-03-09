import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div>
            Home page <Link to={'/addspend'}>Add SPend</Link>{' '}
        </div>
    );
};

export default Home;
