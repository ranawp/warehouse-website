import React from 'react';
import Banner from '../Banner/Banner';
import Products from '../Products/Products';
import ChooseMe from './ChooseMe/ChooseMe';
import Subscribe from './Subscribe/Subscribe';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Products></Products>
            <ChooseMe></ChooseMe>
            <Subscribe></Subscribe>
        </div>
    );
};

export default Home;