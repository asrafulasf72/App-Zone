import React from 'react';
import notFoundpng from '../../assets/App-Error.png'
import { Link } from 'react-router';

const AppnotFound = () => {
    return (
        <div className='flex flex-col justify-center items-center py-3'>
              <img src={notFoundpng} alt="" />
              <p className="text-[2.2rem] text-black font-semibold">App Not Found 😔</p>
              <button className='text-white text-[1rem] font-medium bg-gradient-to-r from-[#632EE3] to-[#9F62F2] px-3 py-1 rounded-[.4rem]'><Link to='/'>Back Home</Link></button>
        </div>
    );
};

export default AppnotFound;