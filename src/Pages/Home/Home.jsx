import React from 'react';
import Banner from './Banner';

const Home = () => {
    return (
        <div>
           <Banner></Banner>
           <div className='max-w-[1270px] mx-auto text-center mt-10'>
                <h1 className='text-[2.5rem] font-semibold text-black'>Trending Apps</h1>
                <p className='text-[#627382] text-[.9rem] font-normal'>Explore All Trending Apps on the Market developed by us</p>
           </div>
        </div>
    );
};

export default Home;