import React from 'react';
import Banner from './Banner';
import Projects from './Projects';
import Footer from '../Shared/Footer';

const Home = () => {
    return (
        <div className='relative'>
            <Banner></Banner>
            <Projects></Projects>
            <Footer></Footer>
        </div>
    );
};

export default Home;