import React from 'react';
import useTitle from '../../hookes/useTitle';
import Banner from './Banner/Banner';
import Category from './Category/Category';
import OurPolicy from './OurPolicy/OurPolicy';

const Home = () => {
    useTitle('Home')
    return (
        <div>
            <Banner></Banner>
            <OurPolicy></OurPolicy>
            <Category></Category>
        </div>
    );
};

export default Home;