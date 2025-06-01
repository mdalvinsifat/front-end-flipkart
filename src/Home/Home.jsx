import React from 'react';
import Header from '../Layout/Header';
import DataLoading from './DataLoading';

const Home = () => {
    return (
        <div>
            <Header/>
            <DataLoading/>
        </div>
    );
};

export default Home;