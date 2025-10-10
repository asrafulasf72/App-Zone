import React, { useEffect, useState } from 'react';

const Installation = () => {

    const [installation, setInstallation]=useState([])

    useEffect(()=>{
        const installedApps=JSON.parse(localStorage.getItem("installation"))
        if(installedApps){
            setInstallation(installedApps)
        }
    },[])
    return (
        <div className=' bg-gray-100'>
            <div className=' max-w-[1300px] mx-auto'>
                <div className='py-10'>
                    <h1 className='text-[2.3rem] font-semibold text-center'>Your Installed Apps</h1>
                     <p className='text-[#627382] text-[.9rem] font-normal text-center'>Explore All Trending Apps on the Market developed by us</p>
                </div>

                <div className='flex justify-between items-center px-3'>
                    <h1 className='text-[1.2rem] font-semibold'>{installation.length} App Found</h1>
                    <button className='border-2 border-gray-300 rounded-[.4rem] px-3 py-1.5'>Short</button>
                </div>
              
            </div>
        </div>
    );
};

export default Installation;