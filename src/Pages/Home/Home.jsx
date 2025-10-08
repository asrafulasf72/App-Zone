import React from 'react';
import Banner from './Banner';
import { Link, } from 'react-router';
import SingleApp from './SingleApp';
import useApphook from '../../Hooks/useApphook';

const Home = () => {
    const {appData}=useApphook()
    // const AppsData= useLoaderData();
     const FirstEigntApp=appData.slice(0,8)
    return (
        <div className='bg-gray-100'>
           <Banner></Banner>
           <div className='max-w-[1300px] mx-auto mt-10 '>
                <h1 className='text-[2.5rem] font-semibold text-black text-center'>Trending Apps</h1>
                <p className='text-[#627382] text-[.9rem] font-normal text-center'>Explore All Trending Apps on the Market developed by us</p>

                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-10 '>
                    {
                        FirstEigntApp.map(eachApp=> <SingleApp key={eachApp.id} eachApp={eachApp}></SingleApp>)
                    }
                </div>
                <div className='flex justify-center items-center'> 
                    <button className='bg-gradient-to-r from-[#632EE3] to-[#9F62F2] px-4 py-1.5 text-[1rem] font-bold text-white rounded-[.4rem] mt-8'><Link to='/apps'>Show All</Link></button>
                </div>
           </div>
        </div>
    );
};

export default Home;