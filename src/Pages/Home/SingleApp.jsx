import React from 'react';
import downloadspng from '../../assets/icon-downloads.png'
import ratingpng from '../../assets/icon-ratings.png'
import { Link } from 'react-router';
const SingleApp = ({eachApp}) => {
   
    const {image,title,downloads,ratingAvg,id}=eachApp
    return (
        <Link to={`/apps/${id}`}>
            <div className='px-1.5 py-2 bg-white shadow-sm rounded-[.5rem] hover:scale-105 transition ease-in-out'>
               <div className='flex justify-center items-center'>
                    <img src={image} alt="App logo" />
               </div>
               <div>
                 <h1 className='text-1.2rem] font-medium text-black px-4'>{title}</h1>
               </div>
               <div className='flex justify-between px-4 mt-2'>
                  <p className='flex gap-1.5 text-green-500 bg-green-50 px-2 py-1.5 rounded-[.4rem] text-[1rem] font-bold'><img className='w-6 h-5' src={downloadspng} alt="downloadsIcon" />{downloads}</p>
                  <p className='flex gap-1.5  text-yellow-500 bg-yellow-50 px-2 py-1.5 rounded-[.4rem] text-[1rem] font-bold'><img className='w-6 h-5' src={ratingpng} alt="Ratingpng" />{ratingAvg}</p>
               </div>
           </div>
        </Link>
    );
};

export default SingleApp;