import React from 'react';
import Banner from './Banner/Banner';
import Category from './Category/Category';
import OurPolicy from './OurPolicy/OurPolicy';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <OurPolicy></OurPolicy>
            <Category></Category>
        </div>
    );
};

export default Home;