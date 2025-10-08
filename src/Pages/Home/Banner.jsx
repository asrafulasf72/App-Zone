import React from 'react';
import play from '../../assets/play.png'
import app from '../../assets/app.png'
import heroBanner from '../../assets/hero.png'
import { Link } from 'react-router';

const Banner = () => {
    return (
        <div>
            <div className='max-w-[1300px] mx-auto px-2'>
                   <div className='flex flex-col justify-center items-center text-center max-w-[680px] mx-auto px-1 pt-10'>
                     <h1 className='text-[3rem] font-bold'>We Build<br/><span className='bg-gradient-to-r from-[#632EE3] to-[#9F62F2] bg-clip-text text-transparent'>Productive </span>Apps</h1>
                     <p className='text-[.9rem] font-normal text-[#627382]'>At App Zone, we craft innovative apps designed to make everyday life simpler, smarter, and more exciting.Our goal is to turn your ideas into digital experiences that truly make an impact </p>
                     <div className='flex gap-8 mt-3'>
                        <button className=' border-2 border-gray-300 rounded-[.3rem] px-3 py-1.5'> <Link className='flex items-center gap-1' to='https://play.google.com/store/apps?hl=en'><img className='w-4' src={play} alt="Play store" />Google Play</Link></button>
                        <button className=' border-2 border-gray-300 rounded-[.3rem] px-3 py-1.5'> <Link className='flex items-center gap-1' to='https://www.apple.com/app-store/'><img className='w-4' src={app} alt="App store" />App Store</Link></button>
                     </div>
                   </div>
                   <div className='flex justify-center items-center mt-10 px-2'>
                      <img src={heroBanner} alt="" />
                   </div>
            </div>
            <div className='bg-gradient-to-r from-[#632EE3] to-[#9F62F2]'>
                <div className='max-w-[800px] mx-auto py-10 px-2'>
                 <div>
                    <h1 className='text-center text-[3rem] font-semibold text-white'>Trusted by Millions, Built for You</h1>
                 </div>
                 <div className='text-white flex flex-col md:flex-row gap-2 justify-between items-center mt-5'>
                      <div className='flex flex-col items-center'>
                            <p className='text-[.8rem] font-light'>Total Downloads</p>
                            <h3 className='text-[2.8rem] font-bold'>29.6M</h3>
                            <p className='text-[.8rem] font-light'>21% more than last month</p>
                      </div>
                      <div className='flex flex-col items-center'>
                           <p className='text-[.8rem] font-light'>Total Reviews</p>
                           <h3 className='text-[2.8rem] font-bold'>906k</h3>
                           <p className='text-[.8rem] font-light'>46% more than last month</p>
                      </div>
                      <div className='flex flex-col items-center'>
                           <p className='text-[.8rem] font-light'>Active Apps</p>
                           <h3 className='text-[2.8rem] font-bold'>132+</h3>
                           <p className='text-[.8rem] font-light'>31 more will Launch</p>
                      </div>
                 </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;