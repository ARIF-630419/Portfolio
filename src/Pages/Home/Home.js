import React from 'react';
import Banner from './Banner';
import Projects from './Projects';

const Home = () => {
    return (
        <div className='relative'>
            <Banner></Banner>
            <Projects></Projects>
        </div>
    );
};

export default Home;