import React, { useEffect, useState } from 'react';
import InstalledApp from './InstalledApp';

const Installation = () => {

    const [installationApps, setInstallation]=useState([])

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
                    <h1 className='text-[1.2rem] font-semibold'>{installationApps.length} App Found</h1>
                    <button className='border-2 border-gray-300 rounded-[.4rem] px-3 py-1'>Short</button>
                </div>

                <div className='py-2'>
                    {
                        installationApps.map(a=> <InstalledApp key={a.id} a={a}></InstalledApp>)
                    }
                </div>
              
            </div>
        </div>
    );
};

export default Installation;